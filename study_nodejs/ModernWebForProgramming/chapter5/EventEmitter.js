// EventEmitter 객체를 생성합니다.

var custom = new process.EventEmitter();

// 이벤트를 연결한다.
custom.on('tick',function(){
	console.log('이벤트를 실행한다.');
});

// 이벤트 강제발생
console.emit('tick');

