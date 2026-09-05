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
