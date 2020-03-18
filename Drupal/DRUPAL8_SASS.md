# DRUPAL 8

##setting up SASS



[SOURCE](https://evolvingweb.ca/blog/setting-sass-compass-your-drupal-8-theme)

### BASIC SETUP

1. check whether you have ruby installed: ```$ ruby -v```
2. update ruby to have the latest version: ```$ gem update --system```
3. install compass, a command line tool that compiles the source **.scss** files into generated **.css** files: ```$ gem install compass sass``` 



###SETUP in Drupal

1. the following command will generate a **config.rb** (needed by compass) inside your theme directory:

   ```bash
   compass create themes/THEME-NAME --css-dir=css --sass-dir=sass
   ```

   It should contain the following:

   ```bash
   # We tell compass that we want to use. SCSS format in this case
   preferred_syntax = :scss
   
   # Where we want our CSS files to go
   css_dir = 'css'
   
   # Where we want to put our source SASS Files
   sass_dir = 'sass'
   
   # While in Dev, we can use this feature to easily debug the CSS styles
   line_comments = true
   ```

   With the configuration in **config.rb**, compass will parse each file located in **sass/FILE.scss** and output a corresponding **css/FILE.css**.

2. Create a new directory inside your theme folder named **sass**, add the file  **style.sass** (or move & rename old style.css)

3. make sure **THEME-NAME.libraries.yml** contains the following:

   ```bash
   global-styling: 
     css: 
       theme: 
         css/styles.css: {}
   ```

   **empty caches after this step!**

4. "cd" into the theme folder:

   ```
   cd themes/custom/THEME-NAME/
   ```

   And run:

   ```bash
   compass watch
   ```

   **compass watch** will  monitor your project for changes and automatically recompile. Just make sure to keep the Terminal/Console window open while developing with SASS.



### GENERAL

- Sass files beginning with an **underscore** are called partials and won't becompiled to CSS, but they can be imported into other sass stylesheets.



----------------------



###TROUBLESHOOTING:

- https://stackoverflow.com/questions/32891965/error-while-executing-gem-errnoeperm-operation-not-permitted

- if you run `compass (cmd)` and the error message says *'command not found'*, you need to include the path to compass to run it, e.g.:
   `/usr/local/lib/ruby/gems/2.6.0/bin/compass watch`

  * how to find the path on your machine:
    `$ **find / -type f -name compass 2>/dev/null | tee /tmp/compass.lst**`

  * This says:

    start looking from the root folder ('slash') for any file of type 'f' with the name of 'compass'

    At the same time as outputting the things it finds to the screen, also write the names to a file called /tmp/compass.txt so you have a permanent list 

