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

