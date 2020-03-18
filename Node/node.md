Go to the terminal tab = fn F12



We will now install the Node Version Manager (nvm), which gives us

access to node (a javascript engine) and also a way to install node libraries (packages), which are tools to make our life easier :)





run 'nvm --version' ... "run" always means "type in 'nvm --version' and hit Enter/Return"



If you do not get a clean output with a simple number, like 



"""

$ nvm --version

0.31.0

"""



Then we need to install nvm, so run the following in the terminal

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
```





Now run 'exit' and restart the terminal tab





run 'nvm -v'



good value? 



run 'nvm install v9.4.0'



run 'node -v'



run 'npm -v'





run 'npm init' 

Hit return for each option





run 'npm install --save-dev browser-sync run-script-os'

This will take a minute or so

We now need to edit the package.json file, so bring that into the editor

This is the code we will be adding:



'''

  "scripts": {

​    "start": "run-script-os",

​    "start:win32": "browser-sync start --server --files '**/*.css, **/*.html, **/*.js, !node_modules/**/*' --directory --port 7777 --browser \"C:\\Program Files\\Firefox Developer Edition\\firefox.exe\"",

​    "start:darwin:linux": "browser-sync start --server --files '**/*.css, **/*.html, **/*.js, !node_modules/**/*' --directory --port 7777 --browser 'Google Chrome'"

  },