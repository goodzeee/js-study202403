
var pets = ['강아지', '고양이', '햄토리'];
console.log(pets);

// push() : 배열 맨 끝에 데이터 추가
pets.push('앵무새');
pets.push('거북이', '토끼'); // 나열해서 배열 추가 가능.
console.log(pets);

// pop() : 배열 맨 끝 데이터 삭제
var mypet1 = pets.pop(); // 삭제한 데이터 새로운 변수에 주기
pets.pop();
var mypet2 = pets.pop();

console.log(pets);
console.log(mypet1);

// shift() : 배열의 맨 첫 데이터 삭제
// unshift() : 배열의 맨 첫 번쨰에 추가
pets.shift();
console.log(pets); 
pets.unshift('강아지 다시 추가');
console.log(pets);