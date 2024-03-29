
const userNames = ['강길동', '박수순', '조둥짝'];

//userNames에서 각각의 요소들을 다시 변수에 집어넣고 싶다.
// const kang = userNames[0];
// const park = userNames[1];
// const jo = userNames[2];
// 위 세 줄짜리를 한 줄로 표현할 수 있다 = 구조 분해 할당 !!
const[kang, park, jo] = userNames; // 새로운 배열을 만들어서 넣어줄 기존 배열 넣어주기
console.log(`a: ${kang}, b: ${park}, c: ${jo}`);

const[kk, pp] = userNames; // 두 개만 뽑아와서 사용
console.log(`kk: ${kk}, pp: ${pp}`);

const example = ['', [], ()=>{}]
const[ , , myfunc] = example; //기존 배열에 있던 함수만 뽑아와서 사용
myfunc();

// 스왑 알고리즘
let first = 10, second = 20;
[first, second] = [second, first];

console.log(`first: ${first}, second: ${second}`); // 20 10 스왑된 결과 !

// 배열 안에서 맨 앞에 2개만 각각 변수에 저장하고
// 나머지는 다시 배열로 묶고 싶다. 
const numbers = [1, 3, 5, 7, 9, 11];
//const numsCopy = numbers.slice(); // 원본 손상돼서 카피 떠놓기

// const one = numbers.shift();
// const two = numbers.shift();

const [one, two, ...numsCopy] = numbers;  // ...나머지들 카피시키기

console.log(numsCopy); // 5, 7, 9, 11
console.log(numbers); // 원본

// 스프레드를 통한 배열 간편 복사
const foods = ['감튀', '햄버거', '제로콜라'];
//const foodsCopy = foods.slice(); // 카피본으로 사용할 거 !!
// 심플하게 복사본 만들기 -> [...원본 배열]
const foodsCopy = [...foods];

foods[0] = '치즈스틱';
foodsCopy.push('바닐라쉐이크');

console.log(foodsCopy); // 복사본
console.log(foods);  // 원본

console.log('===================================');

// 복사본에 [...원본 배열 , '새로운 요소'] 합치기 가능 !!
const newFoods = [...foods, ...foodsCopy]
console.log(newFoods);

