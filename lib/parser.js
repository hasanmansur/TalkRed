var util = require("util");

function parser () {
}

parser.prototype.parse = function (response, cb) {
    cb(util.inspect(response.toString()));
    
}

module.exports = new parser();
