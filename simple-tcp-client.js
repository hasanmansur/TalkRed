var net = require("net");
var host = "localhost";
var port = 6378;

var connection = net.createConnection(port, host, function (conn) {
    console.log("connected to redis server");
});

connection.on("error", function (err) {
    console.log(err.code);
});

connection.write("*3\r\n$3\r\nSET\r\n$14\r\ntutorialspoint\r\n$5\r\nredis\r\n", function () {
    console.log("command to redis server");
});

connection.on("data", function (data) {
    console.log(data.toString());
});

connection.on("close", function () {
    console.log("connection closed");
});
