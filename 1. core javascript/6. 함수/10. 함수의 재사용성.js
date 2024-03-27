
// 배열안에 특정 요소의 인덱스를 찾아 반환하는 함수
function myIndexOf(array, searchElement) {
  for (var i = 0; i < array.length; i++) {
    if (searchElement === array[i]) {
      return i;
    }
  }
  return NOT_FOUND; // if - for문 배열 안에 존재하지 않는 요소 처리 !
}

function myIncludes(array, searchElement) {
  for (var i = 0; i < array.length; i++) {
    if (searchElement === array[i]) {
      return true;
    }
  }
  return false; // if - for문 배열 안에 존재하지 않는 요소 처리 !
}

// ------> 코드 조각조각 내서 간단하게 (재사용성)
function myIncludes(array, searchElement) {
  var idx = myIndexOf(array, searchElement) !== NOT_FOUND;
  //return idx !== -1;
}

var foods = ['피자', '햄버거', '케밥', '지지고'];

var idx = myIndexOf(foods, '햄버거');
console.log(`index: ${idx}`);

var idx2 = myIncludes(foods, '지지고');
console.log(`index2: ${idx2}`);