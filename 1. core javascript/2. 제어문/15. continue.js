// continue -> 스킵 기능

for (var i = 1; i <= 10; i++) {
  if (i % 2 === 0) break;
  console.log(i);
}
console.log('반복문 종료 !');

for (var i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i);
}
console.log('반복문 종료 !');


while (true) {
  var n = +prompt('숫자를 입력');

  if(n === 0) break; // 0 나오면 바로 반복문 종료
    else if(n === 1) continue;  // 1 나오면 건너뛰고 반복문으로 다시 올라감

alert('메롱메롱');
}
alert('끝났지롱') // 0일 때