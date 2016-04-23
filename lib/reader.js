var parser = require("./parser");

function reader () {
}

reader.prototype.get = function (response, cb) {
    parser.parse(response, function (parsedResponse) {
        cb(parsedResponse);
    });
}

module.exports = new reader();
