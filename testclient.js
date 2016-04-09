var net = require('net');
var port = 6378;
var conn;
var retryInterval = 3000; // 3 seconds
var retriedTimes = 0;
var maxRetries = 10;
process.stdin.resume();
(function connect() {
function reconnect() {
if (retriedTimes >= maxRetries) {
throw new Error('Max retries have been exceeded, I give up.');
}
retriedTimes += 1;
setTimeout(connect, retryInterval);
}
conn = net.createConnection(port);
conn.on('connect', function() {
retriedTimes = 0;
console.log('connected to server');
});
conn.on('error', function(err) {
console.log('Error in connection:', err);
});
conn.on('close', function() {
console.log('connection got closed, will try to reconnect');
reconnect();
});
//process.stdin.pipe(conn, {end: false});
}());
