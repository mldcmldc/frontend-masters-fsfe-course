const http = require('http');

http.createServer(function (req, res) {
	res.write("On the way to being a full stack engineer hehe");
	res.end();
}	
).listen(5000);

console.log("Server started on port 5000");
