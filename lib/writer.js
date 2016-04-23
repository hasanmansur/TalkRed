var wrapper = require("./wrapper");
var commands = require("./commands");

function writer () {
}

//string commands
writer.prototype.set = function (key, val, options, cb) {
    wrapper.wrap(commands.SET, key, val, options, function (req) {
        cb(req);
    });
}

writer.prototype.get = function (key, options, cb) {
    wrapper.wrap(commands.GET, key, options, function (req) {
        cb(req);
    });
}

module.exports = new writer();


