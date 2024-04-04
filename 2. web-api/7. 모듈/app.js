
// getDom.js 에서 $btn 가져오기 !
import { $btn as $button } from "./getDom.js"; // 불러온 변수의 변수명을 'as $새로운 명' 으로 바꿔주기
// clickHandler도 가져오기 ! event.js에서
import { clickHandler } from "./event.js";

const $btn = 'zzz';  // 가져온 변수 $btn 변수명 충돌 발생
console.log(`btn: ${$btn}`);
console.log(`불러온 btn: $$button`);

// event.js에서 만든 이벤트 핸들러 등록하기
// 불러온 변수 바꾼 이름으로 적어주기
$button.addEventListener('click', clickHandler);