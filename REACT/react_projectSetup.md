#React

##Project Setup



###npm

```bash
 npm init -y
```

package.json: as we don't want Parcel to use Babel to translate our async/await calls (since we're using modern browsers, you'd want to let it translate it only for production.)  evergreen browsers. 

```json
{
  "browserslist": [
    "last 2 Chrome versions",
    "last 2 ChromeAndroid versions",
    "last 2 Firefox versions",
    "last 2 FirefoxAndroid versions",
    "last 2 Safari versions",
    "last 2 iOS versions",
    "last 2 Edge versions",
    "last 2 Opera versions",
    "last 2 OperaMobile versions"
  ]
}
```

other useful things:

`npm install uuid`





--------------

### prettier

just prettier:

```bash
npm install -D prettier
```

better: pretty-quick (will only format files that have been updated)

```bash
npm install -D prettier pretty-quick
```




in package.json:

```json
"scripts": {
	"format": "prettier --write \"src/**/*.{js,jsx,html}\" --write",
}
```

create a `.prettierrc` file with this in it:

```json
{
  "singleQuote": true,
  "trailingComma": "all"
}
```

then: `npm run format` : check whether it works

------------

###ESLint 

```bash
npm i -D eslint eslint-config-prettier babel-eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

create a `.eslintrc.json` file with this in it:

```json
{
  "extends": [
    // gospel truth :)
    "eslint:recommended", 
    "plugin:import/errors",
    // can be questioned
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    // these tow HAVE to be at the end, otherwise order 
    // is not important
    "prettier", 
    "prettier/react"],
  "rules": {
    // 0 turns it off
    // turned off because we are going to use typescript
    "react/prop-types": 0,
    // turning this on enables you to use console.log
    // for debugging without generating an error 
    "no-console": 1,
    // 2 will create an error
    "react-hooks/rules-of-hooks": 2,
    // 1 will create a warning
    "react-hooks/exhaustive-deps": 1
  },
  "plugins": [
    "react", 
    "import", 
    "jsx-a11y",
    "react-hooks"
  ],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
   "settings": {
    "react": {
      // DETECT: eslint will figure out which react version
      // you're using
      "version": "detect"
    }
  }
}
```

```json
{
  "extends": [
    "eslint:recommended", 
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier", 
    "prettier/react"],
  "rules": {
    "react/prop-types": 0,
    "no-console": 1,
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 1
  },
  "plugins": [
    "react", 
    "import", 
    "jsx-a11y",
    "react-hooks"
  ],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
   "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```



in package.json:

```json
"scripts" {
  "lint": "eslint \"src/**/*.{js,jsx}\" --quiet",
}
```



-------------

### .gitignore

```ignore
# jetbrains stuff

# From rect v5 course / Brian Holt
node_modules
.cache/
dist/
.env
coverage/
.vscode/

# this is mac file, always ignore
.DS_Store
```

----------------------

### parcel

```bash
npm install -D parcel-bundler
```

```json
"scripts" {
  "dev": "parcel src/index.html"
}
```

run `npm run dev` and it will provide the host for you, e.g.: http://localhost:1234 

to stop server: `[ctrl] c`

then run

```bash
npm install react react-dom @reach/router
```
This will pull React and ReactDOM down from npm and put it in your node_modules directory. Now instead of loading them from unpkg, we can tell Parcel to include them in your main bundle. 

`@reach/router`
a Router with improved Accessibility

----------------

this enables the API client to run in offline mode

```bash
npm i -D cross-env
```

package.json

```json
"scripts": {
  "dev:mock": "cross-env PET_MOCK=mock parcel src/index.html"
  // "dev:mock": "cross-env PET_MOCK=mock npm run dev"
}
```

