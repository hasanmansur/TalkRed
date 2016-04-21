var ERR_MSG_KV_REQUIRED = "both key value required.";
var ERR_MSG_KV_STR = "both key value need to be string.";
var ERR_MSG_OPTN_ARRAY = "options need to be an array of strings.";

function validator () {
}

validator.prototype.validate_set = function (key, val, options, cb) {
    var err = false;
    var msg = "";
    if (typeof key === "undefined" || typeof val === "undefined") {
        err = true;
        msg += ERR_MSG_KV_REQUIRED; 
    }
    if (typeof key !== "string" || typeof val !== "string") {
        err = true;
        msg += ERR_MSG_KV_STR; 
    }
    if (typeof options !=="undefined" && !(Array.isArray(options))) {
        err = true;
        msg += ERR_MSG_OPTN_ARRAY;
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




