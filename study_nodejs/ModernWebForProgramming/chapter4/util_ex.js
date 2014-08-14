// 모듈추출

var util = require('util');

// 모듈 사용함

/*
 * format()은 console.log() 메서드와 비슷함
 * 차이점은 출력하지않고, 문자열을 반환해버리는것..
 * 
 */

var data = util.format('%d + %d = %d',52,273,52+273);
console.format(data);