const food = '돈까스';
const userName = '스윙스';

console.log(`${food}의 왕 ${userName}`);

// 브라우저 전용함수 : node.js 환경에서는 작동 불가
// prompt() : 브라우저에서 입력을 할 수 있게 해주는 함수
// confirm() : 브라우저에서 확인/취소를 할 수 있게 해주는 함수
// alert() : 브라우저에서 알림창을 띄우는 함수

var yourName = prompt(`당신의 이름을 입력하세요.`);
alert(`입력한 이름: ${yourName}`);

confirm(`서비스를 이용할 수 없게 됩니다. 진짜로 탈퇴하시겠습니까 ?`)

var resultFlag = confirm(`서비스를 이용할 수 없게 됩니다. 진짜로 탈퇴하시겠습니까 ?`)
console.log(`나의 대답: ${resultFlag}`);

var n1 = +prompt(`첫번째 수를 입력하세요.`); //prompt 앞에 + 사용시 숫자로 인식되어 값이 나옴.
var n2 = +prompt(`두번째 수를 입력하세요.`);

alert('안녕' + '하세요'); //문자열 합치기 안녕하세요
alert(`두 수의 합: ${n1 + n2}`); //n1n2 문자열로 인식되어 붙어서 나옴.