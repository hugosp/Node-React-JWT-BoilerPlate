# Test of integrating React with a secure api using JWT
### Json Web Token Api

using x-access-token as header to pass along token


You need to make a config file in /config named index.Json

containing : 

```
  module.exports = {
    'secret': 'Your secret phrase',
    'database': 'mongodb://user:password@server:port/db'
  };
```

Of course with your own creds. =)



run with ``` npm run watch ``` to be able to modify and auto-compile es6-code