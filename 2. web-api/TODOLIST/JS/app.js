
// form 무조건 제출하는 이슈가 있어서 submit 걸어줘야 함.

// 1. 할 일 입력하면 일정 관리 리스트에 추가되는 !
const $addBtn = document.getElementById('add');
const $input = document.getElementById('todo-text');
const $todo_list = document.querySelector('.todo-list');

// 추가 입력될 할 일 <li> 태그 생성하고 그 <li> 를 목록에 추가해주는 함수
function makeNewToDoList(inputText) {
  const $newLi = document.createElement('li');
  $newLi.classList.add('todo-list-item');

  const $label = document.createElement('label');
  $label.classList.add('checkbox');
  $label.innerHTML = `
    <input type="checkbox">
    <span class="text">${inputText}</span>
  `;
  
  const $modifyDiv = createDiv('modify', '<span class="lnr lnr-undo"></span>');
  const $removeDiv = createDiv('remove', '<span class="lnr lnr-cross-circle"></span>');
  
  $newLi.appendChild($label);
  $newLi.appendChild($modifyDiv);
  $newLi.appendChild($removeDiv);
  
  $todo_list.appendChild($newLi);

  // 새로운 할 일 요소에 삭제 이벤트 추가
  $removeDiv.addEventListener('click', function() {
    $newLi.remove();
  });
}

function createDiv(className, innerHTML) {
  const $div = document.createElement('div');
  $div.classList.add(className);
  $div.innerHTML = innerHTML;
  return $div;
}

function addNewTodo() {
  const inputText = $input.value.trim(); // 양족의 공백을 제거
  if (inputText) {
    makeNewToDoList(inputText);
    $input.value = '';
  }
}

$addBtn.addEventListener('click', e => {
  e.preventDefault();
  addNewTodo();
});

$input.addEventListener('keyup', e => {
  if (e.key === 'Enter') {
    e.preventDefault();
    addNewTodo();
  }
});

document.querySelector('.todo-insert').addEventListener('submit', e => {
  e.preventDefault();
});

// 2. 삭제 버튼을 클릭했을 때 할 일을 삭제하는 함수
function removeToDoItem(e) {
  const $removeBtn = e.target;
  const $todoItem = $removeBtn.closest('.todo-list-item'); // 삭제 버튼의 가장 가까운 할 일 요소를 찾음
  if ($todoItem) {
    $todoItem.remove();
  }
}

// 2-1. 할 일 목록의 삭제 버튼에 이벤트 리스너 추가
document.querySelectorAll('.todo-list-item .remove').forEach($removeBtn => {
  $removeBtn.addEventListener('click', removeToDoItem);
});

// 3. modify 버튼 클릭시 수정할 수 있도록 <li> 뜨는 함수

// 3-1. 할 일 목록의 수정 버튼에 이벤트 리스너 추가



// function insertTOddData () {

// }