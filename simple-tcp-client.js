var net = require("net");
var host = "localhost";
var port = 6379;

var connection = net.createConnection(port, host, function (conn) {
    console.log("connected to redis server");
});

connection.on("error", function (err) {
    console.log(err.code);
});

connection.write("*1\r\n$6\r\nfoobar\r\n", function () {
    console.log("foobar command to redis server");
});

connection.on("data", function (data) {
    console.log(data.toString());
});
