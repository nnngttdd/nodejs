var exec = require("child_process").exec;

var querystring = require("querystring")
function start(response, postData){
	console.log("Request handler 'start' was called.");
	// var content = 'empty';
	// exec("ls -lah", function(error,stdout,stderr){
	// exec("find /",{timeout:10000,maxbuffer: 20000*1024},function(error,stdout,stderr){
	// 	response.writeHead(200,{"content-type":"text/plain"});
	// 	response.write(stdout);
	// 	response.end();
	// });

	var body =  '<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/></head>' +
		'<body>' +
		'<form action="/upload" method="post">' +
		'<textarea name="text" rows="20" cols="60"></textarea>' +
		'<input type="submit" value="submit text"/>' +
		'</from>' +
		'</body>' +
		'</html>';

		response.writeHead(200,{"Content-Type":'text/html'});
		response.write(body);
		response.end();

	// return content;
}

function upload(response,postData){
	console.log("Request handler 'upload' was called.");
	response.writeHead(200,{"content-type":'text/plain'});
	response.write("you've sent the text:"+querystring.parse(postData).text);
	response.end();
	// return "hello upload"
}

exports.start = start;
exports.upload = upload;