// process.argv 속성과 process.exit()메소드

//process.argv
process.argv.forEach(function(item,index)
{ //출력합니다
	console.log(index + ' : ' + typeof (item) + ' : ', item);
	
	// 실행 매개변수에 --exit이 있을때
	if(item==='--exit'){
		//다음 실행 매개변수를 얻습니다.
		var exitTime = Number(process.argv[index+1]);
		
		//일정 시간후 프로그램종료.
		setTimeout(function(){
			process.exit();
		},exitTime);
		
	}
});

console.log('- process.env:', process.env);