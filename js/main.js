/* =========== Show Navbar =========== */
const navbar = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("show");
});

window.addEventListener("scroll", () => {
    navbar.classList.remove("show");
});
/* =========== User Data =========== */

/* ========== Swiper =========== */

/* =========== Scroll Reveal ==========*/
const scroll = ScrollReveal({
    distance: "60px",
    duration: 2500,
    delay:300,
    reset: true,
});


scroll.reveal(".about-1 .col:last-child h3,.about-1  .col:last-child p,.about-1 .col:last-child row ", {
    origin: "top",
    interval: 100,
});


