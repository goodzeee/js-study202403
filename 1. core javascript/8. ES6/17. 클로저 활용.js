
// const increase = (() => {
//   let count = 0;
//   return () => ++count;
// })();


// const decrease = (() => {
//   let count = 0;
//   return () => --count;
// })();

// console.log(increase());
// console.log(increase());
// console.log(increase());

// console.log(decrease());
// console.log(decrease());
// console.log(decrease());
// 이러면 값이 따로 증가 감소 됨.

const countClosure = () => {
  let count = 0;

  const increase = () => ++count; //증가
  const decrease = () => --count; //갑소 시키는거 한 함수에 다 넣어줘 !!

  return { increase, decrease }; // 객체로 묶어서 내보내 -> 객체 타입으로 출력
};
const { increase, decrease } = countClosure();
//console.log(typeof counter); // 객체
console.log(increase());
console.log(increase());
console.log(increase());
console.log(decrease());
console.log(decrease());

const { increase2, decrease2 } = (() => {
  let count = 0;
  return {
    increase: () => ++count,
    decrease: () => --count,
  }
})();
