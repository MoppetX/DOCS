# GIT

## Setup



`brew install git-extras` 
enables e.g. **git-[TAB TAB]**

`$ gitcconfig` opens .gitconfig in a nano session 

Save a .gitconfig file in $HOME, with at least the below input:

```
[alias]
    alias = config --get-regexp alias
    br = branch
    ci = commit
    cim = commit -m
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

