var i = 1;      // while 반복문은 나눠서  1. 초기값
while (i <= 5) {  // 2. 조건식
  console.log('hello');
  i++;           // 3. 증감식
}

// 모든 반복문의 증감식은 맨 마지막에 실행된다.

for (var i = 1; i <= 5; i++) { // for 반복문은 한 번에 (초기값; 조건식; 증감식)
  console.log('bye');
}

// 1~10 누적합.
var total = 0;   //누적합할 토탈 변수 지정
for (var i = 1; i <= 10; i++) {
  total += i;
}
console.log(total);

//횟수 지정 반복문
for (var i = 0; i < 5; i++) { 
  console.log('bye');  // 동일하게 5번 반복해서 나오는데
                       // 0부터 시작하여 미만으로 잡기 추천
}

