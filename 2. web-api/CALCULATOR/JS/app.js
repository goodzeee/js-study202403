
// 프로그램 실행 코드 (함수 호출, 이벤트 등록, 핸들러 정의 등 ...) //

// 이벤트 핸들러 바인딩
$addBtn.addEventListener('click', e => {
  // 연산 처리 함수
  calculate(ADD);
});
$subtractBtn.addEventListener('click', e => {
  calculate(SUB); // 상수를 의미 대문자 !
});
$multiplyBtn.addEventListener('click', e => {
  calculate(MUL);
});
$divideBtn.addEventListener('click', e => {
  calculate(DIV);
});