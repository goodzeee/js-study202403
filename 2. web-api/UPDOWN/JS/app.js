
// =============전역 변수 정의 영역================== //
const gameData = {
  secret:Math.floor(Math.random() * 100) + 1,
  answer: null, // 사용자가 선택한 구슬의 숫자를 저장
  min: 1,
  max: 100
}
// ==================함수 정의 영역================== //
// 1. 100개의 숫자가 담긴 구슬을 화면에 그려야 함

// 하나의 구슬을 만드는 함수
function makeNewIcon ($container, i) {
  // div태그 1~100까지 구슬
  const $newDiv = document.createElement('div');
  $newDiv.classList.add('icon');
  $newDiv.textContent = i;
  // 1~100까지 담고 있는 부모에게 주기
  $container.appendChild($newDiv);
}

// 숫자가 담긴 구슬을 생성하는 함수 !
function createNumberIcons() {
  // 부모 id 생성
  const $numbersContainer = document.getElementById('numbers');

  // 기존의 1~100 아이콘들을 모두 삭제
  $numbersContainer.innerHTML = ''; // innerHTML : 자식들 다 지워지게
  
  // div태그 1~100까지 반복하여 구슬 만드는 문 !!
  const { min, max } = gameData;
  for (let i = min; i <= max; i++) {
    makeNewIcon($numbersContainer, i);

}
}

// 선택 범위 업데이트 및 아이콘 재생성
function updateRangeAndRefreshIcons(isUp) {
  const $begin = document.getElementById('bigin');
  const $end = document.getElementById('end');

  // min, max값 업데이트
  if (isUp) {
    gameData.min = gameData.answer + 1; // up일 때
    $begin.textContent = gameData.min;
  } else {
    gameData.max = gameData.answer - 1; // down일 때
    $end.textContent = gameData.max;
  }
  createNumberIcons();
}

// 정답일 때 화면 처리
// 정답 구슬 모르니 $target으로 알아오기 !
function handleCorrectAnswer ($target) {
  // 정답 화면 id=finsh에 class=show 추가 시 보이게 !
  document.getElementById('finsh').classList.add('show');
  // 정답 구슬에 id=move 부여
  $target.setAttribute('id', 'move')
  // 구슬 클릭 이벤트 해제
  document.getElementById('numbers').removeEventListener('click', iconClickHandler);
}

// ================답변 검증 및 처리================= //
function verifyAnswer($target) {
  const {secret, answer} = gameData;

  if (secret === answer) { // 정답인 경우
    // 정답 애니메이션 처리
    handleCorrectAnswer();

  } else { // 정답이 아닌 경우(up or down) 두 가지 경우만 있으니 삼항 연산자로 간단히 !!
    const isUp = secret > answer;
    document.getElementById(isUp ? 'up' : 'down').classList.add('selected');
    document.getElementById(isUp ? 'down' : 'up').classList.remove('selected');
    // 정답 범위 밖의 구슬들을 제거하고 새롭게 구슬을 렌더링

    updateRangeAndRefreshIcons(isUp); // 업다운인지 알고 있는 함수에 넣어주기 !!
  }
}

iconClickHandler();

// 구슬 클릭 이벤트 핸들러
function iconClickHandler(e) {
  if (!e.target.matches('#numbers .icon')) return;

  // 클릭한 구슬의 숫자가 정답과 비교해서 up인지 down인지 정답인지 판별
  // 클릭한 구슬의 숫자를 gameData.answer에 저장 !
  gameData.answer = +e.target.textContent;
  //console.log(gameData);
  //console.log(e.target.textContent);
  verifyAnswer(e.target); // 애는 클릭시 정답 타켓 아니까 이렇게 넣어줌 !
}

// ===================함수 실행 영역================= //
createNumberIcons();
// 1~100까지 구슬 담고 있는 부모에게 클릭 이벤트 주기 !
document.getElementById('numbers').addEventListener('click', (e) => {
  
  // if (!e.target.matches('#numbers .icon')) return;

  // // 클릭한 구슬의 숫자가 정답과 비교해서 up인지 down인지 정답인지 판별
  // // 클릭한 구슬의 숫자를 gameData.answer에 저장 !
  // gameData.answer = +e.target.textContent;
  // //console.log(gameData);
  // //console.log(e.target.textContent);
  // verifyAnswer(e.target); // 애는 클릭시 정답 타켓 아니까 이렇게 넣어줌 !
});