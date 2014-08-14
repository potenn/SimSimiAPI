var fs = require('fs');
/*
var text = fs.readFileSync('textfile.txt','utf8');
console.log(text);
*/

/*
readFile() 메서드를 만나는 순간 이벤트리스너를 등록하고 파일을 모두 읽으면 이벤트리스너를 실행한다.
밑의 코드는 readFile() 메서드를 사용해서 파일을 읽는데, textfile.txt 파일을 모두읽은후에 세번째 매개변수로 입력한
함수를 실행한다.
*/

fs.readFile('textfile.txt','utf8',function(error,data){
	console.log(data);
});