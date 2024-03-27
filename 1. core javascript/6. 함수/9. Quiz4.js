/*
  Q. n개의 정수를 전달하면 해당 정수들의 총합과 평균을 
     반환하는 함수 calcNumbersTotalAndAverage를 작성하세요.
*/

function calcNumbersTotalAndAverage(...numbers) {
  var total2 = 0;
  var count = 0;
  for (var n of numbers) {
    total2 += n
    count++;
  var avg2 = total2/count
  }
  //var avg2 = total2 / numbers.length
  return {total: total2,
  avg: avg2};
  // return {total, avg}; -> 이름을 같게 설정하면 키 값 불러와
}

var result = calcNumbersTotalAndAverage(90, 100, 100, 90); //360과 90이 리턴되어야 함!
console.log(`총합: ${result.total}, 평균: ${result.avg}`);