// ─────────── Show Menu ─────────────────────────────────────────────
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// Menu Show
// Validate if const existing
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Menu Hidden
// Validate if const existing
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// ─────────── Remove Menu on MOBILE ────────────────────────────────
const navLink = document.querySelectorAll(".nav__link");

function actionLink() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((nav) => nav.addEventListener("click", actionLink));

// ─────────── Modify Header Background ─────────────────────────────
function headerScroll() {
  const header = document.getElementById("header");
  /* When the scroll is greater than 100 viewport height, 
  add the header-scroll class to the header tag */
  if (this.scrollY >= 100) {
    header.classList.add("header-scroll");
  } else {
    header.classList.remove("header-scroll");
  }
}
window.addEventListener("scroll", headerScroll);

// ─────────── Swiper Discover ──────────────────────────────────────
let swiper = new Swiper(".discover__container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 32,
  coverflowEffect: {
    rotate: 0,
  },
});

// ─── Video ────────────────────────────────────────────────────────
const videoFile = document.getElementById("video-file"),
  videoButton = document.getElementById("video-button"),
  videoIcon = document.getElementById("video-icon");

function playPause() {
  if (videoFile.paused) {
    // Play the video
    videoFile.play();

    // Changing the Icon here
    videoIcon.classList.add("ri-pause-line");
    videoIcon.classList.remove("ri-play-line");
  } else {
    // Pause the video
    videoFile.pause();

    // Changing the Icon here
    videoIcon.classList.remove("ri-pause-line");
    videoIcon.classList.add("ri-play-line");
  }
}

videoButton.addEventListener("click", playPause);

function finiteVideo() {
  // End of video, icon's changing
  videoIcon.classList.remove("ri-pause-line");
  videoIcon.classList.add("ri-play-line");
}

// Where/when video's ending
videoFile.addEventListener("ended", finiteVideo);
