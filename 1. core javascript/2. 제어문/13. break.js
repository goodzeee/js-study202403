
for (var i = 1; i <= 50; i++) {
 if (i > 10) {
  break;  // 강제 종료는 조건문에 조건 걸어주고 사용한다. 
         //이 밑에 있는 코드는 실행되지 않음.
}     
  console.log(i);
}
console.log('==============================');
for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 2; j++) {
    if (i === j) {
      break;  // j for 반복문에 포함되어 있어서 해당 반복문만 강제 종료
    }
    console.log(`${i}, ${j}`);
  }
}