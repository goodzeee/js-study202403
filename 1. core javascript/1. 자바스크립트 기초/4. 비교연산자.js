
// == , === 타입과 비교 연산
var a = 5;
var b = '5';
console.log(a === b); //타입과 값이 같은지 비교할 때 === 사용.
console.log(a !== b); //다른지 반대 비교할 때 !==

console.log('=================================');

console.log('0' === '');
console.log(0 === '');
console.log('0' === 0);
console.log(false == 'false');
console.log(false == '0');
//명확히 값을 비교할 때 === 3개 사용해라 !!

console.log('==================================');
//Ascii code  A= 65 / a = 97
          // 97   65
console.log('a' > 'A');
console.log('강' < '황');
console.log('ace' < 'ade'); // c < d 가 더 뒤에 있으니 값이 크다.