
// this를 조작하는 메서드

const kim = {
  name: '김철수',
  age: 17
};

const kang = {
  name: '강길동',
  age: 31
};

function sayHello(lang1, lang2) {
  console.log('this: ', this);
  console.log(`Hello I am ${this.name}, I can speak ${lang1} and ${lang2}`);
}

// ⭐ 1. call : this를 조작하기 위한 메서드
// Parma1 : 조작할 this 를 전달
// ...Param2 : 원래 해당 함수가 받아야할 파라미터를 전달
sayHello.call(kim, 'Korean', 'English');
sayHello.call(kang, 'Japanese', 'Chinese');

console.log('=============================================');

// ⭐ 2. apply : call이랑 같음, 다만 param2를 배열로 묶어서 전달
sayHello.apply(kim, ['한국어', '일본어']);

console.log('==============================================');

// ⭐ 3. bind : call, apply와 같으나
// 함수를 바로 실행시키지 않고, this를 조작한 새로운 함수를 반환
const newSayHello = sayHello.bind(kang, '중국어', '영어');

newSayHello();

// bind 실제 사용 예시 - 이벤트핸들러 함수 파라미터에 추가 다른 값을 넣고 싶을 때
const clickHandler = function(fruitName, e) {
  console.log('event 객체 : ', e);
  console.log('this : ', this);
  this.style.background = 'red';
  console.log('전달한 과일명 : ', fruitName);
};
const $input = document.getElementById('fruit');
const $btn = document.getElementById('btn');

// 방법 1
const bindedClickHandler = clickHandler.bind($btn, '레몬');
$btn.addEventListener('click', bindedClickHandler);

// this -> $btn
//$btn.addEventListener('click', clickHandler.bind($input));

// 방법 2
// 📌bind = clickHandler에 추가 파라미터를 넣어줄 수 있다
$btn.addEventListener('click', clickHandler.bind($btn, '수박'));

// 방법 3
$btn.addEventListener('click', function(name, e) {
  console.log('이름 : ', name);
}.bind($btn, '박수순'));