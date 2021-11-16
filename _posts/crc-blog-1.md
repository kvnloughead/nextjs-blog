---
title: 'A Script for Creating React Components -- Part 1'
excerpt: 'A more complicated Bash scripting tutorial'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2021-10-13'
# TODO - change images
author:
  name: Kevin Loughead
  picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
---

After creating new React components manually for the umpteenth time I decided that the process could be automated a bit. We have CRA for React _apps_. Why not CRC, for React components. This is part 1 of a two part article that will walk you through writing a Bash script to automatically create the necessary boilerplate for a React component in the current working directory. I considered writing this script using Python or NodeJS, but instead decided (for some reason) to write a bash script. Writing bash scripts is a bit of an acquired taste. The Bash shell itself is 30 year old tech, and many of its the bread and butter commands date back to the dawn of Unix in the early 70's -- if not earlier. So you might miss out on some of smoothness and hand-holding of a modern language like Python or JavaScript. But it is still a powerful tool with many applications, and gaining some familiarity with it is well worth your while. And for any retro computing or history of computation geeks out there, playing around with Bash is a great hobby.

These articles assume a certain level of familiarity with bash scripting. If you are looking for a more gentle introduction, checkout my [post](/gh-new-repo) about writing a script to automate the creation of new repos on Github. 

Let's get started by describing the goal of this program, and some of the assumptions that we'll be making. The desired usage of our program is as follows. If we type in a command like this

```plain-text
$ crc Header
```

into the terminal, it will create for us a file structure like this

```plain-text 
Header/
  |______ Header.js
  |______ styles.css
```

in the current working directory. Inside `Header.js` will be the following boilerplate:

```jsx
import React from 'react';

const Header = () => {
  return (
    <></>
  );
};

export default Header;
```

Of course, this is just one of the many possible styles of writing React components. Class components, css-modules... we can put these variations on our `TODO` list. But we _will_ be implementing an option to use styled-components, because that's what I've been using lately. The difference in this case won't be very great, actually. Instead of `styles.css`, we'll need `styles.js`, and we' wi'll add a few import statements to the files so we don't have to type them every time. We'll go into that in more detail when the time comes.

Now that we've described what our script will do, it's time to get down to work. First, we need to create a script and make it executable. Let's create it in our `~/bin` directory, where `~` refers to the user directory. Depending on what system you're running, this directory may or may not exist already. If it doesn't, feel free to create it. We'll store our executable (aka "_bin_ary") files here. If you create this directory yourself, you will have to instruct your OS to look there when looking for commands to execute. Otherwise it won't find your program when try to run it. To do this, first open your `~/.bashrc` file in an editor. This is where many of your user settings for bash are stored. If you search it for the string `PATH` and you see a line that looks like this

```bash
export PATH="$HOME/bin:$PATH"
```

then your `~/bin` directory is already on the "PATH" that your OS will follow when looking for executables. If not, add that line somewhere. You might want to mark off a section for settings that you enter yourself, to help you distinguish between it and the initial settings. But the changes won't take effect until either

1. you start a new terminal session, or
2. you make bash register the changes by "sourcing" `~/.bashrc`.

The command for the second option is `source ~/.bashrc`, or `. ~/.bashrc` for short.

Now let's create a file called `crc.sh` inside `~/bin`. There is one more step we need to take before we can execute our program:

```bash
chmod u+x crc.sh
```

Run this inside your `~/bin` directory and it will grant permission for the file to be executed (`x`) by the user (`u`). Now let's make sure it runs, by writing the traditional first program. Add this text to `crc.sh`

```bash
echo "Hello, World!"
```

and type the command `crc.sh` in the terminal. You should see `Hello, World!` displayed in the terminal. And it should work fine from any directory, not just `~/bin`. Perfect. But can we call it without the `.sh`? There are at least two ways to achieve that. First, you could simply change the file name. Try changing the file name with

```bash
$ mv crc.sh crc
```

Now it should run simply with `crc`. But if you look at the file `crc` now you'll note the lack of syntax highlighting. I like it old school, but that's a bit too old school for me. So instead, we will use an `alias`. Remember `~/.bashrc`, where we exported the `bin` directory to your path? Open that up again and scroll to the bottom. We are going to set up a simple alias so that will allow us to call `crc.sh` by using simply `crc`. This is similar to creating a variable, but differs in some key respects, which we will cover in more detail later on.

```bash
alias newCommmand="commands and arguments"
```

In this case, we don't need arguments. We can just write:

```bash
alias crc="crc.sh"
```

Now if we source `~/.bashrc` again and run `crc` we should see that it works. Great! We have a 'Hello World' program. In the next installment, we will make the program do something a bit more useful.



