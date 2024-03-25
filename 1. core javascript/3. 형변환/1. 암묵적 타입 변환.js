// 숫자 + 문자 = 문자열로 인식 (JS만의 특수한 인식)
var n1 = 10;
var n2 = '20';
console.log(n1 + n2);

// 숫자가 '' 로 인해 강제로 문자열로 인식
var n3 = n1 + '';
console.log(typeof n3);

// 숫자 - 문자 = 숫자로 인식하여 순수하게 뺄셈 연산함.
var n4 = n2 - n1 - 5 - '3';
console.log(n4);

// 숫자 * 문자열 = 곱셈도 숫자로 인식하여 연산함.
var n5 = n1 * n2;
console.log(n5);

var n6 = 'hello' * 3;
console.log(n6);  // NaN 숫자가 아님. 연산 못함.

console.log('=======================================');

var n7 = '99'; //문자열 ! +'99' 앞에 부호를 두고 문자열로 표현하면 숫자로 인식
console.log(true + true); // true = 1 / false = 0으로 자동 변환
console.log(true + false);

console.log('========================================');

// falsy한 값 = 0, '', null, undefined, NaN
// 아래 5가지는 논리 0 false 값이다. 이 외 all true !
if (0) console.log('hello-1');
if ('') console.log('hello-2');
if (null) console.log('hello-3')
if (undefined) console.log('hello-4');
if (NaN) console.log('hello-5');
// 아래 출력은 모두 논리 true를 가짐.
if (99) console.log('hello-6'); // 0만 아니면 모든 수 출력됨.
if ('안녕') console.log('hello-7'); // 출력됨
if (' ') console.log('hello-8'); // 스페이스 존재
if ([10, 20, 30]) console.log('hello-9');  // 배열, 객체도 다 true한 값

for (var i = 1; i <= 10; i++) {
  if (i % 2) {   // 논리값 0이나 1로 나오면 없애고 조건식 줘도 됨.
    console.log(`${i}는 홀수입니다.`);
  } else {
    console.log(`${i}는 짝수입니다.`);
  }
}

var apple = 10; //apple = 1 true !
if (apple) { // > 0 대소 비교 없어도 apple = 10이니 참으로 인식
  console.log('사과가 있음.');
} else {
  console.log('사과가 없음.');
}

var n = 20;
var flag = n > 10; // 20 > 10 -> true

if (flag) {  // not -> !flag로 표현
  console.log(flag); //true
}
while (true) { // 1 ! 무한 루프

}