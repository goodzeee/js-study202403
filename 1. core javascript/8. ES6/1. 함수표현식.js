
/*
    # 다음과 같은 조건을 만족하는 객체를 일급객체라고 한다.

    1. 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
    2. 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
    3. 함수의 매개변수에 함수를 전달할 수 있다.
    4. 함수의 반환값으로 사용할 수 있다.
    # 자바스크립트의 함수는 위의 조건을 모두 만족하므로 
      일급 객체라 할 수 있다.
 */
// 함수 선언문 마지막에 ; 안 붙임 !
function add(n1, n2) {
  return n1 + n2;
}

const r1 = add(10, 20);
console.log(r1);

const plus = add;

// 함수도 하나의 데이터이고 값이다.
console.log(typeof plus);

const r2 = plus(5, 8);
console.log(`r2: ${r2}`);

// 익명 함수 : 함수를 값으로 본 경우
// 함수 표현식 마지막에 ; 붙임. / 함수 이름 없이 만들고 변수나 자료구조에 넣어주기 ~~
const multiply = function(n1, n2) {  // 함수명을 변수 선언명으로 줘서 값으로 설정 !
  return n1 * n2;
};
const r3 = multiply(3, 4);
console.log(r3);

// 2. 자료구조에 함수를 저장할 수 있다. add
const arr  = [
  10, 'zzz', true, [1, 3, 5], {name : '강길동'},
  add, multiply, function() {console.log('ㅋㅋㅋ');}
];
const r4 = arr[6](4, 5); // 위에 함수 정의해놓은 add, multiply를 가져와서 사용 가능 !
console.log(r4);  

console.log('=======================================');

const dog = {
  name : '초코',
  age : 3,
  favorite : ['산책, 낮잠'],
  play : function(tool) {       // 메서드 : 객체 안에 들어있는 함수 ! 가능하다.
    console.log(`${this.name} 강아지는 ${tool}을 가지고 놀아요 !`);
  }
};

const cat = {
  name : '치치',
  sleep : function() {
    console.log('쿨쿨 ZzzZ');
  }
};

dog.play('탱탱볼'); // 객체 안 함수에 값을 할당할 수 있다 !!
cat.sleep();