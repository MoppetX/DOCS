# SSH

`ssh-keygen` 
to generate a new key

`ssh-add -l` 
to list available keys

`ssh-add /path/to/secret/key`   
this adds the key to the list of keys ssh will try when logging in

```bash
cat /Users/kdengl/.ssh/private_rsa.pub
ssh --help
ssh -i /Users/kdengl/.ssh/private_rsa git@github.com

ssh-add --help
ssh-add /Users/YOU/.ssh/private_rsa
ssh-add -l
```

