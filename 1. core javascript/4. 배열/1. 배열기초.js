
var arr = [10, 20, 30, 40];
console.log(typeof arr); // object 객체 (복합 데이터)
console.log(arr[1]); // 20
console.log(arr[2] ** 2); // 900 arr[2] -> 여전히 30
arr[1] = 999;
arr[3]++;
console.log(arr); // [10, 999, 30 , 41]

// 배열 데이터 수 확인
console.log(arr.length); // 4
console.log(`마지막 데이터 : ${arr[arr.length - 1]}`); // 41

// 배열 데이터 순회 (전체 참조 : travis)
console.log('========================================');

for (var i = 0; i < arr.length; i++) {
   console.log(arr[i]);  // 배열 길이를 활용해서 반복문 배열 전체 순회 !
}

console.log('===========================================');

// for ~ of 반복문 (배열 전용 반복문)
var weedDays = ['월', '화', '수', '목', '금', '토', '일'];

// 요구사항 조건문이 걸릴 때 유용
for (var i = 0; i < weedDays.length; i++) {
  console.log(`${weedDays[i]}요일 !`);
}

// 안걸러내고 전체 반복할 때 유용
for (var day of weedDays) {  // 원하는 배열을 새로운 변수에 저장해서 실행시키기
  console.log(`${day}요일 !`);
}
// of 뒤에 배열이 와야함 !!

// 배열 생성 관례 : 이름 복수형, -List 어미
var fruits = ['자몽', '딸기', '수박', ]; // 이상 없으며 이렇게 사용하는게 효율적
var fruitList = ['자몽', '딸기', '수박'];
var fruitArr = ['자몽', '딸기', '수박'];

