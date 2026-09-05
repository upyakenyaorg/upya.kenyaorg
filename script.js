/* =====================================================
   UPYA WEBSITE JAVASCRIPT
===================================================== */

const siteHeader = document.getElementById("siteHeader");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");


/* =====================================================
   MOBILE MENU
===================================================== */

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    menuToggle.classList.toggle("active");

});


/* =====================================================
   HEADER SCROLL EFFECT
===================================================== */

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        siteHeader.classList.add("scrolled");

    } else {

        siteHeader.classList.remove("scrolled");

    }

});


/* =====================================================
   CLOSE MOBILE MENU WHEN LINK IS CLICKED
===================================================== */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});
