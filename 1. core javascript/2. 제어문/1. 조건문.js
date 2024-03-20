var score = 80;
console.log(`점수: ${score}점`);

console.log('================================');
/*
   랜덤 정수 생성하기 : Math.random()
   <1이상 10이하의 랜덤 정수 생성>
   Math.random()   -   0.0  <= ~ <  1.0
   Math.random() * 10  0.0  <= ~ < 10.0

   Math.floor() : 소수점이하 버림.
   Math.floor(8.345) -> 8

   Math.floor(Math.random() * 10);  소수점 버리면서 0 ~ 9까지 랜덤 난수
   Math.floor(Math.random() * 10) + 1   1 ~ 10까지 랜덤 난수
*/
// <랜덤 범위 정수값 공식 >
// x 이상 y 이하의 랜덤 정수 생성
// Math.floor(Math.random() * (y - x + 1)) + x
var randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(`랜덤값: ${randomNumber}`);

console.log('====================================');

// <랜덤값 & 조건문 >
var score = Math.floor(Math.random() * 101);
console.log(`점수: ${score}점`);

if (score >= 60) {
  console.log('합격 입니다.');
  console.log(`짝짝짝`);
} else {
  console.log('불합격 입니다.');
  console.log(`ㅠㅠㅠ`);
}
