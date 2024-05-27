
// getDom.js에서 $pText 가져오기 : getDom.js에서 x 를 import 해서 가져옴. 
import { $pText } from './getDom.js';
//console.log($pText);
//console.log($btn);

// 이벤트 핸들러 함수 만들기
export const clickHandler = e => {
  //console.log(`x: ${x}`);
  $pText.textContent = '안뇽 ?';
};