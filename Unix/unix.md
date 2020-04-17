# UNIX



`ctrl D`
to close a terminal an write out the bash history

`^<toReplace>^<replaceWith>`
Replace one

`$ !![optional]` 
Repeats the last command, you can add onto it

`history | head -n` `history | tail -n`
show either n cmds from the beginning OR the end of the input history

`$ du` 
"disk usage", shows size of files in current DIR

`$ man`
shows linux manual

`$ cat path/to/file`
Will print contents of file (should be text) to terminal; careful with file sizes of binary files!

`$ reset`
for whn you haven't listened to the point above and need to reset your terminal window :) 

`$ ag [what your looking for] .`
**Search** with Silver Searcher (**ag**) from your current dir (.)

`$ find . -type f -exec grep [X] {} \;`
**Search** with find (more powerful, but potentially slower)
"find all files (f) from here (.), then exec(ute) the following command: grep containing [X]"

**Search** for your previous commands

```bash
ctr + r
```

`history | tail -30`
Last 30 unix command line commands you ran

`grep`
global regular expression print


`tool --help`
will show you available commands, flags

long listing
``ls -lat``

remove a directory and its contents
``rm -rf``

move all files andeven dot files (with at least two characters after the dot) from your current levvel UP one (..)
``mv .??* * ..``





### $PATH

We use this variable to list all the locations (paths! :) ) to where our most common commands are found.

- Most system ones are in  **/bin, /usr/bin** and **/usr/sbin**
- Most 3rd party install, like from homebrew, are in **/usr/local/bin**
- And then by convention we also include **~/bin** for any personal scripts

The paths are separated by ':' and the order determines which commands are found first if the names are the same and the PATH variable can be quite long

Try this: `$ echo $PATH~`

So, now, if you need to add a new location you can add it to your PATH list in your .bashrc and the next terminal you open will now know to look in that location too!



#### Nano

```bash
$ cp .bashrc .bashrc.bak
$ nano .bashrc
```

Go to the end of the file and add the following line (singular) (careful to point to the **DIRECTORY** where the file lies!)

```bash
export PATH=/path/to/the/name/of/the/DIRECTORY/where/the/compass/file/lives:$PATH

PATH=$PATH/path/to/the/name/of/the/DIRECTORY/where/the/compass/file/lives
```

save the file and exit nano (`ctrl + x`)

Then restart a terminal and check:
`$ which [FILE]`