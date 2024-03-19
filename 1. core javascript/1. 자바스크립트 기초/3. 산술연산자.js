
// js는 정수 나눗셈이어도 실수 결과값이 나온다.
console.log(27 / 5);  // 5.4 js만 나누면 실수 결과값이 나옴

// % -> 나머지 연산
console.log(27 % 5);  // 2
console.log(4 % 10);  // 4
console.log(5 % 0);  // 0으로 나눗셈 불가
console.log(0 % 5);  // 나눗셈은 가능 - 몫과 나머지는 0

// ** -> 제곱 연산
console.log(2 ** 4);  // 16

console.log('=======================================');

// ++ -> 증감 연산자 
var x = 3;
x++;
++x;
x--;
console.log(`x: ${x}`);

// 전위 연산, 후위 연산
var n1 = 10;
var n2 = n1++;
console.log(`n1: ${n1}, n2: ${n2}`);

var n3 = 10;
var n4 = ++n3;
console.log(`n3: ${n3}, n4: ${n4}`);

var xx = 5;
xx++; // 1 증감
//xx += 1 , xx = xx + 1; 결과값은 같지만 연산을 2번 해서 속도가 느리다.
xx -= 1;
xx *= 3; // 곱 15
xx /= 5; // 나눗셈 3
xx **= 2; // 제곱근 9
xx %= 4; // 나머지 1
console.log(`xx: ${xx}`);

