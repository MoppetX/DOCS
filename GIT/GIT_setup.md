# GIT

## Setup

Git comes with a tool called `git config` that lets you get and set configuration variables that control all aspects of how Git looks and operates. These variables can be stored in three different places:

1. `/etc/gitconfig` file: Contains values applied to every user on the system and all their repositories. If you pass the option `--system` to `git config`, it reads and writes from this file specifically. (Because this is a system configuration file, you would need administrative or superuser privilege to make changes to it.)
2. `~/.gitconfig` or `~/.config/git/config` file: Values specific personally to you, the user. You can make Git read and write to this file specifically by passing the `--global` option, and this affects *all* of the repositories you work with on your system.
3. `config` file in the Git directory (that is, `.git/config`) of whatever repository you’re currently using: Specific to that single repository. You can force Git to read from and write to this file with the `--local` option, but that is in fact the default. (Unsurprisingly, you need to be located somewhere in a Git repository for this option to work properly.)



### Your Identity

The first thing you should do when you install Git is to set your user name and email address. This is important because every Git commit uses this information, and it’s immutably baked into the commits you start creating:

```console
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```

### Your Editor

If not configured, Git uses your system’s default editor. If you want to use a different text editor, such as nano, you can do the following:

```console
$ git config --global core.editor nano
```



`$ git config --list --show-origin`
view all of your settings and where they are coming from

`$ git config --list`
ist all the settings Git can find

`brew install git-extras` 
enables e.g. **git-[TAB TAB]**

`$ gitconfig` opens .gitconfig in a nano session 

Save a .gitconfig file in $HOME, with at least the below input:

```
[alias]
    alias = config --get-regexp alias
    br = branch
    ci = commit
    com = commit -m
    ocmmit = commit
    commmit = commit
    commi = commit
    ocmmi = commit
    co = checkout
    dc = diff --cached
    df = diff
    last = log -1 HEAD
    lg = log -p
    lgg = log --graph --pretty=format:'%Cred%h%Creset -%C(magenta)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative
    lggn = log --graph --pretty=format:'%Cred%h%Creset -%C(magenta)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative --name-only
    lol = log --graph --decorate --pretty=oneline --abbrev-commit
    lola = log --graph --decorate --pretty=oneline --abbrev-commit --all
    ls = ls-files
    master = checkout master
    # allows you to quickly merge the current branch into another, by combining two commands and one parameter.
    qm = "!git checkout $1; git merge @{-1}"
    st = status --short --branch
    unstage = reset HEAD --
    untracked = status --untracked-files=normal
    uncommit = reset HEAD^

[color]
    ui = true
```

