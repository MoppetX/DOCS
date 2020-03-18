# SASS



####1) install

NEW project: start with  
```
npm init -y
```
(will say YES to everything you usually have to enter manually)

***npm init***  starts a helper that creates a  ***package.json*** file



ESTABLISHED project (with package.json file present)

```bash
npm i node-sass -D
```

(***"-D"*** will save the pkg as a dev dependency)



get rid of it:

```bash
npm uninstall node-sass
```



#### 2) write and compile SASS locally

1. create a directory for your SASS files: ```mkdir sass```
  
2. ```cd sass/```

3. create file
   ```touch main.scss```
   
4. in the **package.json** file, add a line to compile sass:

   ```javascript
   "scripts": {
   	"compile:sass": "node-sass [PATH/]sass/main.scss [PATH/]css/style.css -w"
   }
   ```

   what **compile:sass** does:
   	_1st argument:_ the sass compiler to use
   	_2nd argument:_ the file to compile
   	_3rd argument:_ which file to overwrite with the compiled SCSS 
   	_4th argument:_ watch flag, to autocompile on change

####3) run the compile:sass script

​	```npm run compile:sass```

