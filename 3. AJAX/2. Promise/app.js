
// 서버 URL
const URL = 'https://jsonplaceholder.typicode.com/posts';
const URL2 = 'http://localhost:8383/api/v1/replies/30'

// ul 태그 가져오기 - 게시물 가져와 보여주는 곳
const $postUl = document.querySelector('.posts');

// 화면에 게시물을 렌더링하는 함수
const renderPosts = postList => {
  postList.forEach(post => {
    // 게시물 하나를 li태그로 만들어서 ul에 집어넣기
    
    // 템플릿 태그 만들기 - appendChild 게시물 추가하는 작업
    const $template = document.getElementById('single-post');
    // 템플릿 태그에서 li 태그 추출 importNode !
    const $li = document.importNode($template.content, true);
    //console.log($li);
    $li.querySelector('h2').textContent = post.title;
    $li.querySelector('p').textContent = post.body;

    // 게시물 가져오는 부분에 위 내용들 append 추가하기
    $postUl.appendChild($li);
  });
};

// 서버에서 게시물 정보 받아오기
fetch(URL)
   .then(res => res.json())
   .then(json => {
    // 게시물 정보 화면에 그리기
    renderPosts(json);
   })