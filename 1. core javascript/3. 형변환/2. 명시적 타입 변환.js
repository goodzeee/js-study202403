// 숫자 타입으로 명시적 타입 변환 방법 3가지 !!
var x = '30.5', y = 40.5;
var result = Number(x) + Number(y); // 명시적으로 보이게 숫자로 타입 변환.
var result2 = parseInt(x) + parseInt(y); // parseInt는 문자를 숫자로 바꿀 때 정수로 바꾼다.
                                       // parseDouble을 사용하면 소주점을 지킬 수 있음.
var result3 = +x + +y; // 앞에 부호를 넣어서 숫자로 인식하게 가능.

console.log(result); 
console.log(result2);
console.log(result3);

// 문자 타입으로 명시적 타입 변환 !!
var m = '' + 10 + 20; // 맨 앞에 ''+ 만 명시하면 됨.
console.log(m);

var f ='' + false; // string / +false; = 숫자 0

console.log('=======================================');
// 논리 타입으로 명시적 타입 변환 !!
console.log(Boolean('hello !')); // true
console.log(!!999);  // 앞에 !! 붙이면 논리 타입으로 출력
console.log(!!undefined); // false (! -> 논리 not 시킨다.)

// 회원 로그인 여부 확인
function isLogin() {
  // const token = window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
  // return token !== null;

  return !!window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
}
const isLogin = () => !!window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
