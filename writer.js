var wrapper = require("./wrapper");

function writer () {
}

writer.prototype.set = function (key, val) {
    var commandPrefix = "SET";
    var lengthCommandPrefix = commandPrefix.length;
    var lengthKey = key.length;
    var lengthVal = val.length;
    var req = "*3\r\n$"
                +lengthCommandPrefix
                +"\r\n" 
                +commandPrefix
                +"\r\n$"
                +lengthKey
                +"\r\n"
                + key
                +"\r\n$"
                +lengthVal
                +"\r\n"
                + val
                +"\r\n";
    return req;
}

module.exports = new writer();


