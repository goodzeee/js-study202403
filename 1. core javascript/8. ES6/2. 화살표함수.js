
// 함수 선언문
// function add(n1, n2) {
//   return n1 + n2;
// }

// // 함수 표현식 (값으로 표현됨.)
// const add = function(n1, n2) {
//   return n1 + n2;
// };

// 화살표 함수 (function 키워드를 없애고 => 넣기 !)
const add = (n1, n2) => n1 + n2; // return 반환문을 올려서 사용 ! n1, n2 파라미터가 n1 + n2로 반환된다 ~

const r1 = add(10, 30)
console.log(r1);

// function sayHello() {
//   console.log('안녕하삽사리와요.');
// }

// const sayHello = function() {
//   console.log('안녕하삽사리와요.');
// };

const sayHello = () => console.log('안녕하삽사리와요.'); //한 줄이어서 괄호 생략한거잉

sayHello();

const kim = {
  name : '김핑퐁',
  greeting : sayHello,
  dance : () => console.log('춤을 맛깔나게 춥니다.'),
};
kim.dance();
kim.greeting();

// 정수 1개를 전달하면 해당 정수의 제곱값을 리턴하는
// 화살표함수 pow 작성해보세요
const pow = n => console.log(n**2); // 파라미터 한 개인 경우 (n) 소괄호 생략 가능

pow(4);