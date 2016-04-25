var tcp = require("./tcp");
var writer = require("./writer");
var reader = require("./reader");
var utils = require("./utils");
var validator = require("./validator");

var connection;

//resp client
function RESPClient () {
}

//event listeners
function onResponse (data) {
    console.log("----------------------response------------------:");
        reader.get(data, getResponse);
}

function onError(err) {
    console.log(err.code);
}

function onClose () {
    console.log("connection closed");
}

//connection
RESPClient.prototype.createClient = function (port, host) {
    connection = tcp.createClient(port, host);
    connection.on("error", onError);
    connection.on("data", onResponse);
    connection.on("close", onClose);
}

RESPClient.prototype.close = function () {
    connection.end();
}

//misc
function sendRequest (req) {
    connection.write(req, function () {
        utils.printRequest(req);
    });
}

function getResponse (response) {
    console.log(response);
}

//string commands
RESPClient.prototype.SET = function (key, val, options) {
    validator.validate_SET(key, val, options, function (err) {
        if (err.status) {
            console.log(err.message);
        }
        else {
            writer.SET(key, val, options, sendRequest);
        }
    });   
}

RESPClient.prototype.GET = function (key, options) {
    validator.validate_GET(key, options, function (err) {
        if (err.status) {
            console.log(err.message);
        }
        else {
            writer.GET(key, options, sendRequest);
        }
    });  
}

RESPClient.prototype.GETRANGE = function (key, options) {
    validator.validate_GETRANGE(key, options, function (err) {
        if (err.status) {
            console.log(err.message);
        }
        else {
            writer.GETRANGE(key, options, sendRequest);
        }
    });  
}

//exports
module.exports = new RESPClient();


