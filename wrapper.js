var message = require("./message");

function wrapper () {

}

wrapper.prototype.wrap = function (command, lengthCommand, lengthKey, lengthVal, key, val, cb) {
    var req = "*3\r\n$"
                +lengthCommand
                +"\r\n" 
                +command
                +"\r\n$"
                +lengthKey
                +"\r\n"
                + key
                +"\r\n$"
                +lengthVal
                +"\r\n"
                + val
                +"\r\n";
     cb(req);
}

module.exports = new wrapper();
