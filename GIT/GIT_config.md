# GIT 

## Config



```bash
git
---
Add sections to .git/config to override the ~/.gitconfig entries

$ brew install git-extras
$ git alias
$ git-TABTAB - a lot of extra useful git commands

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

