var wrapper = require("./wrapper");
var commands = require("./commands");

function writer () {
}

writer.prototype.set = function (key, val, callback) {
    var req = wrapper.wrap(commands.SET, commands.SET.length, key.length, val.length, key, val);
    callback(req);
}

module.exports = new writer();


