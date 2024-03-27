
// 1. 변수의 중복선언을 암묵적으로 허용
var x = 10;

// ... 100만줄

//var x = 'ddd';  // 재할당을 통해 x 값이 교체되어버림.
//let x = 'ddd';  // 이미 선언되어 있다는 오류가 나와 안전하다 !!
console.log(`x: ${x}`);

// 2. 블록 레벨 스코프를 지원하지 않음
let i = '메롱';  

for (let i = 0; i < 5; i++) {
  console.log(`for - i : ${i}`); // 함수 내부에서 사용하고 let i는 쥬금 !
} 
console.log(`global - i : ${i}`); // 메롱 var를 사용하여 할당했다면 'i: 5가 옴.

// 3. 호이스팅 : 선언위치와 관계 없이 참조 가능.
hobby = '댄스';

// ... 10만줄

var hobby; // 사용 가능
let hobby; // 오류

console.log(hobby);

// -----------------> 안전한 코드를 작성하기 위해 let 키워드로 사용하기 !