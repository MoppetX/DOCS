# npm

## bits

`npm init -y` 
START!

`npm ci`
will look at you package-lock.json file and only install tools of the right (specified) version

`npm info [package name]`
will give you info via commandline on the module, like who worked for it or where to go for more info

NPM (and node)







**NEW PROJECT:**

- see if there is an **upgrade** to npm/node, *unless* there is a reason to have an older version



- if you upgrade: install and use **NVM** (Node Version Manager)



- if there’s a **package.json** file: Webstorm will offer to install the required node packages for you



=====================



Various commands:



**npm install**   

if you don’t specify a package (like ‘react’) this will install all packages listed in package.json 



**npm install -g** 

to install/upgrade 'global' npm packages



**npm install --save-dev  ... ** 

to install development packages (will NOT get issued with the application when in production)



**npm install --save** ** ... ** 

to install production packages (WILL GET issued with the application when in production)



**man cat** 

to see the manual





In the future, we will move to use



**yarn** instead of npm



**nvm** to deal with node version





--------------------------



**Syncing changes to the browser**

`nom init` 

If already package.json, run this:

`npm install browser-sync run-script-os --save-dev`

This gets 2 packages and stores them as development dependencies

Edit the package.json file and add this section



```json
"scripts": {

 "start": "run-script-os",**

 "start:win32": "browser-sync start --server --files '\**/\*.css, \**/\*.html, \**/\*.js, !node_modules/\**/\*' --directory --port 7777 --browser \"C:\\Program Files\\Firefox Developer Edition\\firefox.exe\"",**

"start:darwin:linux": "browser-sync start --server --files '\**/\*.css, \**/\*.html, \**/\*.js, !node_modules/\**/\*' --directory --port 7777 --browser 'Google Chrome'"**

 },

```

We will have to change the entries if you use a different browser.

Now run: 

**npm start**

pick the file you are interested in, probably index.html



Connected to Browser Sync!

Edit and save!