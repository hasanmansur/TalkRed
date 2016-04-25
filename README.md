# TalkRed
A minimalistic NodeJS client for [Redis] (http://redis.io/). It is a client side implementation of [RESP protocol] (http://redis.io/topics/protocol).

Feature
-------
As for now TalkRed only features Redis command base instructions. Please find the complete command reference [here] (http://redis.io/commands)

Usage
-----
Following is an example of using SET, GET, GETRANGE commands. 

```javascript

var resp = require("./lib");

var host = "localhost";
var port = 6379;

resp.createClient(port, host);
resp.SET("name", "mansur");
resp.GET("name");
resp.GETRANGE("name", ["0", "2"]);
resp.close();
```

Future Plan
-----------
* Pipelining
* Pub/Sub
* CLI tool
