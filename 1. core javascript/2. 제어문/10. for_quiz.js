
// 문제1: 입력한 정수 이하의 2의 제곱수를 가로로 출력
var n = +prompt('양의 정수를 입력하시오.');
// 제곱수를 누적할 변수
var result = ''; 

for (var i = 2; i <= n; i *= 2) {
  result += `${i} `;    //백틱으로 띄어쓰기 주기
}
  alert(result);    // 결과를 반복문 안에 넣으면 무한 반복되니 빼주기

//문제2: 1부터 입력한 정수n 까지의 모든 약수를 출력하고 개수를 출력
var n = +prompt('정수 값 : ')
var result = '';
var count = 0;

for (var i = 1; i <= n; i++) {   
  if (n % i === 0) {     //약수 개수 선별하는 조건문
    result += i + '\n';  // 줄바꿈 주는 방법
    count++;          //개수 누적 카운트 하는
  } 
}
alert(`${result}약수의 개수는 ${count}개 입니다.`)
//for문안에 쓰면 반복돼서 출력되니 밖에다 최종 출력 결과를 몰아주기

