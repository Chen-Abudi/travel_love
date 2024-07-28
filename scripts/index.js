// ─────────── Show Menu ──────────────────────────────────────────────────────────────
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

// ─────────── Remove Menu on MOBILE ─────────────────────────────────────────────────
const navLink = document.querySelectorAll(".nav__link");

function actionLink() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((nav) => nav.addEventListener("click", actionLink));

// ─────────── Modify Header Background ──────────────────────────────────────────────
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

// ─────────── Swiper Discover ───────────────────────────────────────────────────────
let swiper = new Swiper(".discover__container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 31,
  coverflowEffect: {
    rotate: 0,
  },
});

// ─── Video ─────────────────────────────────────────────────────────────────────────
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

// ─── Reveal Scrollup ──────────────────────────────────────────────────────────────
function scrollToTop() {
  const scrollToTop = document.getElementById("scroll-top");

  /* If the scroll is higher or equal to 280 
  viewport height, than add the scroll */
  if (this.scrollY >= 280) {
    scrollToTop.classList.add("reveal-scroll");
  } else {
    scrollToTop.classList.remove("reveal-scroll");
  }
}
window.addEventListener("scroll", scrollToTop);

// ─── Active Link Scrollup Sections ────────────────────────────────────────────────
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("activate-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("activate-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// ─── Light/Dark Mode ──────────────────────────────────────────────────────────────
const modeButton = document.getElementById("mode-button");
const darkMode = "dark-mode";
const iconMode = "ri-sun-line";

const chosenMode = localStorage.getItem("chosen-mode");
const chosenIcon = localStorage.getItem("chosen-icon");

const getCurrentMode = () =>
  document.body.classList.contains(darkMode) ? "dark" : "light";

const getCurrentIcon = () =>
  modeButton.classList.contains(iconMode) ? "ri-moon-line" : "ri-sun-line";

// Checking if the user has chose the mode already before
if (chosenMode) {
  /* If it's validate, will check if the dark mode was activated
  or deactivated */
  document.body.classList[chosenMode === "dark" ? "add" : "remove"](darkMode);
  modeButton.classList[chosenIcon === "ri-moon-line" ? "add" : "remove"](
    iconMode
  );
}

// Manually Activate or Deactivate mode with its button
modeButton.addEventListener("click", () => {
  // Adding or removing the dark-icon mode
  document.body.classList.toggle(darkMode);
  modeButton.classList.toggle(iconMode);
  // Saving here the user's chosen mode and its icon
  localStorage.setItem("chosen-mode", getCurrentMode());
  localStorage.setItem("chosen-icon", getCurrentIcon());
});

// ─── Animation on Revealing Scroll ───────────────────────────────────────────────
const scroll = ScrollReveal({
  distance: "60px",
  duration: 2800,
  // reset: true,
});

scroll.reveal(
  `.home__data, .home__social-link, .home__info, .discover__container,
  .explore__data, .explore__overlay, .place__card, .gallery__container,
  .footer__info, .footer__rights`,
  {
    origin: "top",
    interval: 100,
  }
);

scroll.reveal(
  `.about__img-overlay, .video__description, .subscribe__form, .gallery__title`,
  {
    origin: "right",
    interval: 100,
  }
);

scroll.reveal(
  `.about__data, .video__content, .subscribe__description, .filter__container`,
  {
    origin: "left",
  }
);

// ─── Filtering Image Gallery ───────────────────────────────────────────────
window.addEventListener("DOMContentLoaded", () => {
  const filterContainer = document.querySelector(".filter__container");
  const galleryContainer = document.querySelector(".gallery__container");

  const filterImages = (evt) => {
    document.querySelectorAll(".filter-element").forEach((element) => {
      element.classList.remove("filter-active");
    });
    evt.target.classList.add("filter-active");

    document.querySelectorAll(".gallery__img").forEach((element) => {
      if (
        (evt.target.id !== element.dataset.category) &
        (evt.target.id !== "all")
      ) {
        element.classList.add("hide-image");
      } else {
        element.classList.remove("hide-image");
      }
    });
  };

  categories.forEach((element) => {
    const domElement = document.createElement("span");
    domElement.innerText = element.name;
    domElement.classList.add("filter-element");

    if (element.filter === "all") {
      domElement.classList.add("filter-active");
    }
    domElement.id = element.filter;
    domElement.addEventListener("click", filterImages);

    filterContainer.appendChild(domElement);
  });

  images.forEach((element) => {
    const domElement = document.createElement("img");

    domElement.src = `assets/images/gallery/${element.url}`;
    domElement.alt = element.title;
    domElement.dataset.category = element.category;
    domElement.classList.add("gallery__img");

    galleryContainer.appendChild(domElement);

    domElement.addEventListener("click", () => exhibitImage(element));
  });

  // ────── Popup Image Modal ──────────────────────────────────────────
  const imageExModal = document.querySelector(".popup_type_image-ex");
  const imageExCloseButton = document.querySelector(
    ".popup__close-button_type_image_ex"
  );
  const popupImage = imageExModal.querySelector(".popup__image");

  // Adding functionality for the Popup image exhibit
  function exhibitImage(element) {
    // const popupImage = imageExModal.querySelector(".popup__image");
    const popupCaption = imageExModal.querySelector(".popup__caption");
    popupImage.src = `assets/images/gallery/${element.url}`;
    popupImage.alt = `A colorful and magnificent view of ${element.name}`;
    popupCaption.textContent = element.title;

    openModal(imageExModal);
  }

  // Functions for the popup windows
  function openModal(popup) {
    popup.classList.add("popup_receptive");
    popup.addEventListener("mousedown", closeFromOverlay);
    window.addEventListener("keydown", handleCloseByEscape);
  }

  function closeModal(popup) {
    popup.classList.remove("popup_receptive");
    popup.removeEventListener("mousedown", closeFromOverlay);
    window.removeEventListener("keydown", handleCloseByEscape);
  }

  // ────── CLOSING the POPUP Image From the OVERLAY ────────────────────────
  const closeFromOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
      const openedModal = document.querySelector(".popup_receptive");
      closeModal(openedModal);
    }
  };

  // ─────────────── The ESCAPE Key Closing the POPUP Image ──────────────────
  const handleCloseByEscape = (evt) => {
    if (evt.key === "Escape") {
      const openedModal = document.querySelector(".popup_receptive");
      closeModal(openedModal);
    }
  };

  imageExCloseButton.addEventListener("click", () => closeModal(imageExModal));
});
