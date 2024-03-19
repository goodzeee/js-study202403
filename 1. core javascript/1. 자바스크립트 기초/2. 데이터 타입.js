var num = 27;
console.log(typeof num);  //number
console.log(num / 5);  //5.4

var foodName = '훠궈';
console.log(foodName);

var element = '<nav>\n\t<ul>\n\t\t<li>딸기</li>\n\t</ul>\n</nav>'
var elem = `
<nav>
  <ul>
    <li>
      <p>안냐쎄오</p>
    </li>
  </ul>
</nav>`;
console.log(elem);

console.log('=====================================');

var month = 4;
var day = 5;
var anni = '식목일';

var sentence = month + '월' + day + '일은 ' + anni + '입니다.'
var sentence2 = `${month}월 ${day}일은 ${anni}입니다.` // 백틱 사용하여 간단히 문장 출력하기
console.log(sentence2);
console.log(`${month}월 ${day}일은 ${anni}입니다.`);

var userAge = 30;
var flag = userAge > 19;
console.log(flag);  // true (boolean 논리값)

// undefined: 아직 값이 없는 상태(고의로 값을 안넣은게 아님) , null: 고의로 값을 없앤 상태
var petName;  //아직 값을 넣지 못한 상태 undefined
console.log(petName);

var myHobby = '수영';
myHobby = null;  //원래 있었는데 없앨 때 null

function buyNewCar(money) {
  if (money > 5000) 
     return '그랜져';
  else (money <= 0) 
     return null;
}
console.log(buyNewCar(0));