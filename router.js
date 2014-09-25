function route(handle, pathname, response){
	console.log("about to route a request for "+pathname);
	if (typeof( handle[pathname] ) == 'function'){
		return handle[pathname](response);
	}else{
		console.log('no request handler found for ' + pathname);
		response.writeHead(404,{"content-type":"text/plain"});
		response.write("404 not found");
		response.end();
		// return '404 not found'
	}
}

exports.route = route;