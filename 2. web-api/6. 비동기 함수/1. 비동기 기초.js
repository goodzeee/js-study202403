// 비동기 : 동시에 출발하는 !!
// 비동기 함수 setTImeout
// 코드를 순서대로 진행시키는게 아닌 시간차로 진행시킬 수 있게 함.
// 순서를 자유롭게 뒤죽박죽 둘 수 있게 됨.
console.log('To Do List');
setTimeout(() => {
console.log('Rest in my house');
}, 5);
setTimeout(() => {
  for (let i = 0; i < 3; i++) {
    console.log(`hello ${i}`);
    
  }
}, 10); // 시작값에 초를 줘서 딜레이 시켜서 뒤로 가게 !
// bye 먼저 돌리고 hello 실행됨.
setTimeout(() => {
for (let i = 0; i < 4; i++) {
  console.log(`bye ${i}`);
  }
}, 0);