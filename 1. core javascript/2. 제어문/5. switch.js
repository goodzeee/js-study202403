
// var season = prompt;
var season = prompt('선호하는 계절을 입력하세요!');

// 조건을 판별할 변수(비교식 x, 문자값이나 숫자값만 가능.)
switch (season) {
  case '봄': case 'spring':
    alert('여의도로 벚꽃구경 가기');
    break;
  case '여름': case 'summer':
    alert('계곡으로 물놀이 가기');
    break;
  case '가을': case 'fall':
    alert('공원으로 단풍놀이 가기');
    break;
  case '겨울': case 'winter':
    alert('동남아로 피신 가기');
    break;
  default:
    alert('봄, 여름, 가을, 겨울 중 하나를 입력하세요 !')
}

