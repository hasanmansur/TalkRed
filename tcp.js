var net = require("net");

var connection = null;

module.exports.createClient = function (port, host) {
    connection = net.createConnection(port, host, function (conn) {
        console.log("connected to redis server");
    });
    return connection;
}

module.exports.getConnection = function () {
    return connection;
};

