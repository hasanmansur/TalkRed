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
RESPClient.prototype.SET = function (key, val, options) {
    validator.validate_SET(key, val, options, function (err) {
        if (err.status) {
            console.log(err.message);
        }
        else {
            writer.SET(key, val, options, function (req) {
                connection.write(req, function () {
                    utils.printRequest(req);
                });
            });
        }
    });   
}

RESPClient.prototype.GET = function (key, options) {
    validator.validate_GET(key, options, function (err) {
        if (err.status) {
            console.log(err.message);
        }
        else {
            writer.GET(key, options, function (req) {
                connection.write(req, function () {
                    utils.printRequest(req);
                });
            });
        }
    });  
}

RESPClient.prototype.GETRANGE = function (key, options) {
    validator.validate_GETRANGE(key, options, function (err) {
        if (err.status) {
            console.log(err.message);
        }
        else {
            writer.GETRANGE(key, options, function (req) {
                connection.write(req, function () {
                    utils.printRequest(req);
                });
            });
        }
    });  
}



//exports
module.exports = new RESPClient();


