
// 배열 데이터 정렬하기
const nums = [6, 11, 3, 9, 10, 5];
console.log(nums);

nums.sort((a, b) => a - b); // a가 앞에 있는 수 b가 그 뒤 수 ! 뺄셈하여 앞뒤 크기 비교
console.log(nums); // 기본 오름차순
// 버블 정렬 : 앞뒤 값 비교해서 자리 교체해가기 6 - 11, 11 - 3, 
nums.reverse();  // 내림차순 원하면 역정렬해주기 !
console.log(nums);

// 그냥 한 번에 내림차순으로 
nums.sort((a, b) => b - a); 
console.log(nums);

console.log('=================================');

const userList = [
  {
    account: 'abc1234',
    userName: '대길이',
    job: '추노',
    address: '서울',
    hobbys: ['수영', '축구', '테니스'],
    salary: 5400000,
    age: 35,
  },
  {
    account: 'banana',
    userName: '빠나나',
    job: '과일',
    address: '서울',
    hobbys: ['푸드파이팅', '테니스'],
    salary: 9700000,
    age: 18,
  },
  {
    account: 'park1234',
    userName: '주차왕',
    job: '발렛파킹',
    address: '경기',
    hobbys: ['족구', '축구', '테니스', '영화감상'],
    salary: 3900000,
    age: 56,
  },
  {
    account: 'fire',
    userName: '불꽃남자카리스마',
    job: '게이머',
    address: '서울',
    hobbys: ['독서', '테니스'],
    salary: 7900000,
    age: 42,
  },
];

// 숫자 정렬은 뺄셈으로 처리 가능 !!
// 나이 오름차
userList.sort((a, b) => a.age - b.age); // 앞뒤값 비교해서 나이 오름차순으로 정렬 !!
console.log(userList);
// 급여 내림차
userList.sort((a, b) => b.salary - a.salary);
console.log(userList);


// 이름 오름차 -> string ?? 대소 비교를 통해 ㄱ ㄴ ㄷ 
// 문자열은 ㄱ ㄴ ㄷ 뒤로 갈수록 값이 커짐 !
userList.sort((a, b) => { 
  if (a.userName > b.userName) return 1; // 뒤로 보낸다
  else if (a.userName < b.userName) return -1;
  else return 0;
});
console.log(userList);