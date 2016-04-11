var wrapper = require("./wrapper");

function writer () {
}

writer.prototype.set = function (key, val, callback) {
    var commandPrefix = "SET";
    var lengthCommandPrefix = commandPrefix.length;
    var lengthKey = key.length;
    var lengthVal = val.length;
    var req = wrapper.wrap(commandPrefix, lengthCommandPrefix, lengthKey, lengthVal, key, val);
    callback(req);
}

module.exports = new writer();


