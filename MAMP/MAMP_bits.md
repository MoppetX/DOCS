#MAMP

bits & tricks



**MAMP > conf > apache > httpd.conf**, at the very end of the file:


```
local websites custom
 <VirtualHost *>
 DocumentRoot "/Applications/MAMP/htdocs/kunstmatrix_tech"
 ServerName local.kunstmatrix-technologies.com
 </VirtualHost>
```

