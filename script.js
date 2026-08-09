// =========================
// UPYA WEBSITE SCRIPT
// =========================

// Loading Screen
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1200);
});

// =========================
// Navbar Background
// =========================

window.addEventListener("scroll", () => {

    const nav = document.querySelector(".navbar");

    if (window.scrollY > 80) {

        nav.style.background = "#0F4C81";

        nav.style.boxShadow = "0 10px 25px rgba(0,0,0,.2)";

    } else {

        nav.style.background = "rgba(15,76,129,.88)";

        nav.style.boxShadow = "none";

    }

});

// =========================
// Counter Animation
// =========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const update = () => {

        const target = +counter.dataset.target;

        const count = +counter.innerText;

        const speed = target / 120;

        if(count < target){

            counter.innerText = Math.ceil(count + speed);

            setTimeout(update,20);

        }

        else{

            counter.innerText = target + "+";

        }

    }

    update();

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
