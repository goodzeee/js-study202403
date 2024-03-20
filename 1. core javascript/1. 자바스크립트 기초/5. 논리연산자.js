
var t = true, f = false;
// and 연산 : 논리합 - && 모두 참이어야 참 !
console.log(t && t); // t
console.log(t && f); // f
console.log(f && t); // f
console.log(f && f); // f

console.log('=========================================');
// or 연산 : 논리곱 - || 하나만 참이어도 참 !
console.log(t || t); // t
console.log(t || f); // t
console.log(f || t); // t
console.log(f || f); // f

console.log('==========================================');
// not 연산 : 논리반전 - ! 참이면 거짓, 거짓이면 참 반대 !
console.log(!t); // f

var money = 0;

if (!money) {
  console.log('나는 돈이 없어요 !'); //결과 출력
} else {
  console.log('나는 돈이 있어요 ~');
}