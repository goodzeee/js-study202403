
//==================== 전역 변수 영역 =================//

// 현재 수정모드에 진입하셨나요 ?
let isEnterEditMode = false;


// 서버와 통신할 데이터
const todos = [
  {
    id: 1,
    text: '할 일 1',
    done: false
  },
  {
    id: 2,
    text: '할 일 2',
    done: false
  },
  {
    id: 3,
    text: '할 일 3',
    done: false
  },
];

//==================== 함수 정의 영역 ==================//

// 새로운 할 일을 li태그로 만들어서 ul에 목록에 추가하는 함수
function renderNewTodoElement({ id, text }) {
  // 2. li태그 생성하기
  const $newTodoLi = document.createElement('li');

  // 2-1. 생성한 태그에 텍스트 추가하기
  // 2-2. 디자인 적용된 전체 ul 클래스와 data-id 추가하기
  $newTodoLi.classList.add('todo-list-item');
  $newTodoLi.dataset.id = id;

  // 2-3. li의 자식들 디자인 요소 추가하기 (innerHTML로 하위 태그 모두 가져오기 자식 요소 그럼 다 지워짐 주의 !)
  $newTodoLi.innerHTML = `
            <label class="checkbox">
              <input type="checkbox">
              <span class="text">${text}</span>
            </label>
            <div class="modify">
              <span class="lnr lnr-undo"></span>
            </div>
            <div class="remove">
              <span class="lnr lnr-cross-circle"></span>
            </div>
  `;
  
  // 3. 생성한 태그 ul에 추가하기
  const $todoListUl = document.querySelector('.todo-list');
  $todoListUl.appendChild($newTodoLi);

}

// 입력값이 유효한지 검증 함수
function isValidate ($textInput) {

  const text = $textInput.value; // 태그 가져와서 유효하지 않으면 나올 css 만들기
  // 입력값이 비었거나 10글자 이상이면 유효하지 않음.
  if (text.trim() === '' || text.length > 10) {
    $textInput.style.backgroundColor = 'orangered';
    $textInput.setAttribute('placeholder', '필수 입력사항입니다. (10자 이내)');
    $textInput.value = '';
    return false;  // 입력 안되게 !
  }
    $textInput.style.backgroundColor = '';
    $textInput.setAttribute('placeholder', '할 일을 입력하세요.');
    return true;
}

// 새로운 할 일을 추가하는 함수
function insertTodoData() {
  // 1. 입력한 텍스트 읽어오기
  const $todoText = document.getElementById('todo-text');
  const inputText = $todoText.value; // 추가 입력한 텍스트 값 ! 

  // 입력에0 제한둬서 목록에 추가할 수 없게 !
  if (!isValidate ($todoText)) return;

  // 새 할 일의 아이디 값을 생성하는 함수
  const makeNewId = () =>
    todos.length === 0 ? 1 : todos[todos.length - 1].id + 1;

  // 할 일 데이터 배열에 새로운 할 일 데이터 추가하기

  // todos 배열에 새로운 할일을 객체로 포장해서 추가해야 함
  // 1. 새로운 할 일 데이터를 객체로 만들기
  const newTodo = {
    id: makeNewId(),
    text: inputText,
    done: false
  };

  // 2. 배열에 추가하기
  todos.push(newTodo);

  // 새로운 할 일 화면에 렌더링하기
  renderNewTodoElement(newTodo);
  $todoText.value = '';
}

// 배열에서 삭제된 할 일 객체를 지우는 함수
function removeTodoData(dataId) {
  const index = todos.findIndex((todo) => todo.id === dataId); // 인덱스만 가져오는 것
  todos.splice(index, 1);
  console.log(todos);
}

function toggleDone(dataId) {
  // 체크박스 체크및 해제 시 todos배열에 있는 특정 객체의 done프로퍼티를
  // 반대값으로 변경해야 함

  // 1. 클릭한 체크박스가 갖고 있던 id 파라미터로 받기
  // 2. 배열을 순회하여 dataId와 일치하는 id를 가진 객체 찾아내기
  const todo = todos.find(todo => todo.id === dataId); // 객체 다 가져오는 것 find
  if (todo) todo.done = !todo.done;
}

// 수정 모드 진입 처리
function toggleModifyMode ($modifyBtn) { //modifyBtn 수정 버튼 타겟을 파라미터로 줌 !
  // 지금 수정모드 진입상태인지 수정을해야하는 상태인지 확인
  const isModifying = $modifyBtn.classList.contains('lnr-undo');
  
  // 다른 항목이 이미 수정중이면 이 함수를 종료한다.
  if (isEnterEditMode && isModifying) return;
  isEnterEditMode = isModifying;
  
  // 1. 수정 모드 진입
  // 1-1. span.lnr-undo를 span.lnr-checkmark-circle로 클래스 교체
  // $modifyBtn = <div class="modify"><span class="lnr lnr-undo"></span></div>
  $modifyBtn.classList.toggle('lnr-undo'); // 수정 버튼 아이콘 껐다 켰다 해주는 toggle
  $modifyBtn.classList.toggle('lnr-checkmark-circle');

  // 부모 태그
  const $label = $modifyBtn.parentElement.previousElementSibling;

  if (isModifying) {
  // 1-2. span.text를 input.modify-input으로 태그 교체
  // 없어질 태그
  const $textSpan = $label.lastElementChild;
  // 새롭게 들어올 태그 생성
  const $modifyInput = document.createElement('input');

  $modifyInput.classList.add('modify-input');
  $modifyInput.setAttribute('type', 'text');

  $modifyInput.value = $textSpan.textContent;
  // 부모태그.replaceChild(새롭게들어올태그, 없어질태그);
  $label.replaceChild($modifyInput, $textSpan);

} else {
  // 1-2-1. 교체된 input태그 내부에는 기존 span의 텍스트가 그대로 들어가야함
  // 2. 수정 완료 처리
  // input.modify-input에 있는 value를 읽어서 새로운 span.text를 생성하여 교체
  const $modifyInput = $label.querySelector('.modify-input');
  const $newTextSpan = document.createElement('span');
  $newTextSpan.classList.add('text');
  $newTextSpan.textContent = $modifyInput.value;

  $label.replaceChild($newTextSpan, $modifyInput);

  // 실제 배열 데이터 수정
  // 수정하려면 클릭한 버튼 근처 li에 있는 data-id가져와서 배열 탐색
  const dataId = +$label.parentElement.dataset.id

  const foundTodo = todos.find((todo) => todo.id === dataId); // 객체 다 가져오는 것 find
  foundTodo.text = $newTextSpan.textContent;
}
}

//============== 함수 실행 영역 - 함수 호출, 이벤트 리스너 등록 ===============//

// 추가 버튼 클릭 이벤트
document.getElementById('add').addEventListener('click', e => {
  e.preventDefault(); // form의 submit중단
  insertTodoData();
});

// 삭제 버튼 클릭 이벤트
document.querySelector('.todo-list').addEventListener('click', e => {
  // 클릭한 버튼이 포함된 li를 탐색 (else if에도 사용하기 위해 빼내서 공동 사용)
  const $targetLi = e.target.closest('.todo-list-item');
  // 배열에서 데이터 제거
  const dataId = +$targetLi.dataset.id;

  if (e.target.matches('.remove span'))  {//return;

  // 삭제 처리 진행
  // 화면에서 제거
  // document.querySelector('.todo-list').removeChild($targetLi);
  $targetLi.remove();

  // 배열에서 데이터 제거
  removeTodoData(dataId);

  // 체크박스 클릭시
} else if (e.target.matches('.checkbox input[type=checkbox]')) {
  // 체크박스를 클릭하면
  // 체크 화면 렌더링 처리
  e.target.closest('.checkbox').classList.add('checked');
  // 체크 데이터 처리
  toggleDone(dataId);

  // 수정 버튼 클릭시
} else if (e.target.matches('.modify span')) {

    // 수정 완료 처리
  toggleModifyMode(e.target); //'.modify span 수정 버튼을 가르킴 !
} 
});
