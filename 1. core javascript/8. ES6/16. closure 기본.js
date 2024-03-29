
// 자바스크립트의 함수는 함수를 리턴할 수 있음.(외 다양한 자료형 리턴 가능 !)
function Calculator (a) {
  return function (n1, n2) {
    return n1 + n2
  };
}

const x = Calculator();
console.log(typeof x); // function
const y = x(10, 20);
console.log(`y : ${y}`); // 30

const z = Calculator()(6, 9); //Calc 함수 받고 (6, 9) 받음
console.log(`z : ${z}`); // 15

const operate = () => {
  return (n1, n2) => n1 * n2;
};
const k = operate(); // k에 operate 리턴문이 들어와 있음.
const m = k(2, 3)
console.log(`m : ${m}`); // 6

console.log('=================================');

function bar() {

  function fas() {
    return 10;
  }
  return fas;
}
const h = bar()(); // bar()함수 호출 -> 안에 () 함수 호출 = fas !!
console.log(h); // 10

// 카운트를 증가시키는 함수 (스코프)
//let count = 0; // 전역 변수

// 전역 변수를 사용하면 중간에 값 바뀌는 문제가 생김 !
// const increase = () => count++;
// console.log(increase()); // 0
// console.log(increase()); // 1
// count = 99; // ㅡ.,ㅡ
// console.log(increase()); // 99
// console.log(`count : ${count}`); //100

const increase2 = () => {
  let count = 0;
  return count++;
};
increase2(); 
increase2(); 
const count = increase2(); 
console.log(`count : ${count}`); // 바꿔도 평생 0으로 고정 ! 값을 늘리지 못해

// 클로저를 통해 지역변수의 스코프를 늘려줄 수 있다.
const increaseClosure = () => {
  let count = 0; // 지역변수

  const helper = () => ++count; // 안에 추가 함수

  return helper;
};

const increase = increaseClosure();

// 값 건들이지 않고 증가 시킬 수 있어짐.
console.log(increase()); // 1
console.log(increase()); // 2
count2 = 999;
console.log(increase()); // 3

// 즉시 실행 함수 : 함수를 1회성으로 사용할 목적으로 만드는 함수

(function() {
  console.log('hello');
})();


const increase_ = (() => {
  let count = 0;
  return () => ++count;
})();

increase_();
increase_();
increase_();
