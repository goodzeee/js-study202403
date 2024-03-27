/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.

- 요구사항
1. 변수에 배열 ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수']을 저장하세요.   
2. 사용자에게 삭제할 멤버 이름을 입력받고 해당 멤버를 배열에서 삭제시킨 뒤 삭제 완료 후의 배열을 출력해서 보여주세요.
3. 배열에 없는 이름을 입력하면 'xxx는 잘못된 이름입니다.'라고 출력한 후 다시 삭제할 이름을 입력할 수 있도록 하세요.
4. 전체멤버를 정확하게 삭제할때까지 프로그램은 계속되어야 합니다.
*/

// 삭제할 이름 입력 -> 배열내 요소들 중 -> 삭제한 요소 지우고 배열 출력해서 보여주기
// 요소 내 없는 이름 작성시 잘못된 이름으로 출력

// 해당 요소가 있는지 true false 유무부터 확인
var tvxq = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];
var list = [];
//var inputName = prompt(`현재 멤버 : [유노윤호, 최강창민, 영웅재중, 믹키유천, 시아준수]\n삭제할 이름을 입력하세요.`)
  
while (tvxq.length > 0) {
  var inputName = prompt(`현재 멤버 : [${tvxq}]\n삭제할 이름을 입력하세요.`)
  

  if (inputName === tvxq[0]) {
    list = tvxq.splice(0, 1);
    alert(`삭제 완료 ! \n남은 멤버 :[${tvxq}]`);
  } else if (inputName === tvxq[1]) {
    list = tvxq.splice(1, 1);
    alert(`삭제 완료 ! \n남은 멤버 : [${tvxq}]`);
  } else if (inputName === tvxq[2]) {
    list = tvxq.splice(2, 1);
    alert(`삭제 완료 ! \n남은 멤버 : [${tvxq}]`);
  } else if (inputName === tvxq[3]) {
    list = tvxq.splice(3, 1);
    alert(`삭제 완료 ! \n남은 멤버 : [${tvxq}]`);
  } else if (inputName === tvxq[4]) {
   list = tvxq.splice(4, 1);
    alert(`삭제 완료 ! \n남은 멤버 :${tvxq}`);
  } else {
    alert(`${inputName}은(는) 잘못된 이름 입니다.\n다시 입력하시와요 !`)
}
//alert(`모든 멤버가 삭제되었습니다.`);
}


/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. 변수에 배열 ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수']을 저장하세요.   
2. 사용자에게 수정할 멤버 이름과 새로운 이름을 입력받고 
  해당 멤버를 수정한 뒤 수정 완료 후의 배열을 출력해서 보여주세요.
3. 배열에 없는 이름을 입력하면 'xxx는 잘못된 이름입니다.'라고 출력한 후 
   다시 수정할 이름을 입력할 수 있도록 하세요.
4. 한 명의 멤버를 정확하게 수정할때까지 프로그램은 계속되어야 합니다.
*/

// 삭제 타겟이 있는 경우
// 인덱스오브 & 스플라이스로 반복되는 부분 지정

// 없는 경우

var tvxq = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];
var list = [];

//var deleteName = prompt(`현재 멤버 : [유노윤호, 최강창민, 영웅재중, 믹키유천, 시아준수]\n삭제할 이름을 입력하세요.`)

while (true) {

  //var deleteName = prompt(`현재 멤버 : [${tvxq}]\n삭제할 이름을 입력하세요.`);
  var modifyName = prompt(`현재 멤버 : [${tvxq}]\n수정할 이름을 입력하세요.`)

  var idx = tvxq.indexOf(modifyName);

  if (idx !== -1) {
    var newName = prompt('새로운 이름을 입력하세요.')
    tvxq[idx] = newName;
    //newName = tvxq.splice(tvxq.indexOf(idx), 0, newName)
    alert(`수정 완료 ! \n남은 멤버 : [${tvxq}]`);
    break;
  } else {
    alert(`${modifyName}은 잘못된 이름입니다. \n다시 입력하세요.`)
  }

  // if (tvxq.includes(deleteName)) {
  //   var index = tvxq.splice(tvxq.indexOf(deleteName), 1);
  //   alert(`[${tvxq}]`);
  // } else {
  //   alert(`${deleteName}은(는) 잘못된 이름 입니다.\n다시 입력하시와요 !`)
  // }
}