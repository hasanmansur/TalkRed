function writer () {
}

writer.prototype.set = function (key, val) {
    var command_prefix = "SET";
    var req = "*3\r\n$3\r\n" 
                + command_prefix 
                +"\r\n$14\r\n"
                + key
                +"\r\n$5\r\n"
                + val
                +"\r\n";
    return req;
}

module.exports = new writer();


