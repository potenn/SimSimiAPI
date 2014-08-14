var http = require('http');

http.createServer(function(request, response){
	
	// 쿠키를 입력합니다.
	response.writeHead(200,{
		
		'Content-Type': 'text/html',
		'Set-Cookie' : ['breakfast = toast', 'dinner = chicken']
	
	});
	
	
}).listen(52273,function(){
	
	console.log('Server Running at http://127.0.0.1:52273');
	

});
