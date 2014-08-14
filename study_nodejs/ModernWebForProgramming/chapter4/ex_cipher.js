// 모듈을 추출합니다.
var crypto = require('crypto');

// 변수 선언.
var key = '아무도 알지 못하는 나만의 비밀키';
var input = 'PASSWORD';

// 암호화
var cipher = crypto.createCipher('aes192', key); // 암호화하기위해서 만든 객체
cipher.update(input,'utf8','base64'); // 암호화하는 메소드
var cipheredOutput = cipher.final('base64'); // 암호화된것 반환

// 암호화 해제
var decipher = crypto.createDecipher('aes192',key); //복호화하기위해서 만든 객체
decipher.update(cipheredOutput,'base64','utf8'); // 복호화하는 메소드
var decipheredOutput = decipher.final('utf8'); // 복호화된것반환

console.log('원래 문자열 : '+ input);
console.log('암호화 : '+cipheredOutput);
console.log('복호화 : '+decipheredOutput);