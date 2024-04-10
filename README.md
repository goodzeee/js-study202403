// ================= 전역 변수 영역 ==================== //
// 나중에 서버 연동을 위해 서버와 통신할 데이터
const todos = [
    {
        id: 1,
        text: '할 일 1',
        done: false,
    },
    {
        id: 2,
        text: '할 일 2',
        done: false,
    },
    {
        id: 3,
        text: '할 일 3',
        done: false,
    },
];


// ================= 함수 정의 영역 =================== //

// 새로운 할 일을 li 태그로 만들어서 ul에 추가하는 함수
function renderNewTodoElement({ id, text }) {
    
    // 2. li 태그 생성하기
    const $newTodoLi = document.createElement('li');
    // 2-1. 생성한 태그에 텍스트 추가하기
    //$newTodoLi.textContent = text;
    // 2-2. css가 적용 안돼서 li 태그에 클래스, data-id 추가하기
    $newTodoLi.classList.add('todo-list-item');
    $newTodoLi.dataset.id = id;
    // 2-3. li의 자식들 추가하기
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
        </div>`;

    // 3. 생성한 태그 ul에 할 일 추가한 li 태그 추가하기
    const $todoListUl = document.querySelector('.todo-list');
    $todoListUl.appendChild($newTodoLi);
}

// 입력값이 유효한지 검증
function isValidate($textInput) {
    const text = $textInput.value;
  
    // 입력값이 비었거나 10글자 이상이면 유효하지 않다.
    if (text.trim() === '' || text.length > 10) {
      $textInput.style.background = 'orangered';
      $textInput.setAttribute('placeholder', '필수 입력사항입니다 (10자 이내)');
      $textInput.value = '';
      return false;
    }
    $textInput.style.background = '';
    $textInput.setAttribute('placeholder', '할 일을 입력하세요.');
    return true;
  }

// 새로운 할 일을 추가하는 함수
function insertTodoData() {
    
    // 1. 입력한 텍스트 읽어오기
    const $todoText = document.getElementById('todo-text');
    // value를 통해 입력 텍스트 값 가져오기
    const inputText = $todoText.value;
    
    // 혹시 입력을 안하셨나요 ? 나가.
    if (!isValidate($todoText)) return;

    // 새 할 일의 아이디 값을 생성하는 함수
    const makeNewId = () => {
        // todos에서 마지막 인덱스 id 참조 (-음수 아이디는 가질 수 없으니)
        return todos.length = 0 ? 1 : todos[todos.length - 1].id + 1;
    };

    // 할 일 데이터 배열에 새로운 할 일 데이터 추가하기
    // todos 배열에 새로운 할 일을 객체로 포장해서 추가해야 함
    // 1. 새로운 할 일 데이터를 객체로 만들기
    const newTodo = {
        id: makeNewId(),
        text: inputText,
        done: false,
    };
    // 2. 배열에 추가하기
    todos.push(newTodo);

    // 새로운 할 일 요소 화면에 렌더링 함수 호출 (2, 3번)
    renderNewTodoElement(newTodo);
    
    $todoText.value = '';
}

// 배열에서 삭제된 할 일 객체를 지우는 함수
function removeTodoData(dataId) {
    // 삭제된 인덱스 가져오기
    const index = todos.findIndex(todo => todo.id === dataId);
    todos.splice(index, 1);
}

// 할 일 완료 상태 데이터 처리
function toggleDone(dataId) {
    // 체크박스 체크 및 해제시 todos 배열에 있는 특정 객체의 done 프로퍼티를
    // 반대값으로 변경해야 함.

    // 1. 클릭한 체크박스가 갖고 있던 id -> 함수 호출에 dataId 파라미터로 가져와
    // 2. 배열을 순회하여 dataId와 일치하는 id를 가진 객체 전체(find) 찾아내기
    const todo = todos.find(todo => todo.id === dataId);
    if (todo) todo.done = !todo.done; 
}

// 수정 모드 진입 처리
function toggleModifyMode($modifyBtn) {
    // 지금 수정모드 진입상태인지 수정을 해야하는 상태인지 확인
    const isModifying = $modifyBtn.classList.contains('lnr-undo');

    // 다른 항목이 이미 수정 중이면서 수정 진입모드라면 이 함수를 종료
    if (isEnterEditMode && isModifying) return;
    isEnterEditMode = isModifying;

    // 1. 수정 모드 진입
    // 1-1. span.lnr-undo를 span.lnr-checkmark-circle로 클래스 교체
    $modifyBtn.classList.toggle('lnr-undo');
    $modifyBtn.classList.toggle('lnr-checkmark-circle');

    const $label = $modifyBtn.parentElement.previousElementSibling;

    if (isModifying) {
    // 1-2. span.text를 -> input.modify-input 태그로 교체하기
    const $textSpan = $label.lastElementChild;

    const $modifyInput = document.createElement('input');
    $modifyInput.classList.add('modify-input');
    $modifyInput.setAttribute('type', 'text');
    // span.text의 텍스트를 input.modify-input에 저장
    $modifyInput.value = $textSpan.textContent;
    $label.replaceChild($modifyInput, $textspan);
    
    }else {
    // 1-2-1. 교체된 input 태그 내부에는 기존 span의 텍스트가 그대로 들어가야 함
    // 2. 수정 완료 처리
    // input.modify-input에 있는 value를 읽어서 새로운 span.text를 생성하여 교체
    const $modifyInput = $label.querySelector('.modify-input');
    const $newTextSpan = document.createElement('span');
    $newTextSpan.classList.add('text');
    $newTextSpan.textContent = $modifyInput.value;

    $label.replaceChild($newTextSpan, $modifyInput);

    // 실제 배열 데이터 수정
    // 수정하려면 클릭한 버튼 근처 li에 있는 data-id 가져와서 배열 탐색
    const dataId = +$label.parentElement.dataset.id;

    const foundTodo = todos.find(todo => todo.id === dataId);
    foundTodo.text = $newTextSpan.textContent;
    }
}

// ================== 함수 실행 영역 - 함수 호출, 이벤트 리스너 등 등록 //

// 할 일 추가 버튼 클릭 이벤트 !
document.getElementById('add').addEventListener('click', e => {
    // form의 +버튼 submit 중단하여 새로고침 없애줌. 
    e.preventDefault();
    // 추가 버튼 클릭시 해당 함수 정의 영역 실행 !
    insertTodoData();
});

// 삭제 버튼 클릭 이벤트 !
document.querySelector('.todo-list').addEventListener('click', e => {
   
    // 클릭한 버튼이 포함된 li를 탐색
    const $targetLi = e.target.closest('.todo-list-item');
    const dataId = +$targetLi.dataset.id
    
    // 내가 찍은 li -> 삭제 버튼 = e.target
    if (e.target.matches('.remove span')) {

    // 삭제 처리 진행
    // // 클릭한 버튼이 포함된 li를 탐색
    // const $targetLi = e.target.closest('.todo-list-item');
    // 화면에서 제거
    //document.querySelector('.todo-list').removeChild($targetLi);
    $targetLi.remove();

    // todos 배열에서 데이터 제거하는 함수 따로 호출
    removeTodoData(dataId); // 삭제된 li가 -> $targetLi
    // 삭제된 인덱스 아이디 가져오기 위한 ! 
    
      // 타겟이 체크 박스일 때 
    } else if (e.target.matches('.checkbox input[type=checkbox]')) {
      e.target.closest('.checkbox').classList.toggle('checked');
      // 체크 데이터 처리 함수 호출
      toggleDone(dataId);
      
      // 타겟이 수정 버튼일 때
    } else if (e.target.matches('.modify span')) {

      toggleModifyMode(e.target);
    }
});
