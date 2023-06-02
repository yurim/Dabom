// 모바일 햄버거 메뉴
const hamburger = document.querySelector(".hamburger");
const mNav = document.querySelector(".m_nav");

// // 채팅 페이지
hamburger.addEventListener('click', e => {
    e.preventDefault();
    hamburger.classList.toggle("on");
    mNav.classList.toggle("on");
});




