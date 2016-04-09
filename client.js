var tcp = require("./tcp.js");
var writer = require("./writer.js");
var host = "localhost";
var port = 6379;

var connection = tcp.createClient(port, host);
connection.write(writer.set("tutorialspoint", "redis"), function () {
    console.log("command to redis server");
});



