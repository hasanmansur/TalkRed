var util = require("util");

//utils
function utils () {
}

utils.prototype.printRequest = function (req) {
    console.log("----------------------request------------------:");
    console.log(util.inspect(req));
}

module.exports = new utils();
