var updown =  +prompt('1 ~ 50 사이의 무작위 숫자를 맞춰보세요.')
var randomNum = Math.floor(Math.random() * 50) + 1;
var count = 5;

while (true) {
  if (updown === randomNum) break;   
    //alert('정답입니다.')   
    //break;
  //}
  for (var n = count; n > 0; n--) {
    alert(`틀렸습니다. ${n}번에 기회가 남았습니다.`); 
    var updown = +prompt('숫자를 다시 입력하시오.');

    if (updown !== randomNum) continue;
    else if (n === 0) 
    break;
    }
    alert('game over')
}
alert('정답입니다.')