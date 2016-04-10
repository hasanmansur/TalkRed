var net = require("net");

var connection = null;

module.exports.createClient = function (port, host) {
    connection = net.createConnection(port, host, function (conn) {
        console.log("connected to redis server");
    });
    
    connection.on("error", function (err) {
        console.log(err.code);
    });

    connection.on("data", function (data) {
        console.log(data.toString());
    });

    connection.on("close", function () {
        console.log("connection closed");
    });
    
    return connection;
}

module.exports.getConnection = function () {
    return connection;
};

