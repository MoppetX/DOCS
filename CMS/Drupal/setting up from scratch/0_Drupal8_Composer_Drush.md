#DRUPAL 8 

##Composer & Drush

_______________________



### Start a Project with Composer

####Prerequisites

- is composer installed?  `which composer`
- The latest version of Composer. Use `composer selfupdate` to update Composer.
- For existing Drupal applications, configure your *composer.json* file to work with a Drupal application, as per instructions in [Composer Configuration for Drupal](https://drupalize.me/tutorial/composer-configuration-drupal)
- For existing Drupal applications, execute all commands from your repository root directory.

####Using Composer to manage an existing Drupal application

Taking an existing Drupal application that is NOT managed with Composer and beginning to manage it with Composer can be a little tricky. The exact method of implementation depends on the directory structure of your Drupal application, and it may require additional steps to handle edge cases that are not addressed in this tutorial.

There are multiple tools that automate the "composerization" process for you:

- The Composerize Drupal Composer plugin (recommended).
- Drupal Console's `composerize` command.
- The Composerize module.

[source & trouble shooting with step-by-step](https://drupalize.me/tutorial/use-composer-your-drupal-project?p=3290)



_____________________


#### INSTALL project files & require drush
in a Terminal, navigate to your project, then:
```bash
$ composer create-project drupal/recommended-project my_site_name_dir

$ cd my_site_name_dir
$ composer require drush/drush
```

####PHPMYADMIN SETUP

[instructions](https://www.drupal.org/docs/develop/local-server-setup/mac-os-development-environment/howto-create-a-local-environment) 

1. in phpMyAdmin (access through MAMP), set up a user & database at the same time: `HOME / User accounts / Add User account`
   **Hostname**: localhost
2. **Database for user account**: check "Create database with same name and grant all privileges"
3. **Global privileges**: select the following minimum requirements
   - **Data**: SELECT, INSERT, UPDATE, DELETE
   - **Structure**: CREATE, INDEX, DROP are selected.
    Don't forget to click the **'GO'** button
   

####Drupal Install with DRUSH

extra verbose installation and setup:

```bash
$ vendor/drush/drush/drush site:install -vvv
...

Database name [drupal]:
 > [your-db-name]

 Database driver [mysql]:
 >

 Database username [drupal]:
 > [your-db-name]

 Database password [drupal]:
 > [your-gerated-pw]

 Database host [127.0.0.1]:
 >

 Database port [3306]:
 > 8889
```

____________



ofk2YdOlzyMKiIdq

###Enable Drush
* if you're starting from scratch:
[D8 project which already includes Drush in its composer.json](https://github.com/drupal-composer/drupal-project)


* if you want to enable drush in an existing project:
  ```unix
  cd your/project/directory
  composer require drush/drush
  ```
* be able to call ```drush``` from anywhere:
  ```unix
    cd your/project/directory
    vendor/bin/drush init
  ```



-------------

### Install a new Drupal package via Composer

To install a new Drupal project (**module, theme, profile**, etc.), execute:

```bash
$ composer require drupal/[project]

// For instance, to require ctools, execute:
$ composer require drupal/ctools

// By default this will download the latest stable version. 
// You may also specify the version constraint:
$ composer require drupal/ctools 1.0.0
```

####Updating a dependency

quickly update all packages (within the bounds of your version constraints):

```bash
$ composer update
```

To update any package:
```bash
$ composer update [vendor]/[package]
```
Note that this will update **only** `drupal/[package]` and will not update `drupal/[package]`'s dependencies, even if `drupal/[package]` requires new dependencies.

To update `drupal/[package]` and require a new minimum version (such as 1.1.0), execute:

```bash
$ composer require drupal/[package]:^1.1.0 --update-with-all-dependencies
```

#####Update Drupal core via Composer

Drupal core is a package like any other. So, you can simply specify `drupal/core` as the package name. It's a good idea to specify a new minimum version for `drupal/core` so that a downgrade is never accidentally performed.

As with updating any Drupal project, you should execute database updates after downloading the new package. If you are using Drupal Configuration Management, you should also re-export configuration after the database updates are complete.

--------

### TROUBLESHOOTING

####Problem: MSQL NOT FOUND

**[stackoverflow](https://stackoverflow.com/questions/10577374/mysql-command-not-found-in-os-x-10-7)**

```sql
ln -s /usr/local/mysql/bin/mysql /usr/local/bin/mysql
```

#### Problem: Drupal\Core\Installer\Exception\AlreadyInstalledException

>To start over, you must empty your existing database and copy **default.settings.php** over settings.

```bash
// search for file
$ find . -type f -name default.settings.php | xargs ls -lat

// give yourself write access
$ chmod 664 ./web/sites/default/settings.php

$ cp -f ./web/core/assets/scaffold/files/default.settings.php ./web/sites/default/settings.php
```

####Problem

```bash
  SQLSTATE[HY000] [2002] No such file or directory
```

This happens when terminal cannot connect to mysql in MAMP’s case the solution is to specify the path to the mysql.sock in **sites/default/settings.php** add this to the mysql array:

```php
  'unix_socket'   => '/Applications/MAMP/tmp/mysql/mysql.sock',
```

```php
$databases['default']['default'] = array (
  'database' => 'kunstmatrix_tech',
  'username' => '...',
  'password' => '...',
  'prefix' => '',
  'host' => 'localhost',
  'port' => '3306',
  'namespace' => 'Drupal\\Core\\Database\\Driver\\mysql',
  'driver' => 'mysql',
  'unix_socket'   => '/Applications/MAMP/tmp/mysql/mysql.sock',
  
);

```
