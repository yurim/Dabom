// 메인페이지 모바일 햄버거 메뉴
const mHeader = document.querySelector(".mobile_header");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener('click', e => {
    e.preventDefault();
    hamburger.classList.toggle("on");
    mHeader.classList.toggle("on");
});

// 브라우저 리사이즈 시
window.addEventListener("resize", e => {
    let wid = window.innerWidth;
    // console.log(wid);
    if(wid >= 800) mHeader.classList.remove("on");
    if(wid >= 800) hamburger.classList.remove("on");
});
