var message = require("./message");

function wrapper () {
}

wrapper.prototype.wrap = function (command, key, val, cb) {
    this.createArray(command, key, val, function (req) {
        cb(req);
    });
}

wrapper.prototype.createArray = function () {
    var req = "";
    for (var i=0; i<arguments.length-1; i++) {
        req += this.createBulkString(arguments[i]); 
    }
    req = message.STAR + (arguments.length-1).toString() + message.CRLF + req;
    arguments[arguments.length-1](req);
}

wrapper.prototype.createBulkString = function (str) {
    return message.DOLLAR + str.length + message.CRLF + str + message.CRLF
}

module.exports = new wrapper();
