//exit 이벤트를 연결한다.

process.on('exit', function(){
	console.log('안녕히계세요');
});

//프로그램 종료

process.exit();

//이벤트를 강제로 발생시킨다.

process.emit('exit');
process.emit('exit');
process.emit('exit');

//프로그램실행중
console.log('프로그램실행중');