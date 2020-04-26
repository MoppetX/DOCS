# GIT

## Tipps & Tricks


### Getting Help
If you ever need help while using Git, there are three equivalent ways to get the comprehensive manual page (manpage) help for any of the Git commands:
```bash
$ git help <verb>
$ git <verb> --help
$ man git-<verb>
```

-------------------

`git branch -a`
show all  branches (not just local ones)

**fetch from upstream**
<<<<<<< Updated upstream
```$ git remote -v ```

that will show you the names
```git fetch upstream```

```git merge upstream/master```
=======

`$ git remote -v `
that will show you the names

```
git fetch upstream
git merge upstream/master
```
>>>>>>> Stashed changes

in VIM: : key and then type wq OR ZZ 


no upstream :
```bash
fatal: The current branch <YourBranch> has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin <YourBranch>
```

-----------------------



_________

### Short Status

While the `git status` output is pretty comprehensive, it’s also quite wordy. Git also has a short status flag so you can see your changes in a more compact way. If you run `git status -s` or `git status --short` you get a far more simplified output from the command:

```console
$ git status -s
 M README
MM Rakefile
A  lib/git.rb
M  lib/simplegit.rb
?? LICENSE.txt
```

New files that aren’t tracked have a `??` next to them, new files that have been added to the staging area have an `A`, modified files have an `M` and so on. There are two columns to the output — the left-hand column indicates the status of the staging area and the right-hand column indicates the status of the working tree. So for example in that output, the `README` file is modified in the working directory but not yet staged, while the `lib/simplegit.rb` file is modified and staged. The `Rakefile` was modified, staged and then modified again, so there are changes to it that are both staged and unstaged.



-------------

### Forked Repos

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

`$ git fetch upstream`

Now we decide what branch to merge into our current branch (origin/master or just master for short)
So this is saying 'git, would you please merge the contents of the upstream/master branch into my current one, [which is origin/master]'

`$ git merge upstream/master`

it might ask you for a comment as towhy you are merging.

then we can push all that back up to your forked repo

$ git push origin master

which is just the long-hand for

$ git push
<<<<<<< Updated upstream
=======
```
>>>>>>> Stashed changes
