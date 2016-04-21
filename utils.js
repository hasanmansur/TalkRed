//utils
function utils () {
}

utils.prototype.printRequest = function (req) {
    console.log("----------------------request------------------:");
    console.log(req);
}

module.exports = new utils();
