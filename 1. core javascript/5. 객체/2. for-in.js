
var phone = {
  company: '애플',
  color: '블랙',
  model: '아이폰 XS',
  price: 1800000
};

// for-in : 값이 아닌 키가 반복됨
for (var data in phone) {
  //console.log(data);
  //console.log(phone.data);
  //console.log(typeof data);
  console.log(phone[data]); // 객체 값이 출력되도록 하는 형식 !
}

// 객체 프로퍼티 유무 확인
// phone에 새로운 프로퍼티 추가하고 싶음
console.log('model' in phone); // true (없는 키 가져오면 false)

if (!('memory' in phone)) {  // 해당 객체에 키가 존재하냐 묶고 !not 붙이기 
phone.memory = '32GB'
}
console.log(phone); // 기존에 memory키가 없다면 키-값이 추가됨.