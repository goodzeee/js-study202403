
// return은 함수의 탈출문(종료문)
function add (n1, n2) {
  //console.log(`n1: ${n1}, n2: ${n2}`);
  return n1 + n2; // break 같은 역할. 이 밑에 코드는 실행 안됨.
  var x = 10;
}
// 반환값(return) : 함수 호출부로 함수의 결과값을 전달해주는 것 !
console.log(add(10, 20));  // 30 출력되는 콘솔로그의 해당 함수에 파라미터 값 줘 !

var result = add(20, 59);
console.log(result);

var result2 = add(10, 5) * add(3, 30); // 왼쪽부터 오른쪽 순서대로 호출 !!
console.log(result2);

// return이 없는 함수
function multi (n1, n2) {
  console.log(`${n1} x ${n2} = ${n1 * n2}`);
}

var r1 = multi (3, 4); // 이렇게 해도 출력은 나와.
console.log(`r1: ${r1}`);

console.log('==========================================');

multi(add(2, 3), add(5, 6));

// return이 없는 함수는 변수에 저장하지 말고
// 다른 함수의 매개값으로 쓰면 안됨.
var r2 = add(multi(2, 4), multi(2, 2));
console.log(`r2: ${r2}`); // r2: NaN

// 보여주고 끝내 메모리 따로 차지 안해, 리턴 : 갖고와 다른 곳에서 써야 해

// 데이터베이스를 접속하는 함수
/* function conneciDatabase(id, pw, auth) {
  var connect = getConnection();
  //...
  return true; // 후속 조치를 위해 사용하는
} */

// return이 없는 함수에서 return을 break처럼 사용하기
function callName(nickName) {
  var prohibits = ['바보', '멍청이', '메롱'];
  if (prohibits.includes(nickName)) {
    console.log('좋은 말할 때 나쁜 말 쓰지 마세요 ^^');
    return; // 강제 종료의 의미로 사용 ! break와 유사 !
}
console.log(`${nickName}님 안녕하세요 ~`);
}
console.log('========================================');

callName('멍청이'); // 뽀로로 출력문 하나만 출력되고 끝나 !