# DRUPAL 8 

## II) INITIAL SETUP

do this before adding any content or styling. 

--------

###MODULES

- install by hand:
  **download Module >** move to **"Modules"** folder 
  **(in Drupal UI) Extend > select your module > enable**

- from the command line: 
  ​```drush en module_name```

  ```drush pm-enable```

  

  **ERROR**
  ``` Command pm-enable was not found. Drush was unable to query the database. As a result, many commands are unavailable. Re-run your command with --debug to see relevant log messages. ```



####Always Install:

- **Backup & Migrate** 
  make sure to backup using this module before you install another one
- **Admin Toolbar** & **Admin Toolbar Extra Tools** 
  (to make navigating the Drupal UI less painful)
- **Pathauto** 
  (to create custom node paths)
- **Devel** 
  (developer tools)
- **Webform**
  (does anything to do with forms)
  under extend > Webform the minimal install should be: Webform + Webform UI (can be easily deinstalled once no longer needed)

**COMPOSER**: `composer require drupal/backup_migrate drupal/admin_toolbar drupal/pathauto drupal/devel`

####optional: 

- Twig Tweak (to add a view to a twig file)
- Language 
- Telephone
- Datetime
- Datetime range
- Email

------------------



#### ADD CUSTOM CLASSES to the 'article'-node 

to make targeting easier:

```twig
 set classes = [
   ‘node clearfix’,
   ‘node--type-’ ~ node.bundle|clean_class,
   node.isPromoted() ? ‘node--promoted’,
   node.isSticky() ? ‘node--sticky’,
   not node.isPublished() ? ‘node--unpublished’,
   view_mode ? ‘node--view-mode-’ ~ view_mode|clean_class,
 ]
%}
```

if you want this applied to all nodes, add the code above to the **node.html.twig** file
(steal from your base theme template)

-------



###FOLDER STRUCTURE

1. create your project's custom theme folder under **/themes / your_custom_project**.
2. this directory has to include the following two files:
   - **your_project.info.yml**
		(see THEMING below)
   - **your_project.libraries.yml**
     (see THEMING below for details)

3. suggested folders: **branding, css, imgs, js, templates** 
4. 

-----------



###THEMING

1. create all your empty css files: **layout, fonts, colors, content**

2. add all you custom css files to **your_project.libraries.yml** file:

	```
global-styling:
     version: VERSION
     css:
       base:
         css/main.css: {}
         css/typography.css: {}
     js:
       base:
         js/main.js: {}
  ```
  
3. **your_project.info.yml** file:

     ```
     name: your_project
     type: theme
     description: 'your_project theme'
     package: Core
     	 base theme: classy // whichever base theme you chose
     	 libraries: 
     	 - [your_project]/global-styling
     ```

4. in the GUI: **Appearance > at the bottom "Uninstalled Themes"** : install your custom theme > **SET AS DEFAULT**
   
5. download themes directly with drush:
   ``` drush dl theme_name ```


--------

###GUI SETUP for development

- disable aggregation of CSS / JS files:
  **CONFIG/ Development/Performance / Bandwidth optimisation / **
  uncheck **Aggregate CSS + JS**
- disable caching:
  **CONFIG / Development / Performance / **
  **Caching > no caching**



-----

####SASS

1. Create a new directory inside your theme folder named *sass*.
2. add style.sass
3. In your Drupal theme folder, create a new file and name it *"config.rb".*
4. ```cd /themes/myTheme/```
5. ```sass--watch sass:css```



-------

#### /home PATH

in Drupal GUI:

Configuration > System > Basic Site Settings > change */node* to **/home**

-------------

####/404 PATH

in Drupal GUI:

Configuration > System > Basic Site Settings > error pages



_______________________

## Troubleshooting

### Memory limit errors

>Fatal error: Allowed memory size of 1610612736 bytes exhausted

[solution](https://getcomposer.org/doc/articles/troubleshooting.md#memory-limit-errors): increase PHP `memory limit` (for the one command you run, if you need it later, add `export` in front of env var)

```bash
$ COMPOSER_MEMORY_LIMIT=-1 composer require drupal/you_module

```

Could not delete /Applications/MAMP/htdocs/sieger-coaching/web/sites/default/default.services.yml:

[solution](https://drupal.stackexchange.com/questions/290296/composer-require-error-cant-delete-default-services-yml): chmod 777 /Applications/MAMP/htdocs/sieger-coaching/web/sites/default/default.services.ym

```
chmod u+w web/sites/default
```

ls -latd /Applications/MAMP/htdocs/sieger-coaching/web/sites/default
dr-xr-xr-x -> drwxr-xr-x