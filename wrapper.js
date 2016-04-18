var message = require("./message");

function wrapper () {
}

wrapper.prototype.wrap = function (command, key, val, cb) {
    var req = message.STAR + "3" + message.CRLF
              + message.DOLLAR + command.length + message.CRLF + command + message.CRLF
              + message.DOLLAR + key.length + message.CRLF + key + message.CRLF
              + message.DOLLAR + val.length + message.CRLF + val + message.CRLF;
     cb(req);
}

module.exports = new wrapper();
