
var x = 99; // global scope : 전역 변수 (전체 끝날 때까지 유효함)
var y = true;

function foo() {
  var x = '강길동'; // local scope : 지역 변수 (해당 지역 안에서만)
  console.log(`foo x: ${x}`); // 함수 내부에 사용한 변수는 함수문이 끝나면 없어져 !!
  var y = '메롱';
  console.log(`foo y: ${y}`);

  return x; // 위 x 변수를 밖에서 사용하고 싶으면 return으로 !!
}

var y = foo();
console.log(`x: ${x}`);
console.log(`y: ${y}`);

console.log('===============================');

// 중첩 함수 : 함수 안에 함수를 정의
function outer(m) {
  var n = 'outer local n';
  var v = 'outer local v';
  console.log(n);
  console.log(v);
  console.log(m);

  // 헬퍼 함수 : 바깥쪽 함수 전용함수
  function inner () {
    console.log(n);
    var m = 'inner local m'
    console.log(m);
  }
  inner ();
}

outer('outer param m')
console.log(m);

