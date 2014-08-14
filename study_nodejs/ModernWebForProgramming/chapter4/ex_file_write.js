var fs = require('fs');

var data = 'Hello World';

fs.writeFile('TextFileOtherWrite.txt',data,'utf-8',function(error){

	console.log('WRITE FILE ASYNC COMPLETE');
	
});

fs.writeFileSync('TextFileOtherWriteSync.txt',data,'utf8');
console.log('WRITE FILE SYNC COMPLETE');
