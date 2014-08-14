// 모듈 추출
var url = require('url');
var querystring = require('querystring');
// 모듈 사용

// 매개변수로 URL 문자열을 입력하면 URL을 분해하여 객체로 만든다.
var paresedObject = url.parse('http://www.naver.com?isbn=978-89-7914-874-9');
console.log(querystring.parse(paresedObject.query));

// querystring 모듈은 유용하긴 하나, url 모듈에 기능이 통합되있어서 많이 사용X
/*
 *만약 console.log(url.parse('http://www.naver.com?isbn=978-89-7914-874-9',true))
 *querystring과 같은 효과
 * 
 */
