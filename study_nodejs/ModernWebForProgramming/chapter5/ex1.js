// process 객체에 exit 이벤트를 연결합니다.
process.on('exit',function(){
	
	console.log('안녕히 가거라 ^_^ ..!');
	
});

//process 객체에 uncaughtException 이벤트를 연결합니다.
process.on('uncaughtException', function(error){
	
	console.log('예외가 발생했군 ^_^ 봐주겠다.');
	
});

// 2초 간격으로 3번의 예외를 발생시킨다.
var count = 0;
var id = setInterval(function(){
	//횟수 증가시킨다.
	count++;
	
	// 3번 실행하면 타이머를 중지시킵니다.
	if(count == 3)
	{
		clearInterval(id);
	}	
	
	// 예외를 강제로 발생시킨다.
	error.error.error();
	
},2000);



