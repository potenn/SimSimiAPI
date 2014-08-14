//EventEmitter 객체생성

exports.timer = new process.EventEmitter();

// 이벤트를 강제로 발생시킴
setInterval(function(){
	
	exports.timer.emit('tick');
	
},1000);