# GIT

## init

`$ git init`


you should probably begin tracking those files and do an initial commit:
```console
$ git add *.c
$ git add LICENSE
$ git commit -m 'Initial project version'
```

### Cloning an Existing Repository

```console
$ git clone https://github.com/libgit2/libgit2
```
If you want to clone the repository into a directory named something other than libgit2, you can specify the new directory name as an additional argument:
```console
$ git clone https://github.com/libgit2/libgit2 mylibgit
```

------------------

### Set Up git identities when working on many projects

**HOW TO:** Micah.soy/posts/setting-up-git-identities/

----------------

### .gitignore

GitHub maintains a fairly comprehensive list of good `.gitignore` file examples for dozens of projects and languages at **https://github.com/github/gitignore**

The rules for the patterns you can put in the `.gitignore` file are as follows:

- Blank lines or lines starting with `#` are ignored.
- Standard glob patterns work, and will be applied recursively throughout the entire working tree.
- You can start patterns with a forward slash (`/`) to avoid recursivity.
- You can end patterns with a forward slash (`/`) to specify a directory.
- You can negate a pattern by starting it with an exclamation point (`!`).

Glob patterns are like simplified regular expressions that shells use. An asterisk (`*`) matches zero or more characters; `[abc]` matches any character inside the brackets (in this case a, b, or c); a question mark (`?`) matches a single character; and brackets enclosing characters separated by a hyphen (`[0-9]`) matches any character between them (in this case 0 through 9). You can also use two asterisks to match nested directories; `a/**/z` would match `a/z`, `a/b/z`, `a/b/c/z`, and so on.

Here is another example `.gitignore` file:

```bash
# ignore all .a files
*.a

# but do track lib.a, even though you're ignoring .a files above
!lib.a

# only ignore the TODO file in the current directory, not subdir/TODO
/TODO

# ignore all files in any directory named build
build/

# ignore doc/notes.txt, but not doc/server/arch.txt
doc/*.txt

# ignore all .pdf files in the doc/ directory and any of its subdirectories
doc/**/*.pdf
```