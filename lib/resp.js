var tcp = require("./tcp");
var writer = require("./writer");
var reader = require("./reader");
var utils = require("./utils");
var validator = require("./validator");

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
    validator.validate_set(key, val, options, function (err) {
        if (err.status) {
            console.log(err.message);
        }
        else {
            writer.set(key, val, options, function (req) {
                connection.write(req, function () {
                    utils.printRequest(req);
                });
            });
        }
    });   
}

RESPClient.prototype.get = function (key, options) {
    validator.validate_get(key, options, function (err) {
        if (err.status) {
            console.log(err.message);
        }
        else {
            writer.get(key, options, function (req) {
                connection.write(req, function () {
                    utils.printRequest(req);
                });
            });
        }
    });  
}

//exports
module.exports = new RESPClient();


