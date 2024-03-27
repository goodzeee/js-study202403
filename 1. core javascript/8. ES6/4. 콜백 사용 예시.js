
// 정수 n을 전달하면 1 ~ n까지의 모든 짝수를 출력
function showEvenNumber (n) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  console.log(nums);
}
//showEvenNumber(7);
// 홀수 출력
function showOddNumber (n) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
  console.log(nums);
}
showOddNumber(7);

//홀수와 짝수일 때를 isOdd파라미터 - 인수로 받기
function showOddOrEvenNumber (n, isOdd) { 
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === isOdd) { // 홀수일 때 짝수일 때 처리하기 위해 추가 파라미터 주기
      nums.push(i);
    }
  }
  console.log(nums);
}
showOddOrEvenNumber(7, 1);

function showTripleNumber (n, x) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (i % x === 0) {  // 배수를 출력하게 하기 위해 x
      nums.push(i);
    }
  }
  console.log(nums);
}

// 다양하고 많은 요구사항을 처리하기 위해 <콜백 활용> !!
// 요구사항을 너가 써서 보내
// 정수 n을 전달하면 1 ~ n 까지의 정수를 조건에 맞게 출력
function showNumber (n, condition) { // condition 조건식 파라미터 주기
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (condition(i)) { // 여기에 콜백으로 사용할 요구사항 코드 적어서 보내
      nums.push(i);
    }                    // 공통
  }
  console.log(nums);
}

showNumber(50, i => i % 2 === 0); // condition(i) 파라미터로 준 부분에 콜백 함수 인수를 주기

showNumber(20, function(i){; // condition(i) 파라미터로 준 부분에 콜백 함수 인수를 주기
  return i % 2 === 1;
});
showNumber(10, function(i){; // condition(i) 파라미터로 준 부분에 콜백 함수 인수를 주기
  return true;
});                   // 요구사항 따로 만들어두기 가져다 써 ~

console.log('===========================================');

function makeCook(recipeName, recipeCode) {
  console.log('# 나만의 맛도리 야매 레시피 #');
  console.log((`  요리 이름 : ${recipeName}`));
  // 실제 레시피 출력은 만들어서 전달해주세요. recipeCode(); 함수 내부에 만들어 놓고
  recipeCode();

  console.log('# 간단하죠 ? 이대로 만들어 보세요 ~');
}

// 실제 레시피 순서 출력문 밖에 작성하기.
makeCook('맛도리 라면', () => {
  console.log('1. 아리수 팔팔 끓이기');
  console.log('2. 스프와 면, 양파, 대파 넣고 끓이기');
  console.log('3. 맛도리 얼큰 라면 먹기');
});