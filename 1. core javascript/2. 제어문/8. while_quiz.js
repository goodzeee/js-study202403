//문제1: 두 수를 입력받아 해당 범위의 누적합을 구하세요

var n1 = +prompt(`첫번째 수를 입력하시오.`);
var n2 = +prompt(`두번째 수를 입력하시오.`);

if (x > y) {
  var t = x;
  x = y;
  y = t;
}

var num1 = n1;
var num2 = n2;
var total = 0;

while (num1 <= num2 ) {
  total += num1;
  num1++;
}
alert(`${n1} ~ ${n2}까지의 누적합 : ${total}`)

//문제2: 입력받은 정수만큼의 기호를 출력하되 + - 가 교차되어 나오도록 하세요
var count = +prompt(`양의 정수를 입력하시오.`);
var mark = '';
var i = 1;

while (i <= count) {
  if (i % 2 === 1) {  // +- 교차로 나오게 하는 조건문
    mark += '+';  // 홀수일 때 +
  } else {
    mark += '-'   // 짝수일 때 -
  }
  i++;
}
alert(mark);
