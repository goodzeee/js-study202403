
var foodList = ['떡볶이', '닭꼬치', '짬뽕', '닭발'];

// indexOf() : 배열의 특정 요소(데이터)가 몇 번 인덱스에 있는지 알려줌.
var target = '짬뽕';
var index = foodList.indexOf(target); // 2
console.log(`index: ${index}`);    // 배열의 해당 요소 못 찾으면 -1 출력됨.

// 특정 인덱스 찾기
for (var i = 0; i < foodList.length; i++) {
  if (target === foodList[i]) {
    index = i;
    break;
  }
}

// include() : (포함된 여부)특정 데이터가 있는지 없는지 논리로 확인
var flag = foodList.includes('닭발'); // true / 요소 존재하지 않으면 false
console.log(`flag : ${flag}`);

// slice() : 배열을 원하는 범위만큼 자르기
var sliced = foodList.slice(1, 3);
console.log(sliced);
// 3번부터 끝까지 의미함.
var sliced2 = foodList.slice(3); 
console.log(sliced2);
// 전체 복사
var sliced3 = foodList.slice();
console.log(sliced3);
// slice를 해도 복사본에서 추출을 하는 개념이라 원본은 변하지 않음.
console.log(foodList);

console.log('================================================');

// reverse() : 배열을 역정렬
// 원본이 변경됨.
var nums = [10, 20, 30, 40, 50];
var numsCopy = nums.slice(); // 자르고 복사본 넣어주기 !

numsCopy.reverse();  // reverse(역정렬) 원본 변경

console.log(nums);
console.log(numsCopy);

console.log('==================================================');

// concat() : 배열을 결합
var arr1 = [10, 20, 30];
var arr2 = [99, 999];

var concated = arr1.concat(arr2); // 원본은 변하지 않음 결합한 사본을 가지는 것 !!
console.log(concated); 

// splice() : 배열의 삭제 및 삽입, 원본에서 삭제 삽입을 진행하므로 원본이 손상됨.
console.log(foodList);

foodList.splice(1, 2); // (삭제할 첫 인덱스 위치, 갯수 2이면 2개 지우기)
console.log(foodList);

foodList.splice(0, 1, '파스타'); // 해당 인덱스 요소 삭제하고 그 위치에 배열 요소 추가
console.log(foodList);

foodList.splice(2, 0, '마라탕'); // 해당 인덱스 요소 지우지 않고 사이에 껴줌 !!
console.log(foodList);

foodList.splice(1);  // 1번 인덱스부터 뒤에 다 지우기 !!
console.log(foodList);

