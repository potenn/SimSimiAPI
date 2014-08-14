console.log('Hello World..!');
console.log('filename:', __filename);
console.log('dirname:', __dirname);
console.log('output: %d',273);
console.log('JSON : %j',{name: 'RintIanTta'});


// 시간측정시작

console.time('alpha');

var output=1;
for(var i = 1; i<=10 ;i++)
{
	output*=i;
}

console.log('Result:',output);

//시간측정종료합니다
console.timeEnd('alpha');


// process.argv 속성과 process.exit()메소드

//process.argv
process.argv.forEach(function(item,index)
{ //출력합니다
	console.log(index + ' : ' + typeof (item) + ' : ', item);
	
	// 실행 매개변수에 --exit이 있을때
	if(item=='--exit'){
		//다음 실행 매개변수를 얻습니다.
		var exitTime = Number(process.argv[index+1]);
		
		//일정 시간후 프로그램종료.
		setTimeout(function(){
			process.exit();
		},exitTime);
		
	}
});