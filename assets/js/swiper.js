
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


// const storySlide = new Swiper(".story_slide", {
//     direction: "horizontal",
//     slidesPerView: 'auto',
//     spaceBetween: 10,
//     loop: true,
//     slidesOffsetAfter: '10',
//     loopAdditionalSlides: 1,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     lazy : {
//         loadPrevNext : true
//     },
// });

    const storySlide = new Swiper(".story_slide", {
            slidesPerView: 'auto',
        // spaceBetween: 10,
        rewind: true,
        loop: true,
        loopAdditionalSlides: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        lazy : {
            loadPrevNext : true
        },

    });

