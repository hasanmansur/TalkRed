function parser () {
}

parser.prototype.parse = function (response, cb) {
    cb("start of parsed response\n" + response + "end of parsed response");
}

module.exports = new parser();
