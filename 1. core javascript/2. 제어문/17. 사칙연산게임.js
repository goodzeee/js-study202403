// alert(`재밌는 사칙연산 게임\n=================`)


// var randomNum1 = Math.floor(Math.random() * 50) + 1;
// var randomNum2 = Math.floor(Math.random() * 50) + 1;
// var result = '';
// while (true) {

//   var inputNum = +prompt(`${randomNum1}+${randomNum2} = ??`)
//       result = randomNum1 + randomNum2
//     if (inputNum === result) {
//       alert('정답입니다 !')
//       break;
//   }  else if (inputNum === 0) { 
//   //else if (inputNum !== result) {
//       alert('오답입니다 !');
//       continue;
//   } else {
//     alert ('게임을 종료합니다 !');
//     break;
//   }
// }

/*
    시스템은 1~20사이의 무작위의 정수 2개를 생성하여 
    덧셈 문제를 출제해야 한다.

    사용자는 출제된 문제의 정답을 입력할 수 있어야 한다.

    시스템은 사용자의 입력값을 확인해서 정답인지 오답인지를
    알려줘야 한다.

    시스템은 지속적으로 다른 문제를 출제하여 사용자가 0을 입력할 때까지
    답을 계속 입력받고 검증해줘야 한다.
*/

// 사용자의 입력답 1.


// 실제 정답 2.

// 정답 검증 if 조건문 3. -> 정답일 때 오답일 때만 간단한 코드로

// if 사용자 입력답이 === 0 이면 break; 주기 4. 게임 종료 !

// 정답 검증 if문에 정답 카운트 & 오답 카운트 주기
// 최종 출력 alert()에 넣어주기 ! (정답 오답 횟수)

// 연산 기호를 문자열로 저장하는 변수 만들기

// 반복적으로 변하는 부분 -> 변수 써서 만들고
// 0, 1, 2 중에 하나가 생성되는 난수로 선언해주기
// switch - case - break 반복문 사용하기
// 내부에 연산 기호와 정답 = randnum1 기호 randnum2 로 넣어주기
