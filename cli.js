var util = require("util");

var resp = require("./lib");
var host = "localhost";
var port = 6379;


process.stdin.resume();
process.stdin.setEncoding("utf8");

resp.createClient(port, host);

process.stdin.on("data", function (text) {
    console.log("command given : -------------------------");
    console.log(util.inspect(text));
});

function exit () {
    resp.close();
    console.log('Now that process.stdin is paused, there is nothing more to do.');
    process.exit();
}








