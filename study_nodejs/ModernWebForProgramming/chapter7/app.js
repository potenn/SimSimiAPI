//모듈추출

var http = require('http');
var fs = require('fs');
var url = require('url');

//서버를 생성 및 실행
http.createServer(function(request, response){
	
	// 변수선언
	var pathname = url.parse(request.url).pathname;
	console.log(pathname);
	//페이지 구분
if(pathname == '/'){
	// Index.html 파일을 읽습니다.
	fs.readFile('index.html', function(error,data){
		//응답합니다
		response.writeHead(200,{'Content-Type': 'text/html'});
		response.end(data);
	});
	
}else if(pathname=='/OtherPage'){
		//OtherPage.html 파일을 읽습니다.
	fs.readFile('OtherPage.html', function(error,data){
		//응답합니다
		response.writeHead(200,{'Content-Type': 'text/html'});
		response.end(data);
	})
}
	
}).listen(52273, function(){
	console.log('Server Running at http:/127.0.01:52273');
});

