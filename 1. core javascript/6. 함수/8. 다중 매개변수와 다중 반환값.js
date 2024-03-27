function add2(n1, n2) {
  return n1 + n2;
}

function add3 (n1, n2, n3) {
  return n1 + n2 + n3;
}
var r1 = add3(10, 20, 5);
console.log(r1);

console.log('===============================');

// 만약 n개의 정수 합을 구해주는 함수를 만들어야 한다면
// 파라미터에 집합 자료형을 전달한다. (배열, 객체로 !!)
function addAll(numbers, others) { // 파라미터를 하나로 !
  var total = 0;
  for (var n of numbers) {
    total += n
  }
  return total;
}

// ES6 - spread 문법
// (first, second, ...numbers) -> spread 문법 맨 뒤에 사용 가능
function addAllES6(...numbers) { // 배열 2개 묶음 이상 못 써
  console.log(numbers);
  var total = 0;
  for (var n of numbers) {  // 배열을 반복하려는 문 !
    total += n
  }
  return total;
}

// 파라미터에 모든 자료형을 넣을 수 있구나 !!
var r2 = addAll([10, 20, 5], [1, 3, 5]); // 하나의 배열로 취급해서 numbers 파라미터에 들어갈 수 있다.
console.log(`r2: ${r2}`);

var r3 = addAllES6(10, 5, 7); //spread 문법 사용해서 배열 없이 여러 인수 줄 수 있다.

console.log('=======================================');

// 다중 반환값
// 함수의 반환값은 언제나 하나다.
function arithmeticOperate(n1, n2) {
  //var addResult = n1 + n2;
  var subResult = n1 - n2;
  var multiResult = n1 * n2;
  var divResult = n1 / n2;
  return { add: add2(n1, n2),
    sub: subResult,
    multi: multiResult,
    div: divResult, // return값을 여러 개 주고 싶을 때 순서에 영향을 안받는 객체로 사용하기 !
};
} 
// 변수 재사용하지 않을건데 굳이 선언하지 마 !! return으로 바로 주기 !
function arithmeticOperate(n1, n2) {
 
  return { add: add2(n1, n2),
    sub: n1 - n2,
    multi: n1 * n2,
    div: n1 / n2,};
  }


var r3 = arithmeticOperate(20, 10);
console.log(`덧셈결과: ${r3.add}`); // 객체 키 값을 가져오기 !!
console.log(`뺄셈결과: ${r3.sub}`);
console.log(`곱셈결과: ${r3.multi}`);
console.log(`나눗셈결과: ${r3.div}`);

var r4 = arithmeticOperate(5, 4);