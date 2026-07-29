// =========================
// UPYA Website Script
// =========================

// Sticky Navbar

window.addEventListener("scroll", function () {

const navbar = document.querySelector(".navbar");

if(window.scrollY > 80){

navbar.style.background="#081C2D";

navbar.style.padding="10px 0";

navbar.style.boxShadow="0 8px 20px rgba(0,0,0,.2)";

}else{

navbar.style.background="rgba(8,28,45,.92)";

navbar.style.padding="15px 0";

navbar.style.boxShadow="none";

}

});

// Smooth Scrolling

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

// Fade-in Animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.classList.add("hidden");

observer.observe(sec);

});

// Back To Top Button

const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fas fa-arrow-up"></i>';

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";

topBtn.style.bottom="25px";

topBtn.style.right="25px";

topBtn.style.width="50px";

topBtn.style.height="50px";

topBtn.style.borderRadius="50%";

topBtn.style.border="none";

topBtn.style.background="#F4B400";

topBtn.style.color="white";

topBtn.style.fontSize="20px";

topBtn.style.cursor="pointer";

topBtn.style.display="none";

topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// Animated Counter

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

counter.innerText="0";

const update=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const speed=80;

const increment=Math.ceil(target/speed);

if(count<target){

counter.innerText=count+increment;

setTimeout(update,25);

}else{

counter.innerText=target;

}

};

update();

});

// Footer Year

const year=document.getElementById("year");

if(year){

year.innerHTML=new Date().getFullYear();

}
