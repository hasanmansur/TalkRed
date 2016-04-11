var tcp = require("./tcp.js");
var writer = require("./writer.js");

//connection
var connection = null;

//resp client
function RESPClient () {

}

RESPClient.prototype.createClient = function (port, host) {
    connection = tcp.createClient(port, host);
}

RESPClient.prototype.set = function (key, val) {
    writer.set(key, val, function (req) {
        connection.write(req);
    });
}

RESPClient.prototype.close = function () {
    connection.end();
}

//exports
module.exports = new RESPClient();


