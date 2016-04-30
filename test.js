var resp = require("./lib");

var host = "localhost";
var port = 6379;

resp.createClient(port, host);
resp.SET("name", "mansur");
resp.GET("name");
resp.GETRANGE("name", ["0", "2"]);
resp.APPEND("name", "hasan");
resp.GET("name");
resp.close();
