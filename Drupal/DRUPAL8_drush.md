# DRUPAL 8 

## MODULES & Drush



1. `drush dl` is no longer supported, use `composer require drupal/module_name` instead
2. cd into modules folder: `drush en module_name`
3. clear cache: `drush cr` 

  pm:enable (en)    Enable one or more modules.  

pm:list (pml)  Show a list of available extensions (modules and themes).                                                      

pm:security (sec)  Check Drupal Composer packages for pending security updates.                                                     

pm:uninstall (pmu)  Uninstall one or more modules and their dependent modules.; won't remove it from composer.json require section

`drush list`: list of helful commands

#### Troubleshooting

- disable a module: `drush dis module_name`
- HELP: `drush help`
- start a shell that’s optimized for Drush: `drush cli`

### Backup & Migrate

Install: `drush en backup-migrate`
Backup the site's database with: `drush bam-backup`

