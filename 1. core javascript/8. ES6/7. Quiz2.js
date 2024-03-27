
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


function filter(array, condition) {
  const filteredArray = []; // 필터링된 회원들을 다시 담을 배열
  for (const user of array) {
    if (condition(user)) {
      filteredArray.push(user);
    }
  }
  return filteredArray;
}

function map(array, callback) {
  const mappedArray = [];
  for (const user of array) {
    mappedArray.push(callback(user));
  }
  return mappedArray;
}

console.log('=========================');


// 회원정보에서 회원의 이름들만 다 추출해서
// 배열에 담아줘
const nameList = map(userList, user => user.userName);
console.log(nameList);

// 회원정보에서 회원의 주소들만 다 추출해서
// 배열에 담아줘
const addressList = map(userList, user => user.address);
console.log(addressList);

// 회원의 첫번째 취미들만 다 추출해줘
const firstHobbyList = map(userList, user => user.hobbys[0]);
console.log(firstHobbyList);

// 모든 회원의 이름과 계정을 연결해서 배열에 담아줘
// [ 대길이(abc1234), 빠나나(banana), ... ]
const myCustomList = map(userList, user => `${user.userName}(${user.account})`);
console.log(myCustomList);


console.log('=============================');
// 서울에 사는 급여가 400만원보다 높은 사람의 이름과 주소만 추출해줘
const filtered = filter(userList, user => user.address ==='서울' && user.salary > 4000000);
//console.log(filtered);

const mapped = map(filtered, user => {
  return {
    name: user.userName,
    addr: user.address
  }
});
console.log(mapped);


function find (condition2) {
  for (let i = 0; i < userList.length; i++) {
    if (userList[i] === userList[0]) {
      userList[i];
    }
  }
  return condition2;
}

// 서울에 사는 첫 번째 사용자를 찾는 예시
const firstUserInSeoul = find((user) => user.address === '서울');
console.log(`서울에 사는 첫 번째 사용자: `, firstUserInSeoul);

// 급여 500만원 이상인 사용자가 하나라도 있는지 확인하는 예시
const hasHighEarningUser = some((user) => user.salary >= 5000000);
console.log(`급여가 500만원 이상인 사용자: `, hasHighEarningUser);

// 모든 사용자가 '서울'에 사는지 확인하는 예시
const allUsersInSeoul = every((user) => user.address === '서울');
console.log(`모든 사용자가 서울에 사는가 ? : `, allUsersInSeoul);