/*
console.log(`강태풍님 안녕하세요 ! 방가방가 햄토리`);
console.log(`오늘도 즐건 하루 되세요 ~`);

console.log(`이하늬님 안녕하세요 ! 방가방가 햄토리`);
console.log(`오늘도 즐건 하루 되세요 ~`);
// 코드 500줄 정도 작성 ...
console.log(`뽀로로님 안녕하세요 ! 방가방가 햄토리`);
console.log(`오늘도 즐건 하루 되세요 ~`); */

// 함수 정의(만든다.) 재사용성 모듈화
function sayHello(userName) {
  console.log(`${userName}님 안녕하세요 ! 방가방가 햄토리`);
  console.log(`오늘도 즐건 하루 되세요 ~`);
}

// 함수 호출 (사용한다.) 어디든 넣어서 사용할 수 있다.
sayHello('둘리'); // userName => 둘리
sayHello('포차코');

function makeLine() {
  console.log('==========================================');
}
sayHello('a');
makeLine();

// 나의 프로그램에서는 원의 넓이를 자주 구함.
const PI =3.14159265;

// 반지름이 r인 원의 넓이를 구하는 함수 정의
function calcAreaCircle(r) {
  return PI * r ** 2;
}

// 반지름이 5인 원의 넓이
var circle1 = calcAreaCircle(5);
console.log(circle1);

// 반지름이 17인 원의 넓이
var circle2 = calcAreaCircle(17);
console.log(circle2);
// 함수 사용하니 안 외워도 된다 !! 불러와서 반복하여 재사용 할 수 있음. 값만 바꿔서

function removeBoardArticle() {
  
}