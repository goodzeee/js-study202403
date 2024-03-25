// 단축 평가
// and -> 오왼 둘 다 !
true && true; // t
true && false; // f
false && true; // f
false && false; // f
// or -> 한쪽만도 !
true || true; // t
true || false; // t
false || true; // t
false || false; // f

// or 연산 : 첫번째  truthy 반환 (true값이 나오면 그게 바로 출력)
console.log('hello' || 'bye'); // hello 왼쪽이 true면 끝 !
console.log(null || '안뇽'); // 안뇽

// and 연산 : 첫번째 falsy를 반환 (false값이 나오면 그게 바로 출력 아니면 맨 끝 값)
console.log('메롱' && '하하'); // 하하
console.log(0 && '룰루랄라'); // 0

if (조건) {
  alert('blah blah ~');
}
조건 && console.log('blah blah ~'); // 위아래 조건식이 같다. && 오왼 둘 다 보기 

/* <h1>안녕하세요.</h1>
login && <h2>수순님 환영합니다.</h2>

쿠폰당첨여부 && sendCoupon();
!쿠폰당첨여부 && sendMessage(); 반대로 표현하고 싶을 때 not! 사용
*/