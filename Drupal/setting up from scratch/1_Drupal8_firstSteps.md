# DRUPAL 8 

## I) FIRST STEPS



1. Download newest version of Drupal

2. start **MAMP** server (don't use MAMP Pro)

   - if not yet existing: create admin user **"drupal_dev"** (Global Privileges > check all)
     (MAMP > server state > Tools > php myAdmin > dal )

3. in **MAMP / Pref / PHP / Cache / choose: OPCache**

4. in browser, go to: **localhost:8888/MAMP**

5. create new database for new project

   **MySQL / phpMyAdmin / Databases** 

   **NAME_of_your_project / Create database**

6. put Drupal folder into **MAMP / htdocs folder** (local)

7. set up basic folder structure in your **Drupal_folder > themes > your_project** 
   (css, imgs, scripts, templates)

8. navigate to http://localhost:8888/name_of_folder/

9. **Database configuration**

  - **database type:** MySQL, ...
  - **database name:** your_new_database, 
  - **databse username:** drupal_dev
  - **PW**

10. **Configure Site:** 
  **username:** admin_dev
  (if only testing: disable "**UPDATE NOTIFICATIONS**")

11. add **your_project.info.yml** &  **your_project.libraries.yml** files 
    can steal them from existing drupal themes in the core folder

    don't forget to rename:
    **name: your_project
    description: 'your_project theme'** 

    add **libraries: - your_project/global-styling** in info.yml

-------------------



####1. create DB in Mamp
	User accounts > add User > 
					Host / Local / localhost
					Password: [anything]
					DATABASE FOR USER: Create database with same name and grant all priviliges
					GO


####2. cd into mamp/htdocs
####3. download drupal
​	```drush dl drupal
​	composer require drupal/[project-name]```
​	Use https://www.drupal.org/project/composer_generate to build a composer.json which represents the enabled modules on your site.

####4. rename folder (drupal-8.3.xxx)
​	cd into folder 
​	cd [folder]

####5. install with drush [example]
​	drush si standard --db-url=mysql://drupal_devel:2904Kuma*@localhost/customers_autowolf_8 --site-name="Autowolf Ahrensfelde"

####5a. install with drush [template]
​	drush si standard --db-url=mysql://[databaseUser]:[databaseUserPassword]@localhost/[databaseName] --site-name="Autowolf Ahrensfelde"





----------

#### adding to your chosen theme

1. download theme

2. put it into "modules" folder of your drupal project

3. in browser: Extend > check your new_module -> INSTALL button at bottom

   

-----------------



###ENABLING SASS in DRUPAL

[SOURCE](https://www.codeproject.com/tips/723710/sass-in-drupal)

####Installing

install RubyGems first:
```sudo gem install sass```



#### Move Your Existing Stylesheet

1. Create a new directory inside your theme folder named *sass*.

2. Move *css/style.css* to the new *sass/* folder

3. Rename the file from *style.css* to *style.sass*

   

In your Drupal theme folder, create a new file and name it *"config.rb".*
Now, we will have the following set up in our theme folder:

- */css/* 	  Where CSS files will be generated.

* /sass/*      Where the source SASS files will be placed.
* */config.rb*  The configuration file that Compass will use to run in our theme folder.



#### Compiling SASS

```
cd /themes/myTheme/
```

For viewing your changes, you have to run the following command:

```
sass--watch sass:css
```



Here, your first parameters option is name of the folder that holds our *.scss* files, here *sass*.

The second parameters option is the name of the folder where our *.scss* will get compiled into regular CSS.

When writing normal CSS, we will find repeating CSS.