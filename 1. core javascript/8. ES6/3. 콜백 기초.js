
// 어떤 계산을 하는 함수
function operate(param) {
  //console.log(`param : ${param}`);

  const x = param(10, 50);  // 파라미터 인자값을 주고 x에 저장 !

  console.log('계산기 작동');
  const n1 = 10, n2 = 20;
  const result = param(n1, n2); // 밑에 함수 호출식 인자값 !
  return result;
}

//const add = (n1, n2) => n1 + n2; // 새로운 함수 만들어서 값 넣어주는 방법

// 함수 operate 호출 -> 이름이 없는 다른 함수 전달
// 함수 내부를 실시간으로 컨트롤 할 수 있다. (요구사항에 경우의 수가 많아지면서 콜백으로 처리해두기)
const result = operate(function(n1, n2) {  // 위 operate 함수 파라미터 값에 들어가는 !!
  return [n1, n2]});

  console.log(`result : ${result}`);