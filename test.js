var resp = require("./lib");

var host = "localhost";
var port = 6379;

resp.createClient(port, host);
resp.set("name", "mansur");
resp.get("name");
resp.getRange("name", ["-6", "-1"]);
resp.close();
