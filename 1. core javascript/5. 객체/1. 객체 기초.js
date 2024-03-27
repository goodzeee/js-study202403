
// 객체 생성 -> 순서가 없는 데이터 묶어두기 !!
// 우리 집 강아지 정보 저장
var name = '토토';
var kind = '몰티즈';
var age = 2;
var injection = true;
var favorite = ['산책', '공놀이'];
var bark = () => console.log('왕왕 !');
// 객체 생성 형식 (순서가 뒤바껴도 상관 없음.)
var dog = {
  name: '토토',
  kind: '몰티즈',
  age: 2,
  injection: true,
  favorite: ['산책', '공놀이'],
  bark: () => console.log('왕왕 !')
};
console.log(dog.name); // 키값인 변수명으로 값을 가져옴.

// 우리 집 고양이 정보 저장
// 객체 생성 형식 (순서가 뒤바껴도 상관 없음.)
var cat = {
  kind: '길냥이',
  name: '뚱이',
  age: 4,
  favorite: ['낮잠', '츄르'],
  injection: true,
  bark: () => console.log('애옹 !')
}; 
console.log(cat.kind);
// 객체 안에 객체 만들기 !! 객체 안에 모든 데이터 타입 사용 가능 !!
var 게시판글 = {
  글번호: 11,
  작성자: {
    닉네임: '모찌',
    계정명: 'qdnszldfn@naver.com',
    가입일자: '2023-12-13'},
  글내용: '비 조심 ~',
  작성일자: '2024-03-26'
};
console.log('========================================');

// 객체에 저장된 데이터 참조(조회)
console.log(dog.age);
console.log(cat.injection);
console.log(cat.favorite[1]); // 배열 데이터가 있다면 배열 문법으로 출력하기 !!

// 데이터 타입 : 어떤 데이터가 할 수 있는 일을 정의
dog.age++; // 숫자는 ++ 연산 지원
//dog.name++; // 문자열은 ++ 연산 불가
!dog.injection; // 논리 타입이니 -> 논리 반전 가능 !
dog.favorite.push('꼬리 흔들기'); // 안됨! push는 배열 문법임 !
cat.favorite.splice(0, 1); // 배열 타입인 favorite에 배열 문법 사용 !!

// 사본을 떠주는 concat, slice는 안 먹힘 !!
dog.favorite.slice(0).splice(1, 1).reverse();
// 이렇게 써줘야 함 !
dog.favorite.splice(1, 1);
dog.favorite.reverse();
console.log(dog.favorite);

// 객체를 참조하는 두번째 방법
console.log('====================================');

var key = 'name';
console.log(dog.name);
console.log(dog['name']); // '값'
console.log(dog[key]); // 키값

// 프로퍼티 수정 (기존에 있는 key로 접근)
console.log('======================================');

dog.age = 4;
cat.favorite[1] = '박스에 들어가기';

console.log(dog);
console.log(cat);

// 프로퍼티 동적 추가 (기존에 없는 새로운 key로 접근)
console.log('========================================');

cat.friend = '치치';

console.log(cat);

// 프로퍼티 삭제 (맨 앞에 delete만 추가 !)
delete cat.friend;

console.log(cat);