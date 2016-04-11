function wrapper () {

}

wrapper.prototype.wrap = function (commandPrefix, lengthCommandPrefix, lengthKey, lengthVal, key, val) {
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

module.exports = new wrapper();
