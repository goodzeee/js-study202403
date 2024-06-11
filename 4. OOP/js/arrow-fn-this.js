
// 화살표함수와 this
const dog = {
  name: '뽀삐',
  reqularFn: function() {    // this 자기 자신 객체 
    console.log('reqular: ', this);
  },
  arrowFn: () => {        // this window 객체 가져옴
    console.log('arrow: ', this);
  }
};

dog.reqularFn();
dog.arrowFn();

console.log('==================================');

const cat = {
  name: '나비',
  introduce: function() {
    console.log(`introduce this: `, this);

    // 화살표 함수의 this는 scope체인 안의 this를 가리킴 
    setTimeout(() => {
      console.log('setTimeout this: ', this);
    }, 2000);
  }
};

cat.introduce();


// this 실제 사용 예시
$modal.addEventListener('click', function(e) {  // 일반 함수 = 자기 자신
  console.log(this); // $modal
  $ok.addEventListener('click', function(e) {
    console.log(this); // $ok
  });
  
  $cancel.addEventListener('click', (e) => {  // 화살표 함수는 최상위 this 가져옴
    console.log(this); // $modal
  });
});