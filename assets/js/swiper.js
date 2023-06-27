
const recordSlide = new Swiper(".record_slide", {
    direction: "horizontal",
    slidesPerGroup : 1,
    slidesPerView: "3",
    spaceBetween: 20,
    loop: false,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    lazy : {
        loadPrevNext : true
    },
});
const storySlide = new Swiper(".story_slide", {
    direction: "horizontal",
    slidesPerView: 3,
    slidesPerGroup: 3,
    loopFillGroupWithBlank : true,
    spaceBetween: 20,
    loop: false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    lazy : {
        loadPrevNext : true
    },
});