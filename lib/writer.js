var wrapper = require("./wrapper");
var commands = require("./commands");

function writer () {
}

//string commands
writer.prototype.SET = function (key, val, options, cb) {
    wrapper.wrap(commands.SET, key, val, options, function (req) {
        cb(req);
    });
}

writer.prototype.GET = function (key, options, cb) {
    wrapper.wrap(commands.GET, key, options, function (req) {
        cb(req);
    });
}

writer.prototype.GETRANGE = function (key, options, cb) {
    wrapper.wrap(commands.GET_RANGE, key, options, function (req) {
        cb(req);
    });
}

writer.prototype.APPEND = function (key, val, options, cb) {
    wrapper.wrap(commands.APPEND, key, val, options, function (req) {
        cb(req);
    });
}

module.exports = new writer();


