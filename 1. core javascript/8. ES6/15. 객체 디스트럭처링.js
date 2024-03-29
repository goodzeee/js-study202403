
const employee = {
  empName: '뽀로로',
  age : 10,
  hireDate : '2024-03-29',
  birthDate : '2010-12-31'
};
//const name = employee.empName;

// 객체 안 두 키 값만 가져와서 쓰기 위함 !
const { empName, hireDate } = employee;
console.log(`name : ${empName}, hireDate : ${hireDate}`);

// 객체 안에 있는 데이터 쉽게 가져다 쓰기
function foo({empName, age}) {
  //const {empName, age} = employee;
  console.log(`내 이름은 ${empName}입니다.`);
  console.log(`내 나이는 ${age}입니다.`);
}

const age = 10;

// age키 값을 또 쓰기 위해서 !
const {age : empAge, birthDate} = employee; // age 키명을 -> empAge 로 바꿔주기 !! 충돌 방지
console.log(empAge); // 10

const divStyle = {
  'font-size' : '18px',
  'background-color' : 'red'
};
const{'font-size' : fontSize} = divStyle; // js에서 사용할 수 있게끔 하기.
console.log(fontSize);

const dog = {
  kind : '몰티즈',
  name : '토리',
  age : 3,
  injection : false
};
const {kind, age : petAge, ...rest} = dog;
console.log(kind); // 몰티즈
console.log(petAge); // 3
console.log(rest); // 나머지 name , injection 객체

console.log('============================================');

const copyDog = {...dog};
copyDog.age = 10;

const copyDog2 = {
  ...dog,
  age : 20, // 원본 나이에서 수정
  favorite : ['산책, 공놀이'], // 새로운 키값 추가
};
console.log(copyDog2);
console.log(copyDog);
console.log(dog);

