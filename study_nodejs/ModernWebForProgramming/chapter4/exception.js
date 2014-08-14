// 모듈을 추출.
var fs = require('fs');

// 파일을 읽습니다.

try{
	var data = fs.readFileSync('textfile.txt','utf8');
	console.log(data);
}
catch(e){
	console.log(e);
}

try{
	fs.writeFileSync('textfile.txt','Hello World..!','utf8');
	console.log('FILE WRITE COMPLETE');
}catch(e){
	console.log(e);
}


// 비동기처리

fs.readFile('textfile.txt','utf8',function(error,data){
		if(error){
			console.log(error);
		}
		else{
			console.log(data);
		}
	
	});
fs.writeFile('texfile.txt','Hello World..!','utf8',function(error){
	if(error){
		console.log(error);
	}else{
		console.log('FILE WRITE COMPLETE');
	}
});
