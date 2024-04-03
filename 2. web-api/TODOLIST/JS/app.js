
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
    $textInput.style.backgroud = 'orangered';
    $textInput.setAttribute('placeholder', '필수 입력사항입니다. (10자 이내)');
    $textInput.value = '';
    return false;  // 입력 안되게 !
  }
    $textInput.style.backgroud = '';
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
  const makeNewId = () => todos.length === 0 ? 1 : todos[todos.length - 1].id + 1;

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

}

// 배열에서 삭제된 할 일 객체를 지우는 함수
function removeTodoData(dataId) {
  const index = todos.findIndex(todo => todo.id === dataId); // 인덱스만 가져오는 것
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
function toggleModifyMode ($modifyBtn) {


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

  // 체크박스 클릭시
} else if (e.target.matches('.checkbox input[type=checkbox]')) {
  e.target.closest('.checkbox').classList.add('checked');
  toggleDone(dataId);

  // 수정 버튼 클릭시
} else if (e.target.matches('.modify span')) {
  // 수정 모드 진입
  const $todoItem = e.target.closest('.todo-list-item');
  // span.lnr-undo를 span.lnr-checkmark-circle로 클래스 교체 replace
  // 클래스 교체하기 .replace('old', 'new')
  // const $todoItem = e.target.closest('.todo-list-item');
  // span.lnr-undo를 span.lnr-checkmark-circle로 클래스 교체
  const $modify = $todoItem.querySelector('.modify span');
  $modify.classList.replace('lnr-undo', 'lnr-checkmark-circle');

  // span.text를 input.modify-input으로 태그 교체
  const $modifyInput = document.createElement('input');
  const $textSpan = $todoItem.querySelector('.text');
  
  $modifyInput.classList.add('modify-input');
  //$todoItem.replaceChild($modifyInput, $textSpan);
  $modifyInput.value = $textSpan.textContent;
  $todoItem.replaceChild($modifyInput, $textSpan);

    // 수정 완료 처리
  toggleModifyMode(e.target); //'.modify span 수정 버튼을 가르킴 !
} 
});

// 3. modify 버튼 클릭시 수정할 수 있도록 <li> 뜨는 함수

// 3-1. 할 일 목록의 수정 버튼에 이벤트 리스너 추가
