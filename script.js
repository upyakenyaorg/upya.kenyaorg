/* ==============================
   UPYA NAVIGATION
================================ */

function toggleMenu(){

    const nav =
        document.querySelector(".nav-links");

    nav.classList.toggle("active");

}


/* Close mobile menu after clicking */

document
    .querySelectorAll(".nav-links a")
    .forEach(function(link){

        link.addEventListener("click",function(){

            document
                .querySelector(".nav-links")
                .classList.remove("active");

        });

    });
/* =========================
   NAVBAR SCROLL EFFECT
========================= */

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
