var tcp = require("./tcp");
var writer = require("./writer");
var reader = require("./reader");

var connection;

//resp client
function RESPClient () {
}

RESPClient.prototype.createClient = function (port, host) {
    connection = tcp.createClient(port, host);
    connection.on("error", function (err) {
            console.log(err.code);
        });
    connection.on("data", function (data) {
            console.log("----------------------response------------------:");
            reader.get(data, function (response) {
                console.log(response.toString());
            });
            console.log("----------------------response------------------:");
    });
    connection.on("close", function () {
            console.log("connection closed");
    });
}

RESPClient.prototype.close = function () {
    connection.end();
}


//string commands
RESPClient.prototype.set = function (key, val, options) {
    if (typeof key === "undefined" || typeof val === "undefined") {
        console.log("both key value required");
        return;
    }
    writer.set(key, val, options, function (req) {
        connection.write(req, function () {
            console.log("----------------------request------------------:");
            console.log(req);
        });
    });
}

RESPClient.prototype.get = function (key, options) {
    writer.get(key, options, function (req) {
        connection.write(req, function () {
            console.log("----------------------request------------------:");
            console.log(req);
        });
    });
}

//exports
module.exports = new RESPClient();


