const iconStylesheet = document.createElement("link");
iconStylesheet.rel = "stylesheet";
iconStylesheet.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css";
document.head.append(iconStylesheet);

const footer = document.querySelector("footer");

if (footer) {
  footer.className = "site-footer";
  footer.innerHTML = `
    <div>
      <a class="brand" href="index.html"><span>U</span>UPYA</a>
      <p>Empowering youth, transforming communities.</p>
    </div>
    <div class="footer-links">
      <strong>Explore</strong>
      <a href="about.html">About UPYA</a>
      <a href="programmes.html">Programmes</a>
      <a href="projects.html">Projects</a>
      <a href="gallery.html">Gallery</a>
    </div>
    <div class="footer-links">
      <strong>Contact</strong>
      <a href="mailto:upya.kenyaorg@gmail.com">upya.kenyaorg@gmail.com</a>
      <a href="tel:+254742717363">+254 742 717 363</a>
      <span>Nyamgun Junction, Seme</span>
    </div>
    <div class="socials" aria-label="UPYA social media">
      <a class="youtube" href="https://www.youtube.com/@upyakenya" aria-label="UPYA on YouTube"><i class="fa-brands fa-youtube"></i></a>
      <a class="facebook" href="https://www.facebook.com/profile.php?id=100082027299079" aria-label="UPYA on Facebook"><i class="fa-brands fa-facebook-f"></i></a>
      <a class="tiktok" href="https://www.tiktok.com" aria-label="UPYA on TikTok"><i class="fa-brands fa-tiktok"></i></a>
      <a class="instagram" href="https://www.instagram.com/upya_kenya" aria-label="UPYA on Instagram"><i class="fa-brands fa-instagram"></i></a>
      <a class="twitter" href="https://x.com" aria-label="UPYA on X"><i class="fa-brands fa-x-twitter"></i></a>
    </div>
    <small>© 2026 Uwezo Pamoja Youths Association. All rights reserved.</small>
  `;
}

const header = document.querySelector(".site-header");
const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 12);

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".main-navigation");

menuButton?.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "Close" : "Menu";
});

const slides = [...document.querySelectorAll(".hero-slide")];
const dots = [...document.querySelectorAll(".slide-dots button")];
let activeSlide = 0;

function showSlide(index) {
  activeSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, position) => slide.classList.toggle("active", position === activeSlide));
  dots.forEach((dot, position) => dot.classList.toggle("active", position === activeSlide));
}

dots.forEach((dot, index) => dot.addEventListener("click", () => showSlide(index)));

if (slides.length > 1) {
  window.setInterval(() => showSlide(activeSlide + 1), 6000);
}
