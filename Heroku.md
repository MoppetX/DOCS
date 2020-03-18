# Heroku




opens your browser, logs your local heroku command with your heroku account
```heroku login```

check whether you are logged in correctly
`heroku whoami`

links your heroku account with docker command, so you can send your docker images to heroku
```heroku container:login```

Let's change directory to this week, please replace the ${wtm-jscc2019} with the correct path
`cd ${wtm-jscc2019}/week-8`

now focusing on backend
`cd backend`

this is only for heroku, because it works with git repos for each app
`git init`

create the heroku app for backend
```heroku create "jscc19-${USER}-backend"```

make heroku build the image with docker and push it to its repositories, web here means it's an app with web interface
```heroku container:push web```

now we have pushed the image, it's time to release
```heroku container:release web```

and open the app, you should see a hello world
```heroku open```

let's configure the database connection
```heroku config:set MONGODB_CONNECTION_STRING="mongodb+srv://jscc19:<password>@wtmberlin-jscc2019-n19rs.gcp.mongodb.net/${USER}"``

now you can use other routes which requires mongodb. an empty list expected for now.
```heroku open /person/all```

now focusing on frontend
```cd ../frontend```

this is again only for heroku
```git init```

create the heroku app for frontend
```heroku create "jscc19-${USER}-frontend"```

make heroku build the image with docker and push it to its repositories, web here means it's an app with web interface
```heroku container:push web```

configure backend url for frontend
```heroku config:set VUE_APP_API_URL="https://jscc19-${USER}-backend.herokuapp.com"```

now we have pushed the image, it's time to release
```heroku container:release web```

and open the app
`heroku open`



------------------------

##  Troubleshooting

### Logs

`heroku logs --tail`

### ERRORS

-  **npm ERR! Failed at the TheEternalMenu@1.0.0 start script.
  **``heroku container:push web``

  `heroku container:release web`

- Push rejected to tem-backend.
```bash
remote: !       Push rejected to tem-backend.
remote: =!= Your app does not include a heroku.yml build manifest. To deploy your app, either create a heroku.yml: https://devcenter.heroku.com/articles/build-docker-images-heroku-yml
remote: Or change your stack by running: 'heroku stack:set heroku-18'
```
​		`heroku stack:set heroku-18` fixed this



------------------------

## Build


```bash
remote: -----> Creating runtime environment
remote:        
remote:        NPM_CONFIG_LOGLEVEL=error
remote:        NODE_ENV=production
remote:        NODE_MODULES_CACHE=true
remote:        NODE_VERBOSE=false
remote:        
remote: -----> Installing binaries
remote:        engines.node (package.json):  unspecified
remote:        engines.npm (package.json):   unspecified (use default)
remote:        
remote:        Resolving node version 12.x...
remote:        Downloading and installing node 12.14.0...
remote:        Using default npm version: 6.13.4
remote:        
remote: -----> Installing dependencies
remote:        Installing node modules (package.json + package-lock)
remote:        
remote:        > husky@3.1.0 install /tmp/build_a4b83e43f0f8cbaadda0769ea8a1db0d/node_modules/husky
remote:        > node husky install
remote:        
remote:        husky > Setting up git hooks
remote:        Command failed: git rev-parse --show-toplevel --git-common-dir
remote:        fatal: not a git repository (or any parent up to mount point /)
remote:        Stopping at filesystem boundary (GIT_DISCOVERY_ACROSS_FILESYSTEM not set).
remote:        husky > Failed to install
remote:        
remote:        > core-js@2.6.10 postinstall /tmp/build_a4b83e43f0f8cbaadda0769ea8a1db0d/node_modules/babel-plugin-espower/node_modules/core-js
remote:        > node postinstall || echo "ignore"
remote:        
remote:        
remote:        > core-js@2.6.10 postinstall /tmp/build_a4b83e43f0f8cbaadda0769ea8a1db0d/node_modules/call-matcher/node_modules/core-js
remote:        > node postinstall || echo "ignore"
remote:        
remote:        
remote:        > core-js@2.6.10 postinstall /tmp/build_a4b83e43f0f8cbaadda0769ea8a1db0d/node_modules/empower-core/node_modules/core-js
remote:        > node postinstall || echo "ignore"
remote:        
remote:        
remote:        > core-js@2.6.10 postinstall /tmp/build_a4b83e43f0f8cbaadda0769ea8a1db0d/node_modules/espurify/node_modules/core-js
remote:        > node postinstall || echo "ignore"
remote:        
remote:        
remote:        > core-js@2.6.11 postinstall /tmp/build_a4b83e43f0f8cbaadda0769ea8a1db0d/node_modules/fbjs/node_modules/core-js
remote:        > node -e "try{require('./postinstall')}catch(e){}"
remote:        
remote:        
remote:        > core-js@3.4.8 postinstall /tmp/build_a4b83e43f0f8cbaadda0769ea8a1db0d/node_modules/core-js
remote:        > node -e "try{require('./postinstall')}catch(e){}"
remote:        
remote:        
remote:        > husky@3.1.0 postinstall /tmp/build_a4b83e43f0f8cbaadda0769ea8a1db0d/node_modules/husky
remote:        > opencollective-postinstall || exit 0
remote:        
remote:        
remote:        > mongodb-memory-server@6.0.2 postinstall /tmp/build_a4b83e43f0f8cbaadda0769ea8a1db0d/node_modules/mongodb-memory-server
remote:        > node ./postinstall.js
remote:        
remote:        mongodb-memory-server: checking MongoDB binaries cache...
remote: mongodb-memory-server: binary path is /tmp/build_a4b83e43f0f8cbaadda0769ea8a1db0d/node_modules/.cache/mongodb-memory-server/mongodb-binaries/4.0.3/mongod
remote:        
remote:        > nodemon@2.0.1 postinstall /tmp/build_a4b83e43f0f8cbaadda0769ea8a1db0d/node_modules/nodemon
remote:        > node bin/postinstall || exit 0
remote:        
remote:        Love nodemon? You can now support the project via the open collective:
remote:         > https://opencollective.com/nodemon/donate
remote:        
remote:        added 1281 packages from 583 contributors and audited 4856 packages in 36.776s
remote:        
remote:        32 packages are looking for funding
remote:          run `npm fund` for details
remote:        
remote:        found 1 low severity vulnerability
remote:          run `npm audit fix` to fix them, or `npm audit` for details
remote:        
remote: -----> Build
remote:        
remote: -----> Caching build
remote:        - node_modules
remote:        
remote: -----> Pruning devDependencies
remote:        
remote:        > husky@3.1.0 preuninstall node_modules/husky
remote:        > node husky uninstall
remote:        
remote:        husky > Uninstalling git hooks
remote:        Command failed: git rev-parse --show-toplevel --git-common-dir
remote:        fatal: not a git repository (or any parent up to mount point /)
remote:        Stopping at filesystem boundary (GIT_DISCOVERY_ACROSS_FILESYSTEM not set).
remote:        husky > Failed to uninstall
remote:        removed 726 packages and audited 974 packages in 11.19s
remote:        
remote:        20 packages are looking for funding
remote:          run `npm fund` for details
remote:        
remote:        found 1 low severity vulnerability
remote:          run `npm audit fix` to fix them, or `npm audit` for details
remote:        
remote: -----> Build succeeded!
remote: -----> Discovering process types
remote:        Procfile declares types     -> (none)
remote:        Default types for buildpack -> web
remote: 
remote: -----> Compressing...
remote:        Done: 55.3M
remote: -----> Launching...
remote:        Released v8
remote:        https://tem-backend.herokuapp.com/ deployed to Heroku
remote: 
remote: Verifying deploy... done.

```
