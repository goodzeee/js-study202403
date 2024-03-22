// 무한 루프 while -> 횟수가 정해지지 않은 반복문에 사용
// 무한 루프 내부에 if 조건문에 조건 걸어줘서 사용하기 !!
// while (true) {
//   if () {
//     break;
//   }
// }

//1~100사이 랜덤 정수
//랜덤 정수 공식 : random() * (y - x + 1) + 1
var rn = Math.floor(Math.random() * 10) + 1;

while (true) {
  console.log('hello');
  if (rn === 7) break;
}
console.log('반보문 종료 !');