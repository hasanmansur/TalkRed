var tcp = require("./tcp.js");
var writer = require("./writer.js");

var host = "localhost";
var port = 6379;

var connection = null;

function RESPClient () {

}

RESPClient.prototype.createClient = function () {
    connection = tcp.createClient(port, host);
}

RESPClient.prototype.set = function (key, val) {
    connection.write(writer.set(key, val), function () {
        console.log("command to redis server");
    });
}
