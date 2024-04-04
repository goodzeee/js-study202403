
// 프로그램 전체에서 사용할 전역적인 변수, 상수와 함수 정의 //
const ADD = '+';
const SUB = '-';
const MUL = '*';
const DIV = '/';

const $userInput = document.getElementById('input-number');
// 사칙연산 다 불러옴.
const $addBtn = document.getElementById('btn-add');
const $subtractBtn = document.getElementById('btn-subtract');
const $multiplyBtn = document.getElementById('btn-multiply');
const $divideBtn = document.getElementById('btn-divide');

// result 요소노드
const $currentResult = document.getElementById('current-result');
// 계산 로그 요소노드
const $currentCalcultation = document.getElementById('current-calculation');
// 로그 리스트 요소노드
const $logEntriesUl = document.querySelector('.log-entries');
// 배열로 누적

// result에 그려질 숫자
let currentResult = 0; // 초기 숫자 0으로 !

// ==================함수 정의 영역==================== //

// 사칙연산을 수행하여 결과를 반환하는 함수
const operateNumber = ({prevResult: first, type: mark, enteredNumber: second}) => {
  let result; // 연산 결과 두 수와 부호가 필요 !! -> 객체로 묶어서 전달

  // 부호에 따라 계산되게 switch 반복문 작성
  switch (mark) {
    case ADD:
      result = first + second;
      break;
  
  case SUB:
      result = first - second;
      break;
  
  case MUL:
      result = first * second;
      break;
  
  case DIV:
      result = parseInt(first / second); // 소수점 버리기 !
      break;
  }
  return result;
};

// 로그배열에 있는 로그들을 화면에 렌더링하는 함수


// 로그배열에 완성된 로그를 쌓는 함수


// 계산 기능 헬퍼 함수
const calculate = (type) => {
  // 더하기를 해야 함
  // 계산 전 값을 백업
  const prevResult = currentResult; // 0으로 갖고 있지

  // 1. 입력창에 입력한 숫자를 읽어와야 함.
  const enteredNumber = +$userInput.value;

  // 2. 결과에 누적
  currentResult = operateNumber({prevResult, type, enteredNumber}); // 연산 결과를 리턴해주는 !

  // 3. 화면에 렌더링
  $currentResult.textContent = currentResult;
  // 계산 로그 생성
  const descriptionLog = `${prevResult} ${type} ${enteredNumber}`;
  $currentCalcultation.textContent = descriptionLog;

  // 로그 이력을 쌓는 함수

};