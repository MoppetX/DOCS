# GIT

## Misc

- A shorter command to delete a branch remotely: 
`git push origin:<branch>`
  
- delete a branch remotely
`git push <remote> --delete <branch>`
  
- show list of all available commands
`git-TABTAB`
  
- show available git aliases
`$ git alias`
  
- remove a file after it was staged:

  ```git checkout -- some/file``` 

- delete a file from git: 

  ```git rm some/file```

- create new branch
`$ git checkout -b <branchName>`
  
- lists recent commands that involved the word `git` :

  ```$ history | grep git```

- If you want the exact order of commands:

  `history | less`

  I pipe it to less otherwise it outputs 50000 lines to the screen

  `space-bar` pages down the history
  `b` goes back a page
  `q` to quit back to the command line and exit the `less` session.
  `G` to go to the more recent (last) entry
  `1G` to go back to the top (oldest entry)
  
- in `git diff` or ANYTHING that goes into a less session: `/^diff` to search for the word 'diff' at the beginning of a line; you can then jump from one instance of the match to the next with `n` 

- `git remote -v` will show you the remote repos currently connected

- `git remote remove [origin/name]` will remove the named remote repo

-  `git log --author=<name>` show only logs by named author

-   `git lg --author=Haithem --since='2 weeks ago'` only show logs for the specified time 

- reset ALL changes
  `reset --hard HEAD`

- Unstage the file to current commit (HEAD):
  ` $ git reset HEAD <file>`
  
- updating the $PATH cache
  `hash -r`