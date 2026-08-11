// =========================
// UPYA WEBSITE SCRIPT
// =========================

// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function(){

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});
// ===============================
// UPYA IMPACT COUNTERS
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const counters = document.querySelectorAll(".counter");

    const startCounter = (counter) => {

        const target = parseInt(counter.getAttribute("data-target"));

        let number = 0;

        const duration = 2000;
        const startTime = performance.now();

        function updateCounter(currentTime) {

            const elapsed = currentTime - startTime;

            const progress = Math.min(elapsed / duration, 1);

            number = Math.floor(progress * target);

            counter.textContent = number;

            if (progress < 1) {

                requestAnimationFrame(updateCounter);

            } else {

                counter.textContent = target + "+";

            }

        }

        requestAnimationFrame(updateCounter);
    };


    const impactSection = document.querySelector("#impact");

    if (!impactSection) {
        console.log("Impact section not found");
        return;
    }


    let started = false;


    const observer = new IntersectionObserver(function(entries) {

        if (entries[0].isIntersecting && !started) {

            started = true;

            counters.forEach(function(counter) {

                startCounter(counter);

            });

            observer.disconnect();

        }

    }, {

        threshold: 0.3

    });


    observer.observe(impactSection);

});

// =========================
// Fade Up Animation
// =========================

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

});

document.querySelectorAll(".fade-up").forEach(el=>{

observer.observe(el);

});

// =========================
// Gallery Lightbox
// =========================

const gallery = document.querySelectorAll(".gallery-img");

gallery.forEach(img=>{

img.addEventListener("click",()=>{

const lightbox = document.createElement("div");

lightbox.style.position="fixed";

lightbox.style.top="0";

lightbox.style.left="0";

lightbox.style.width="100%";

lightbox.style.height="100%";

lightbox.style.background="rgba(0,0,0,.9)";

lightbox.style.display="flex";

lightbox.style.justifyContent="center";

lightbox.style.alignItems="center";

lightbox.style.zIndex="99999";

lightbox.innerHTML=`

<img src="${img.src}"

style="max-width:90%;

max-height:90%;

border-radius:15px;">`;

document.body.appendChild(lightbox);

lightbox.onclick=()=>{

lightbox.remove();

}

});

});

// =========================
// Back To Top
// =========================

const topBtn=document.querySelector('.fa-arrow-up').parentElement;

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="flex";

}

else{

topBtn.style.display="none";

}

});

// =========================
// Smooth Scroll
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// =========================
// Mobile Menu Close
// =========================

const navLinks=document.querySelectorAll(".nav-link");

const menu=document.querySelector(".navbar-collapse");

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

if(menu.classList.contains("show")){

new bootstrap.Collapse(menu).toggle();

}

});

});

// =========================
// Dark Mode
// =========================

const darkBtn=document.createElement("button");

darkBtn.innerHTML='<i class="fas fa-moon"></i>';

darkBtn.className="btn btn-dark";

darkBtn.style.position="fixed";

darkBtn.style.bottom="160px";

darkBtn.style.right="20px";

darkBtn.style.zIndex="999";

darkBtn.style.borderRadius="50%";

darkBtn.style.width="55px";

darkBtn.style.height="55px";

document.body.appendChild(darkBtn);

darkBtn.onclick=()=>{

document.body.classList.toggle("dark-mode");

};

// =========================
// Current Year
// =========================

const year=document.getElementById("year");

if(year){

year.innerHTML=new Date().getFullYear();

}

// =========================
// Welcome Message
// =========================

console.log("Welcome to UPYA Website");
// Animated Counter

const counters = document.querySelectorAll(".counter");

const speed = 80;

counters.forEach(counter=>{

function update(){

const target = +counter.getAttribute("data-target");

const count = +counter.innerText;

const increment = Math.ceil(target/speed);

if(count < target){

counter.innerText = count + increment;

setTimeout(update,20);

}else{

counter.innerText = target + "+";

}

}

update();

});
// ================= HERO SLIDESHOW =================

const heroSlides = document.querySelectorAll(".hero-slide");
const heroDots = document.querySelectorAll(".hero-dot");

let currentHeroSlide = 0;
let heroTimer;

function showHeroSlide(index){

    heroSlides.forEach(slide => {
        slide.classList.remove("active");
    });

    heroDots.forEach(dot => {
        dot.classList.remove("active");
    });

    heroSlides[index].classList.add("active");

    if(heroDots[index]){
        heroDots[index].classList.add("active");
    }

    currentHeroSlide = index;
}

function nextHeroSlide(){

    let next = currentHeroSlide + 1;

    if(next >= heroSlides.length){
        next = 0;
    }

    showHeroSlide(next);
}

function startHeroSlideshow(){

    heroTimer = setInterval(nextHeroSlide, 6000);

}

function stopHeroSlideshow(){

    clearInterval(heroTimer);

}

heroDots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        stopHeroSlideshow();

        showHeroSlide(index);

        startHeroSlideshow();

    });

});

if(heroSlides.length > 0){

    showHeroSlide(0);

    startHeroSlideshow();

}
