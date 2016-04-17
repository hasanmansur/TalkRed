var resp = require("./resp");

var host = "localhost";
var port = 6379;

resp.createClient(port, host);
resp.set("myname", "hasan");
resp.set("id", "1");
resp.set("mob", "01711080668");
resp.set("addr", "baridhara, dhaka-1212");
resp.set("email", "hasan@hasan.com");
resp.close();
