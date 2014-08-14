// 쿠키 저장 및 출력

var http = require('http');

// 서버를 생성하고 실행합니다.
http.createServer(function(request, response){
	//변수 선언
	
	var date = new Date();
	date.setDate(date.getDate() + 7);
	
	//쿠키를 입력합니다.
	response.writeHead(200,{
		'Content-Type' : 'text/html',
		'Set-Cookie': [
		     'breakfast = toast; Expires = ' + date.toUTCString(),
		     'dinner = chicken'
		 ]
	});
	
	response.end('<h1>' + request.headers.cookie + '</h1>');

}).listen(52273, function(){
	console.log('Server Running at http://127.0.0.1:52273');
});