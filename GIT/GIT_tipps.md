# GIT

##Tipps & Tricks



**fetch from upstream**

```$ git remote -v ```

that will show you the names

```git fetch upstream```

```git merge upstream/master```

in VIM: : key and then type wq OR ZZ 

-----------------------

###Forked Repos

change into your forked local repo directory

`$ cd /path/to/forked-repo`

see the 'remotes' you have. This shows what remote repos you are connected to this will be the repo on YOUR github account

`$ git remote -v`

but NOW we want to 'connect' to the *original* repo. We give is a name like 'upstream'. 'origin' is typically given automatically to the one you cloned from.

`$ git remote add upstream https://github.com/nadgerz/the-website-of-the-one-and-only-stephen-a-ingram-esq.git`

check what is now connected
`$ git remote -v`

Now your local repo is connected to two remote repos... your forked one and my original

now we run a *fetch* (NOT a pull!) of my original using the easier to remember remote name

$ git fetch upstream

Now we decide what branch to merge into our current branch (origin/master or just master for short)
So this is saying 'git, would you please merge the contents of the upstream/master branch into my current one, [which is origin/master]'

$ git merge upstream/master

it might ask you for a comment as towhy you are merging.

then we can push all that back up to your forked repo

$ git push origin master

which is just the long-hand for

$ git push