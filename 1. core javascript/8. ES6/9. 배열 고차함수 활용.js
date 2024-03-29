
const appleBasket = [{
  color: 'green',
  sweet: 13
},
{
  color: 'red',
  sweet: 14
},
{
  color: 'red',
  sweet: 11
},
{
  color: 'green',
  sweet: 6
},
{
  color: 'green',
  sweet: 7
},
{
  color: 'green',
  sweet: 9
},
];

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

// 사과 중에 녹색이면서 당도가 9 이상인 사과만 선별하여 -> filtering
// '이 사과는 xx색이며 당도는 xxx 입니다'.라는 문자열이 들어있는 배열을 만들어주세요. -> mapping
// + 반복 출력해주세요. -> forEach()
// filter로 선별하고 map으로 선별한 거 전체 추출하는 순서
const filteredApples = appleBasket.filter(apple => apple.color === 'green' && apple.sweet >= 9);
console.log(filteredApples);

const mappedApples = filteredApples.map(apple => {
  const covertedColor = apple.color === 'green' ? '초록' : '빨강';
  return `이 사과는 ${covertedColor}색이며 당도는 ${apple.sweet}입니다.`;
});
console.log(mappedApples);

// 반복 출력 !
mappedApples.forEach(apple => console.log(apple));
// ----------> 연계해서 묶어서 간략하게
appleBasket
  .filter(apple => apple.color === 'green' && apple.sweet >= 9)
  .map(apple => {
    const covertedColor = apple.color === 'green' ? '초록' : '빨강';
    return `이 사과는 ${covertedColor}색이며 당도는 ${apple.sweet}입니다.`;
  })
  .forEach(apple => console.log(apple));

  // 회원목록에서 서울에 사는 회원들의 두번째 취미만 추출하여
  // xxx님의 2번째 취미는 xxx 입니다. 를 반복해서 출력하라.
userList
   .filter(user => user.address === '서울')  // 서울인 사람 골라내는 필터링
   .map(user => ( {name: user.userName, second: user.hobbys[1]} ))  // 두번째 취미만 추출
   .forEach(result => console.log(`${result.name}님의 2번째 취미는 ${result.second} 입니다.`)); // map에서 나온 결과 반복해서 보여주는거야

/*
    userList [
      {all}, {all}, {all}, {all}  - filter당시 user == {all} 
    ]
    filter [
      {all}, {all}, {all} -- map당시 
    map [
      {이름, 취미2}, {이름, 취미2}, {이름, 취미2} - forEach당시 result == {이름, 취미2}
    ]
    forEach
    {이름, 취미2}
    {이름, 취미2}
    {이름, 취미2}
*/
