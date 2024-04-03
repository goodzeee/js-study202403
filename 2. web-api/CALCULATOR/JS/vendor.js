
// 프로그램 전체에서 사용할 전역적인 변수와 함수 정의 //
const $userInput = document.getElementById('input-number');
// 사칙연산 다 불러옴.
const $addBtn = document.getElementById('btn-add');
const $subtractBtn = document.getElementById('btn-subtract');
const $multiplyBtn = document.getElementById('btn-multiply');
const $divideBtn = document.getElementById('btn-divide');

// result 요소노드
const $currentResult = document.getElementById('current-result');
const $currentCalcultation = document.getElementById('current-calculation');
// result에 그려질 숫자
let currentResult = 0; // 초기 숫자 0으로 !

// ==================함수 정의 영역==================== //
// 계산 기능 헬퍼 함수
const calculate = () => {
  // 더하기를 해야 함
  // 계산 전 값을 백업
  const prevResult = currentResult; // 0으로 갖고 있지

  // 1. 입력창에 입력한 숫자를 읽어와야 함.
  const enteredNumber = +$userInput.value;

  // 2. 결과에 누적
  currentResult += enteredNumber; // 현재 값 누적

  // 3. 화면에 렌더링
  $currentResult.textContent = currentResult;
  // 계산 로그 생성
  const descriptionLog = `${prevResult} + ${enteredNumber}`;
  $currentCalcultation.textContent = descriptionLog;
};