
function myForEach(array, callback) {
  for (const x of array) { // 배열에 하나씩 골라와서 콜백에 저장해주는
    callback(x);
  }
}

const userList = [
  {
    account: "abc1234",
    userName: "대길이",
    job: "추노",
    address: "서울",
    hobbys: ["수영", "축구", "테니스"],
    salary: 5400000,
    age: 35,
  },
  {
    account: "banana",
    userName: "빠나나",
    job: "과일",
    address: "서울",
    hobbys: ["푸드파이팅", "테니스"],
    salary: 2700000,
    age: 18,
  },
  {
    account: "park1234",
    userName: "주차왕",
    job: "발렛파킹",
    address: "경기",
    hobbys: ["족구", "축구", "테니스", "영화감상"],
    salary: 3900000,
    age: 56,
  },
  {
    account: "fire",
    userName: "불꽃남자카리스마",
    job: "게이머",
    address: "서울",
    hobbys: ["독서", "테니스"],
    salary: 7900000,
    age: 42,
  },
];

// 배열 고차함수
// forEach() : 배열의 요소를 순회 !
// for (user of userList) {
//   console.log(`내 이름은 ${user.userName}이구요. ${user.address}에 살아요`);
// }
// userList에 요소 하나씩 확인해줘
userList.forEach(user => {
  console.log(`제 이름은 ${user.userName}이구요. ${user.address}에 살아요.`)
});

let total = 0;
[10, 20, 30].forEach(n => {  // 배열 요소로 가능
  total += n;  // 반복할 코드
});
console.log(`total: ${total}`);

console.log('=====================================');

// filter : 조건에 맞는 배열안의 요소를 필터링 (5. 콜백활용에서 다뤄봄)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filterArray = numbers.filter(n => n % 3 === 0); //numbers를 가져와 3의 배수만 필터링한 배열
console.log(filterArray);

// 회원목록에서 이름이 3글자인 회원들을 필터링해줘
const filteredUserList = userList.filter(user => user.userName.length === 8); // 위 회원목록에서 필터링 할거야 ~
console.log(filteredUserList);

console.log('============================================');
// map : 배열에서 특정 데이터들을 추출해서 새로운 배열에 매핑 
// (위 numbers 배열에서 특정 데이터를 추출해서 새로운 배열로 매핑한겨 !!)
const mappedNumbers = numbers.map(n => n ** 2);
console.log(mappedNumbers);
//numbers.map(n => `<li class = "list-item>${n}</li>`); ---> js에서 실시간 html 만들기

// filter => 10개의 데이터를 필터링하면 10개 이하로 남음 (빠지는게 존재)
//ex) 10명 중 서울사는 애들 필터링 ! -> 3명만 남음
// map => 10개의 데이터를 매핑하면 항상 10개짜리 배열이 나옴. (빼는거 없이 다 가져오는겨 !!)
//ex) 10명의 회원정보 중 이름정보만 10개 가져와

// 회원목록에서 회원의 나이를 추출해서 xx세로 매핑 -> 모든 회원정보에서 모든 나이 가져와 !
const mappedUserAge = userList.map (user => `${user.age}세`);
console.log(mappedUserAge);

// 회원목록에서 회원 이름과 회원의 나이와 회원의 주소를 추출할건데
// 이름의 키 값을 nickName, 나이는 old, 주소는 addr로 하고 싶음 -> return 객체로 나오게 !
const mappedUserList = userList.map(user => {
  return {nickName: user.userName,
  old: user.age,
  addr: user.address}
}); //user => 10 조건으로 준 10을 배열만큼 가득 채워 !
console.log(mappedUserList);
// ----------> 깔꼼하게 쓰기 !
const mappedUserList2 = userList.map(user => 
  ({nickName: user.userName,
  old: user.age,
  addr: user.address
}));
console.log(mappedUserList2);
console.log('==================================================');

// find() : 처음 발견된 것 추출
const triple = numbers.find(n => n % 3 === 0);
console.log(`triple: ${triple}`);

const twenty = userList.find(user => user.age >= 50 && user.age < 60);
console.log(twenty);

// every() : 모든 요소가 해당하는지 <--> some() : 하나라도 존재하는지