function validator () {
}

validator.prototype.validate_set = function (key, val, options, cb) {
    var err = false;
    var msg = "";
    if (typeof key === "undefined" || typeof val === "undefined") {
        err = true;
        msg += "both key value required."; 
    }
    if (typeof key !== "string" || typeof val !== "string") {
        err = true;
        msg += "both key value need to be string."; 
    }
    if (typeof options !=="undefined" && !(Array.isArray(options))) {
        err = true;
        msg += "options need to be an array of strings.";
    }
    cb({status:err, message:msg});
}

validator.prototype.validate_get = function (key, options, cb) {
    var err = false;
    if (typeof key === "undefined") {
        err = true;
    }
    cb(err);
}

module.exports = new validator();




