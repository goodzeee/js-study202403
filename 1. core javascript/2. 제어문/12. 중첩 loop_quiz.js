// 가로 한 변 세로 한 변
var width = 3//+prompt('한 변(1)')
var height = 4//+prompt('한 변(2)')
var result = '';
// 3 x 4
for(var x = 0; x < width; x++ ) { //엔터
  result += '\n';     // 반복 누적시킬 변수 만들기

  for (var y = 0; y < height; y++) { //별만
    result += '*';
  }
}
console.log(result);  //최종 누적시킨거 밖에서 출력시키기