var message = require("./message");

function wrapper () {
}

wrapper.prototype.wrap = function () {
    var cb = arguments[arguments.length-1];
    this.createArray(arguments, function (req) {
        cb(req);
    });
}

wrapper.prototype.createArray = function () {
    var req = "";
    for (var i=0; i<arguments[0].length-1; i++) {
        req += this.createBulkString(arguments[0][i]); 
    }
    req = message.STAR + (arguments[0].length-1).toString() + message.CRLF + req;
    arguments[arguments.length-1](req);
}

wrapper.prototype.createBulkString = function (str) {
    return message.DOLLAR + str.length + message.CRLF + str + message.CRLF
}

module.exports = new wrapper();
