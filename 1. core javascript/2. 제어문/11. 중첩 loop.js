
var count = 0;
// 중첩 반복문 -> 반복횟수를 곱한 횟수가 나옴.
for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 2; j++) {
    // console.log('하이' + ++count);  // count++ 붙이는 위치 중요 !
     console.log(`${i}, ${j}`);
  }
}
console.log('======================================');
// 구구단 모든 단수 중첩 반복문 사용 !!
for (var lev = 2; lev <= 9; lev++) {
  console.log(`# 구구단 ${lev}단`);
  for (var line = 1; line <= 9; line++) {
    console.log(`-> ${lev} x ${line} = ${lev * line}`)
  }
}
console.log('======================================');

var lev = 2;

console.log(`# 구구단 ${lev}단`);
for (var line = 1; line <= 9; line++) {
  console.log(`-> ${lev} x ${line} = ${lev * line}`);
}

