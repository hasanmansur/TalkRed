var message = require("./message");

function wrapper () {

}

wrapper.prototype.wrap = function (command, lengthCommand, lengthKey, lengthVal, key, val) {
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
     return req;
}

module.exports = new wrapper();
