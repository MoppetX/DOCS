# GATSBY


###[Quick Start](https://www.gatsbyjs.org/docs/quick-start)

if gastby isn't installed yet: 
``` $ npm i -g gatsby-cli ```
~ is path to home dir

if your setting up the complete project/path from scratch:
```
$ mkdir -p ~/path/to/parentOfSite

```

else
```bash
$ mkdir -p ~/Koding/0_projects/kerstinDengl.net/code

$ cd ~/Koding/0_projects/kerstinDengl.net/code

$ gatsby new moppets-website (or whatever name you want to call your personal website)
```
will ask which package manager you want to use: 
yarn or npm
(if you fuck up: rm -rf moppets-website/)

```
$ cd moppets-website
```
#### install npm dependencies and dev-dependencies
```
$ npm i    gatsby gatsby-plugin-react-helmet gatsby-plugin-sass gatsby-source-filesystem node-sass react react-dom react-helmet prop-types
$ npm i -D env-cmd prettier

$ git status
$ git commit -m "npm install gatsby dependencies and some dev. dependencies" 
````
####add .env file
```
$ touch .env
```

```
$ gatsby develop
```
if there's a problem with cache:
>Error: ./.cache/default-html.js
rm -rf .cache/

```
$ open http://localhost:8000
```

now create a repo on github with the same name as 'your-website-repo-name'

We will link it to your local git repo, so you can push the code to github

Then we will give netlify permission to pull from this github repo and build your site!

----------------------

## SASS

The `module.scss` extension is what you HAVE to use if you’re importing the file like so: `import styles from './mystyles.module.scss';`

… But if you’re importing it like this: `import './mystyles.scss';` then you can use the plain old `.scss` extension.



======================

###start a gatsby project from a git repo

\# **probably somewhere like ~/WebStorProjects/steve, but anywhere you like**

$ mkdir -p /path/to/where/you/want/to/clone/my/website

$ cd /path/to/where/you/want/to/clone/my/website


\# **install gatsby (CLI) globally**

$ npm i -g gatsby-cli


\# **clone my website and to a different name**

$ git clone https://github.com/nadgerz/gatsby-bootcamp steve-website

$ cd steve-website



\# **install all the dependencies from package.json**

$ npm i



\# **run the development server! It should say which port to use**.

$ npm start

\# **something like** <http://localhost:8000/>




