function validator () {
}

validator.prototype.validate_set = function (key, val, options, cb) {
    var err = false;
    if (typeof key === "undefined" || typeof val === "undefined") {
        err = true;
    }
    if (options && !(Array.isArray(options))) {
        err = true;
    }
    cb(err);
}

validator.prototype.validate_get = function () {
    var err = false;
    if (typeof key === "undefined") {
        err = true;
    }
    cb(err);
}

module.exports = new validator();




