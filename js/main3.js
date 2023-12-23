const owl = $(".owl-carousel");

owl.owlCarousel({
    dots: false,

    responsive: {
        0: {
            items: 2,
            margin: 150,
        },
        375: {
            items: 2,
            margin: 48,

            loop: true,
        },
        460: {
            margin: 48,
            items: 3,
            loop: true,
        },
    },
});

/* VIDEO */

const videoBtn = document.querySelector("#video-btn");
const videoPicture = document.querySelector(".video__picture");
const videoWrapper = document.querySelector(".video");
const video = document.querySelector("#video-file");

/*videoBtn.addEventListener("click", function () {
    videoBtn.classList.add("none");
    videoPicture.classList.add("none");
    videoWrapper.classList.remove("video-overlay");

    if (video.paused) {
        video.play();
    }
}); */

videoWrapper.addEventListener("click", function () {
    if (video.paused) {
        video.play();
        videoBtn.classList.add("none");
        videoPicture.classList.add("none");
        videoWrapper.classList.remove("video-overlay");
    } else {
        video.pause();
        videoPicture.classList.remove("none");
        videoBtn.classList.remove("none");
        videoWrapper.classList.add("video-overlay");
    }
});

/* MOBILE */

const mobileBtn = document.querySelector(".button-mobile");
const navMobile = document.querySelector(".nav-mobile");
const mobileBtnClose = document.querySelector(".button-close-mobile");

mobileBtn.onclick = function () {
    navMobile.classList.remove("none");
    mobileBtn.classList.add("none");
    mobileBtnClose.classList.remove("none");
    // document.body.classList.add("no-scroll");
};

mobileBtnClose.onclick = function () {
    navMobile.classList.add("none");
    mobileBtnClose.classList.add("none");
    mobileBtn.classList.remove("none");
    // document.body.classList.remove("no-scroll");
};
