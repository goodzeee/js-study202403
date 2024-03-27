
//객체의 중첩구조
//예시 : 게시판

var articles = {
  totalCount: 25578,  //총 게시물 수
  admin: 'abc1234', //게시판 관리자 아이디
  page: 2558, //총 페이지 수
  articleList: [ // 게시물 목록
      {
          bno: 3, //글번호
          title: '가위바위보', //글제목
          writer: '김짱껨뽀',  //작성자
          content: '다덤벼 ^^', //글내용
          viewCount: 53, //조회수
          recomm: 10, //추천수
          regDate: '21-12-07' //작성일자
      }, 
      {
          bno: 2, //글번호
          title: '노는게', //글제목
          writer: '뽀로로',  //작성자
          content: '제일조와~~~', //글내용
          viewCount: 253, //조회수
          recomm: 11, //추천수
          regDate: '21-12-06' //작성일자
      }, 
      {
          bno: 1, //글번호
          title: '아멘', //글제목
          writer: '개신교신자',  //작성자
          content: '할렐루야', //글내용
          viewCount: 23, //조회수
          recomm: 5, //추천수
          regDate: '21-12-05' //작성일자
      }
  ]
};

console.log(articles.articleList[0]); // articleList가 배열이라 .length , [1] 인덱스 문법 사용 가능 !!
console.log(articles.articleList[2].content); // 원하는 배열 인덱스.키 이름 -> 해당 값만 출력 !!
console.log(articles.articleList[1].regDate);

console.log('=====================================');

// 모든 게시물의 작성자 이름을 전부 추출해서 반복 출력하세요.
// 배열List를 사용
for (var idx of articles.articleList) {
  console.log(idx.writer);
}

// 전부 추출해서 반복하는 형식 -> 배열 of , 객체 in 사용 !!