var resp = require("./resp");

var host = "localhost";
var port = 6379;

resp.createClient(port, host);
resp.set("myname", "hasan", "1");
resp.get("myname");
resp.close();
