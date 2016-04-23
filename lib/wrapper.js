var message = require("./delimiter");

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
    var arraySize = arguments[0].length-2;
    for (var i=0; i<arraySize; i++) {
        req += this.createBulkString(arguments[0][i]); 
    }
    var optionsArray = arguments[0][arguments[0].length-2];
    if (optionsArray) {
        arraySize += optionsArray.length;
        for (var i=0; i<optionsArray.length; i++) {
            req += this.createBulkString(optionsArray[i]);
        }
    }
    req = message.STAR + arraySize + message.CRLF + req;
    arguments[arguments.length-1](req);
}

wrapper.prototype.createBulkString = function (item) {
    var str = item.toString();
    return message.DOLLAR + str.length + message.CRLF + str + message.CRLF
}

module.exports = new wrapper();

/*
    var req = "";
    for (var i=0; i<arguments[0].length-1; i++) {
        req += this.createBulkString(arguments[0][i]); 
    }
    req = message.STAR + (arguments[0].length-1).toString() + message.CRLF + req;
    arguments[arguments.length-1](req);
    */
