---
title: 'A Script for Creating React Components -- Part 2'
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

TODO explain `sed`

This is the second part of this post on writing a bash script to automate some parts of creating React components. In the first part, we left off with a functioning, but useless, bash script. Now, let's make it useful.

Recall that our proposed script will take an argument representing the name of the component. The basics of handling arguments in a bash script are simple enough. When running a bash script like this

```bash
$ some-script foo bar etc
```

these positional parameters are accessible inside your script as the variables `$1`, `$2` and `$3`, respectively. We can test this by changing our script to

```bash
echo $1 $2 $3
```

Then if we run the script those arguments will be echoed back to us.

```bash
$ crc foo bar etc
> foo bar etc
```

So, we know how to access our parameter. Let's just rename it to `$NAME` to make our code a bit more readable:

```bash
NAME=$1
```

Now let's recall what we need to do with this name parameter. 

1. Make a directory called `name` inside the current working directory.
2. Create a file `name/styles.css` in the same directory.
3. Create a file called `name/name.jsx` in that same directory.
4. Add boilerplate for a functional component into that file.

The first two parts is are simple. To create the directory, we simply add one line to our script:

```bash
NAME=$1
mkdir $NAME
```

Here we are calling the `mkdir` on the value that we have stored in the `$NAME` variable. Go ahead and try this out with

```bash
$ crc foo
```

You won't get feedback when running the command (providing you deleted the `echo` statement from earlier), but you should find a directory called `foo` in your cwd. 

Next, we need to create a file. We can do this with the `touch` command. This create an empty file with the given name. Of course, want to put this file inside of the `foo` directory. So add this line to the script[^1]:

```bash
$ touch $NAME/styles.css
```

Now you should have a file called `styles.css` inside of `foo`. We can add the JSX file in the same way:

```bash
$ touch $NAME/$NAME.jsx
```

The next step is to insert text into this JSX file. Let's create a directory called `crc-templates` inside the same directory as our script and create a file called `func-component.jsx` inside it with the following content:

```jsx
import React from 'react';

const COMPONENT = () => {
  return (
    <></>
  );
};

export default COMPONENT;
```

I'm sure there are plenty of other ways of handling this text content, but this has the benefit of syntax highlighting, which will be great if we need to adjust it or add additional templates. Note the use of `COMPONENT` here. This is intended to be replaced by our `$NAME` variable. But first, let's just insert it. I'll show you a way to do this, and then explain it:

```bash
NAME=$1
mkdir $
$ touch $NAME/styles.css
touch $NAME/$NAME.jsx
cat ~/bin/crc/crc-templates/func-component.jsx > $NAME/$NAME.jsx
```

This new line might seem intimidating, but it isn't so bad. Let's start by running the first part at the command line -- everything to left of the `>`.[^2] See how the text from the file is printed to the screen? That's what `cat` does -- it outputs the contents of a file[^3]. Then we have that `>` symbol.[^4] This is the redirection operator. It basically says "take the output of the program on the left and insert it into the file on the right".[^5] We can try this out by running the following code at the commmand line:

```bash
$ echo "redirect me" > a-file.txt
```

Here, the output of the `echo` program (ie, the text "redirect me") is redirected into `a-file.txt`. But note that we did not even need to create the file before redirecting into it! So we can simplify our script a bit already:

```bash
NAME=$1
mkdir $NAME
$ touch $NAME/styles.css
cat ~/bin/crc-templates/func-component.jsx > $NAME/$NAME.jsx
```

Perfect. The last part is to replace the words `COMPONENT` with the value of the `$NAME` variable. We can do this with the `sed` program. I'll show the line of code and then explain it:

```bash
sed -i -e 's/COMPONENT/'$NAME'/g' $NAME/$NAME.jsx 
```

TODO - explain `sed`. What do those flags do?


[^1]: If you use the same directory name you will have to delete the `foo` directory with `rm -rf foo` before running the script again.

[^2]: You should be in the same directory as your script when you run this command.

[^3]: There is probably a better way to handle the file path, rather than hard coding it like `~/bin/...`. But it was failing with `./...`.

[^4]: `cat` is short for "concatenate". This program is turning 50 this year, having [been around](https://en.wikipedia.org/wiki/Cat_(Unix)) since the dawn of Unix. Make sure to wish it a happy birthday.

[^5]: This is a simplification, of course. For more details, see [here](https://tldp.org/LDP/abs/html/io-redirection.html)