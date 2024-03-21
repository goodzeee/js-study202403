
var begin = 10, end = 0, step = 1;

var n = begin; //초기값

// while 반복문은 참거짓을 판별하기 위해 올라와서 조건식 무조건 실행 ! 
while (n >= end) {   //마지막 값 (조건식)
  console.log(`${n}!!`);
  n -= step;  //증감식
}

console.log('========================================');
// 구구단 출력하는 반복문
var lev = 7; //변수 활용해서 단수 자유롭게 넣기
var n = 1; 
while (n <= 9) {  
  console.log(`${lev} x ${n} = ${lev * n}`);
  n++;     
}

console.log('========================================');
// 10 ~ 34까지의 정수 홀수만 출력
// 증가 <= / 감소 >= 비교 연산자 방향 !!
var m = 10;

while (m <= 34) {
  if (m % 2 === 1) { //홀수라는 조건문 내부에 작성
  console.log(m);
  }
  m++;
}

console.log('========================================');
// 1 ~ 10까지의 누적 합 구하기
var total = 0; //누적 합을 위한 변수
var i = 1; // 1~10까지

while (i <= 10) {
  total += i;
  i++;
}
console.log(total); //while 반복문 끝나고 최종 값 나오기