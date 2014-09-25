//请求(require)Node.js自带的http模块，并且把它赋值给http变量
var http = require("http");
//demo1
// http.createServer(function(request, response){
// 	response.writeHead(200, {"Content-Type": 'text/plain'});
// 	response.write("hello world");
// 	response.end();
// }).listen(8888);
//demo2
// function onRequest(request, response){
// 	console.log("Request received.");
// 	response.writeHead(200,{'Content-Type':'text/plain'});
// 	response.write('hello world');
// 	response.end();
// }

// http.createServer(onRequest).listen(8888);

// console.log('server has started');
//demo3
// function start() {
// 	function onRequest(request, response){
// 		console.log("Request received.");
// 		response.writeHead(200,{'Content-Type':'text/plain'});
// 		response.write('hello world');
// 		response.end();
// 	}
// 	http.createServer(onRequest).listen(8888);
// 	console.log('server has started');
// }
// exports.start = start;
//demo4
var url = require("url");

function start(route, handle){
	function onRequest(request, response){
		var postData = "";
		var pathname = url.parse(request.url).pathname;
		console.log('Request for '+pathname +" received.");

		request.setEncoding("utf8");

		request.addListener("data",function(postDataChunk){
			postData += postDataChunk;
			console.log("received post data chunk'"+postDataChunk + "'.");
		});

		request.addListener("end",function(){
			route(handle,pathname,response,postData);
		});

		// response.writeHead(200, {"Content-Type":"text/plain"});
		// var content = route(handle,pathname);

		// response.write(content);
		// response.end();
		// route(handle,pathname,response);
	}
	http.createServer(onRequest).listen(8888);
	console.log("server has started.");
}
exports.start = start;