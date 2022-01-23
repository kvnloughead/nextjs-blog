---
title: 'Accessing Windows User Directory in WSL2'
excerpt: "Not as easy as it sounds."
coverImage: ''
date: '2021-01-20'
author:
  name: Kevin Loughead
  picture: ''
ogImage:
  url: ''
---

I know I should name things more consistently, but I don't always do so. This includes usernames. Recently this inconsistency caused problems for me when I was trying to write some aliases to access certain files in my Windows file system. They worked fine, but when I tried setting up the aliases on a new machine they broke. So I decided to figure out how to access the info programmatically. How hard could it be?

Well, harder than I thought it would be. One can find any number of solutions out there that apparently work just fine for the folks who tout them, but which fail for one or more ways when I try them. I won't go into all the things I tried that didn't work. I'll just explain one — why it failed and what I did to make it work.

One solution that appears pretty frequently is this one:

```plain-text
$ cmd.exe /c "echo %USERPROFILE%"
```

This is expected to output `C:\Users\kvnlo`. And it does... but unfortunately for me it outputs some other stuff too:

```plain-text
'\\wsl.localhost\Ubuntu-20.04\home\kevin'
CMD.EXE was started with the above path as the current directory.
UNC paths are not supported.  Defaulting to Windows directory.
C:\Users\kvnlo
```

The problem apparently is that I'm running this command from inside WSL. If I `cd` into something under `/mnt/c` it gives the expected output:

```plain-text
$ cd /mnt/c && "echo %USERPROFILE%"
C:\Users\kvnlo
```

Unfortunately, I couldn't find a way to save this output to a variable. I'm sure this was attributable to my weak grasp of how variables work in bash, but a number of reasonable guesses failed to produce the results I wanted. I won't put my ignorance on display by sharing examples. Suffice it to say that after a short while I decided to try a different tactic. I realized there was another way to supress the unwanted output in that command, keeping only the user directory — I just needed to send the error to the void:

```plain-text
$ cmd.exe /c "echo %USERPROFILE%" 2> /dev/null
C:\Users\kvnlo
```

For those who are unaware, in bash you can use the `>` operator to redirect output. By itself, it redirects standard output. To redirect standard error you write `2>`. In this case I am redirecting the error to [`/dev/null`](https://linuxhint.com/what_is_dev_null/), which is kind of like a black hole. Except luckily it doesn't have any gravity, it only consumes what you tell it to consume.

At this point, I thought only one more trick remained — I just needed to convert it from a Windows filepath to a WSL *nix path. I remembered that there was a command `wslpath` for that, so that was fine. I tried piping the filepath into `wslpath`, and I tried redirecting, but those don't work. This, however does:

```plain-text
$ wslpath `cmd.exe /c "echo %USERPROFILE%" 2> /dev/null`
/mnt/c/Users/kvnlo
```
However, this does not

```plain-text
$ windows_userdir=`wslpath `cmd.exe /c "echo %USERPROFILE%" 2> /dev/null``
wslpath: Invalid argument
```

and replacing the back-ticks with the should-be-nestable `$(...)` operator doesn't work either. Instead of bashing my head against that wall, I opted for the easy way out:

```bash
windows_userdir=`cmd.exe /c "echo %USERPROFILE%" 2> /dev/null`
windows_userdir=`wslpath "${windows_userdir}"`
```

And with that we're done, right? All I need to do is use this think to make filepaths, something like this

```plain-text
$ somepath="${windows_userdir}/some/windows/file/path"
/some/long/windows/file/path
# oh, why!?
```

And this was an interesting problem, I struggled for a while. Tried it out with some arbitrary variable and it works fine:

```plain-text
$ foo='why-me'
$ somepath="${foo}/rest/of/path..."
why-me/rest/of/path...
```

The insight came when I combined these last two examples:

```bash
$ windows_userdir=`cmd.exe /c "echo %USERPROFILE%" 2> /dev/null`
$ windows_userdir=`wslpath "${windows_userdir}"`
$ somepath="${windows_userdir}/rest/of/path"
/rest/of/path...lo
``` 

Now that's interesting. What could that mean? Well

```bash
/mnt/c/Users/kvnlo
/rest/of/path...lo
```

Hmm, that's odd. I intended for the concatenation to happen _horizontally_. But it looks like the second part of the path is being laid _on top of_ the first part. What could the issue be? Well, the problem is caused by that differences in line endings between Windows and *nix. On Windows, lines are ended with `\r\n`. The `\n` is the more familiar newline character. The `\r` is a carriage return. This carriage return was present in my `windows_userdir` variable, so the result was like this:

```bash
/mnt/c/Users/kvnlo\r/rest/of/path...
```

So, it's almost as if I was using a typewriter. I typed `/mnt/c/Users/kvnlo`. Then, I perform a carriage return — meaning move the cursor back to the beginning of the line, and then typed `rest/of/path...`. The main difference is that the characters that were typed initially were no longer visible like they would have been on a typewriter. 

The solution to this was easy enough:

```bash
windows_userdir=`cmd.exe /c "echo %USERPROFILE%" 2> /dev/null | tr -d '\r'`
```

I just piped the string with the carriage return into `tr`, which is a handy tool for translating and deleting characters that I hadn't used before. To delete a character, you simply use the `-d` flag and supply the character.

Here is the final code that I placed in my `.bashrc`.

```bash
windows_userdir=`cmd.exe /c "echo %USERPROFILE%" 2> /dev/null | tr -d '\r'`
windows_userdir=`wslpath "${windows_userdir}"`
```

