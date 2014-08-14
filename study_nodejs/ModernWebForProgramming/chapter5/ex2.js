//exit 이벤트를 연결한다.

process.on('exitt', function(){
	console.log('안녕히계세요');
});

//emit 메서드를 사용하여 이벤트를 강제로 호출하면 이벤트리스너만 실행된다.
// 이벤트를 강제로 발생시킵니다.

process.emit('exitt');
process.emit('exitt');
process.emit('exitt');

console.log('프로그램실행중');