/* ==================================================
   UPYA NAVBAR + HERO JAVASCRIPT
================================================== */


/* ==================================================
   NAVBAR SCROLL EFFECT
================================================== */

const navbar = document.getElementById("navbar");

function updateNavbar() {

    if (window.scrollY <= 30) {

        navbar.classList.remove("scrolled");
        navbar.classList.add("top");

    } else {

        navbar.classList.add("scrolled");
        navbar.classList.remove("top");

    }
}

window.addEventListener("scroll", updateNavbar);

updateNavbar();


/* ==================================================
   MOBILE MENU
================================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* Close menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ==================================================
   HERO IMAGE SLIDESHOW
================================================== */

const heroSlides = document.querySelectorAll(".hero-slide");

let currentSlide = 0;


function nextHeroSlide() {

    heroSlides[currentSlide].classList.remove("active");

    currentSlide++;

    if (currentSlide >= heroSlides.length) {
        currentSlide = 0;
    }

    heroSlides[currentSlide].classList.add("active");
}


/* Change image every 6 seconds */

setInterval(nextHeroSlide, 6000);
