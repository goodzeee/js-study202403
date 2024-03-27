// let : 
let x;
x = 'ㅋㅋ';
console.log(x);

// const : 상수 선언 -> 변경 불가능한 데이터
// 초기에 선언과 할당 다 해줘야 함 !! 할당된 값 변경 불가능 !!
const y = '하잉';
//y = '바잉'  -> 불가능 !
console.log(y);

// 코드에 의미도 생기고 변경도 불가능 해지니 safety
const PI = 3.141592;
const COLOR_GREEN = '#0f0';

// 상수는 객체의 불변성을 유지할 수 있다.
// 객체 선언 시 const키워드 사용 !
const kim = {
  name : '김하니',
  age : 30,
};
kim.age = 31;
kim.name = '마이클 킴'; // 객체의 내부 키 값을 수정하는건 가능 !
console.log(kim);

// kim = {   // just 전체 복제품 있으면 앙대오
//   name : '김하니',
//   age : 30,
// };
// console.log(kim);

// 배열은 객체의 일부이다 ! 따라서 const 키워드 사용
const array = {

};