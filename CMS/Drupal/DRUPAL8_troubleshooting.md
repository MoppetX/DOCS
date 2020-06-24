#DRUPAL 8 

##Troubleshooting



#### LOCK/UNLOCK ABOUT FILE
command line:

 ```chmod +w fileOrDirName/```

 ```chmod -w fileOrDirName/```

-------



#### After Fiddling with either twig, yml files, do a cache rebuild:

```dash
drush cache-rebuild
```
will clear ALL caches. If you don't want that, use this:

```dash
drush cc 
```
will give you a list of caches you can then target to delete

------



#### MODULE INSTALL 

**always** backup your Project first using [Backup&Migrate](https://www.drupal.org/project/backup_migrate)!!

**Problem:**

> An unknown error occurred. Please try again later

**TRY:**

1. delete faulty module
1. empty cache, _including_ active logins 
1. navigate to: localhost:8888/yourProject/**update.php**
1. go back to home, login

If you cannot login or have no user 1 rights you will need to set ```$update_free_access = TRUE;``` OR ```$settings['update_free_access']``` first in **/sites/default/settings.php**. Do not forget to set this back to FALSE afterwards.



------

#### access site settings

admin/config/settings

-------

"**PHP OPCODE CACHING**" Warning:
MAMP / Preferences / PHP / Cache: **choose OPcache** 

-------

### login hidden?

sitename/**user/login**

_____________

###  Update Drupal Core

All the steps to update Drupal 8 core using composer:

1. Always take a backup of your files and database before updating.
   - `drush sql:dump` will dump the database.
   - `drush archive-dump` has unfortunately been removed from Drush 9, so you'll have to use a standard CLI tool to back up the needed directories - typically excluding the vendor directory.

2. Read the [core release notes](https://www.drupal.org/project/drupal/releases). Some contributed modules or themes may need updating to work with a new [minor](https://www.drupal.org/core/release-cycle-overview) version (e.g. 8.3 to 8.4) of Drupal core. Patch releases (e.g. 8.4.4 to 8.4.5) shouldn't require this. To detect the needed module or theme updates, you need to read the project page or release notes.

3. Activate [maintenance mode](https://www.drupal.org/node/2827362/) using `drush state:set system.maintenance_mode 1`and then `drush cache:rebuild`.

4. If you determined that some modules or themes need updating, follow [the module update instructions](https://www.drupal.org/docs/8/update/update-modules).

5. Update Drupal core and all its dependencies:

   - Run the following Composer command:
     `composer update drupal/core --with-dependencies`

   - Replace `drupal/core` above with `drupal/core-recommended` if you are using `core-recommended` template.

   - If you'd like to update to an unstable release, use one of these instead:

     - For alphas, betas, RCs, etc.: `composer require 'drupal/core-recommended:^8.9' --update-with-all-dependencies`
     - For a development branch, e.g. 8.9.x: `composer require drupal/core-recommended:8.9.x-dev --update-with-all-dependencies`

   - If you started your Drupal site using drupal-composer/drupal-project, please read the [special considerations](https://www.drupal.org/docs/8/update/update-core-via-composer#s-special-considerations-for-upgrading-to-drupal-880-and-later) below for extra steps you may need to take the first time you update to version 8.8.0 or later

6. Next, apply any required database updates using `drush updatedb` and clear the cache using `drush cache:rebuild`

7. If you are using config management to deploy your config, make sure to export the config with `drush config:export` after the database update because some core updates may change the structure of the config files or introduce new values to them. Add the option `--diff` to view actual changes.

8. Check that your Drupal site is ok:

   - Review the *status report* page for errors.
   - If the [Database Logging](https://www.drupal.org/docs/8/core/modules/dblog) module is enabled, perform some basic operations and check the recent logs for errors, warnings, etc.

9. Deactivate maintenance mode using `drush state:set system.maintenance_mode 0`and then `drush cache:rebuild`.

10. After deactivating maintenance mode, test the site also as an anonymous user.

