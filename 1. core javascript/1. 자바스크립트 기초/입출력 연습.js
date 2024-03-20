var userName = prompt(`당신의 이름은 ?`);
var userAge = prompt(`당신의 나이는 ?`); //창에 띄워주기만 하는

var years = 2024 - userAge + 1; //생년월일 구하는 변수
// var year = (`2024 - ${userAge}이시군요 ?!`); 
alert(`${userName}님은 ${years}이시군요 ?!`); //최종 알림창