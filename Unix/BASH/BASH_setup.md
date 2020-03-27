# BASH

## Bourne Again Shell



1. check what Shell is curently running: `$ echo $SHELL`
2. Setup a `.bash_profile` file in $HOME
   see below
3. `$ chsh -s /bin/bash`
   Using bash as a shell
4. `$ brew install bash-completion`
5. `$ na` 
   show aliases file in nano



> !/bin/bash
>
> # set -x
>
> #
> #    Split out ENV stuff into separate files for ease of maintainability.
> #
> export ENV_DIR=${HOME}/.env.d
>
> # echo "ENV_DIR:${ENV_DIR}<<<"
>
> #
> #    This comes first - so any scripts I have can be used here and win in .bashrc
> #
> export PATH=${HOME}/bin:${PATH}
>
> #
> #    node
> #
> tool="node"
> envFile="${ENV_DIR}/${tool}/.env"
> [ -s "${envFile}" ] && . "${envFile}" # Bring in node env
>
> #
> #    Homebrew and /usr/local/bin in general.
> #
> export PATH=${PATH}:/usr/local/sbin # Homebrew executables
> export PATH=${PATH}:/usr/local/bin # Homebrew executables
>
> #
> #    bash completion
> #
> bashCompletionFile="/usr/local/share/bash-completion/bash_completion" # v2 for bash 4+
> bashCompletionFile="/usr/local/etc/bash_completion"
>
> if [ -f "${bashCompletionFile}" ]
> then
>     . "${bashCompletionFile}"
> else
>     echo "no bash completion file: ${bashCompletionFile}"
> fi
>
>
> # export CLICOLOR=1
> # export LSCOLORS=GxFxCxDxBxegedabagaced
>
> export LANG=en_US.UTF-8
>
> # getVersionNumber=$(git --version | awk '{print $NF}')
> #
> # gitCompletionFile=/usr/local/Cellar/git/${getVersionNumber}/etc/bash_completion.d/git-completion.bash
> #
> # if [ -f ${gitCompletionFile} ]
> # then
> #    . ${gitCompletionFile}
> #fi
>
> # test -e "${HOME}/.iterm2_shell_integration.bash" && source "${HOME}/.iterm2_shell_integration.bash"
>
> complete -d cd
>
> #
> #    functions
> #
> tool="functions"
> envFile="${ENV_DIR}/${tool}/.env"
> [ -s "${envFile}" ] && . "${envFile}" # Bring in functions env
>
> translate(){ wget -qO- "http://ajax.googleapis.com/ajax/services/language/translate?v=1.0&q=$1&langpair=$2|${3:-en}" | sed 's/.*"translatedText":"\([^"]*\)".*}/\1\n/'; }
>
> export EDITOR=nano
>
> # shopt -o noclobber
> # shopt -s histappend
> # shopt -s histreedit
> # shopt -s histverify
>
> # TODO - other HIST options.
> export HISTSIZE=50000
> export HISTCONTROL='ignoreboth'
> # export HISTCONTROL=ignoredups
>
> #
>
> #    Aliases at end?
> #
> source ${HOME}/.aliases
>
> export LESSOPEN="| /usr/local/bin/src-hilite-lesspipe.sh %s"
> export LESS=" -R "

