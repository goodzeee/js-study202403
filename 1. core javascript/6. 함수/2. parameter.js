
// x부터 y까지의 누적합을 구해야 함
// 1~10
var total = 0;
for (var i = 1; i <= 10; i++) {
  total += i;
}

// 미리 작성해두고 나중에 필요할 때 재사용 !! -> 함수로 만들어서 간단하게
function calcRangeTotal(x, y) {
  var total = 0;
  for (var i = x; i <= y; i++) {  // x ~ y까지를 유동적으로 사용해도 문제 없 !
  total += i;  // 누적합
}
 return total;  // 돌려줄 값 !
}
var result = calcRangeTotal(1, 10);
console.log(result);
var result2= calcRangeTotal(3, 54);
console.log(result2);

// 매개변수의 기본값
function sayHello(language = '한국어') { //기본값을 한국어로 설정해주는 최신 문법.

  // ES5 (기본값을 '한국어'로 만드는 옛날 식)
  language = language || '한국어'; // false || true => '한국어'가 기본값.

  switch (language) {
    case '한국어':
      console.log('안녕하세요');
      break;
    case '영어':
      console.log('hello');
      break;
    case '일본어':
      console.log('곰방와');
      break;
  }
}

sayHello('일본어'); // 곰방와
sayHello('중국어'); // Undefined

function selectRandomPet() {
  var pets = ['멍멍이', '야옹이', '짹짹이'];
  
  var rn = Math.floor(Math.random() * pets.length); // 랜덤 범위 줘서 배열 요소 랜덤으로 나오게
  return pets[rn];
}
var r1 = selectRandomPet();
var r2 = selectRandomPet();
console.log(`r1: ${r1}`);
console.log(`r2: ${r2}`);