/* ==============================
   UPYA ICONS
   ============================== */

const iconStylesheet = document.createElement("link");

iconStylesheet.rel = "stylesheet";
iconStylesheet.href =
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css";

document.head.append(iconStylesheet);


/* ==============================
   UPYA HEADER
   ============================== */

const header = document.querySelector(".site-header");

if (header) {

  header.innerHTML = `
    <a class="brand" href="index.html" aria-label="UPYA home">
      <img
        src="github/1757253126804-removebg-preview - Copy.png"
        alt="Uwezo Pamoja Youths Association logo">
    </a>

    <button
      class="menu-button"
      type="button"
      aria-expanded="false"
      aria-controls="main-navigation">
      Menu
    </button>

    <nav
      id="main-navigation"
      class="main-navigation"
      aria-label="Main navigation">

      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="programmes.html">Programmes</a>
      <a href="projects.html">Projects</a>
      <a href="gallery.html">Gallery</a>
      <a href="leadership.html">Leadership</a>
      <a href="news.html">News</a>

      <a
        class="button button-gold"
        href="get-involved.html">
        Join UPYA
      </a>

    </nav>
  `;

  /* Highlight current page */

  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

  const navigationLinks =
    header.querySelectorAll(".main-navigation a");

  navigationLinks.forEach((link) => {

    const linkPage =
      link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active-page");
      link.setAttribute("aria-current", "page");
    }

  });
}


/* ==============================
   UPYA CONSTANT FOOTER
   ============================== */

const footer = document.querySelector("footer");

if (footer) {

  footer.className = "site-footer";

  footer.innerHTML = `

    <div class="footer-brand">

      <a
        class="brand"
        href="index.html"
        aria-label="UPYA home">

        <img
          src="github/1757253126804-removebg-preview - Copy.png"
          alt="Uwezo Pamoja Youths Association logo">

      </a>

      <p>
        Empowering youth, transforming communities.
      </p>

    </div>


    <div class="footer-links">

      <strong>Explore</strong>

      <a href="index.html">Home</a>

      <a href="about.html">
        About UPYA
      </a>

      <a href="programmes.html">
        Programmes
      </a>

      <a href="projects.html">
        Projects
      </a>

      <a href="gallery.html">
        Gallery
      </a>

      <a href="leadership.html">
        Leadership
      </a>

      <a href="news.html">
        News
      </a>

      <a href="get-involved.html">
        Get Involved
      </a>

    </div>


    <div class="footer-links">

      <strong>Contact</strong>

      <a href="mailto:upya.kenyaorg@gmail.com">
        upya.kenyaorg@gmail.com
      </a>

      <a href="tel:+254742717363">
        +254 742 717 363
      </a>

      <span>
        Nyamgun Junction, Seme
      </span>

    </div>


    <div
      class="socials"
      aria-label="UPYA social media">

      <a
        class="youtube"
        href="https://www.youtube.com/@upyakenya"
        aria-label="UPYA on YouTube">
        <i class="fa-brands fa-youtube"></i>
      </a>

      <a
        class="facebook"
        href="https://www.facebook.com/profile.php?id=100082027299079"
        aria-label="UPYA on Facebook">
        <i class="fa-brands fa-facebook-f"></i>
      </a>

      <a
        class="tiktok"
        href="https://www.tiktok.com"
        aria-label="UPYA on TikTok">
        <i class="fa-brands fa-tiktok"></i>
      </a>

      <a
        class="instagram"
        href="https://www.instagram.com/upya_kenya"
        aria-label="UPYA on Instagram">
        <i class="fa-brands fa-instagram"></i>
      </a>

      <a
        class="twitter"
        href="https://x.com"
        aria-label="UPYA on X">
        <i class="fa-brands fa-x-twitter"></i>
      </a>

    </div>


    <small>
      © 2026 Uwezo Pamoja Youths Association.
      All rights reserved.
    </small>

  `;
}


/* ==============================
   HEADER SCROLL EFFECT
   ============================== */

const updateHeader = () => {

  header?.classList.toggle(
    "is-scrolled",
    window.scrollY > 12
  );

};

window.addEventListener(
  "scroll",
  updateHeader,
  { passive: true }
);

updateHeader();


/* ==============================
   MOBILE NAVIGATION
   ============================== */

const menuButton =
  document.querySelector(".menu-button");

const navigation =
  document.querySelector(".main-navigation");

menuButton?.addEventListener(
  "click",
  () => {

    const isOpen =
      navigation.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuButton.textContent =
      isOpen ? "Close" : "Menu";

  }
);


/* ==============================
   HERO SLIDESHOW
   ============================== */

const slides = [
  ...document.querySelectorAll(".hero-slide")
];

const dots = [
  ...document.querySelectorAll(
    ".slide-dots button"
  )
];

let activeSlide = 0;

function showSlide(index) {

  if (!slides.length) return;

  activeSlide =
    (index + slides.length) %
    slides.length;

  slides.forEach(
    (slide, position) => {

      slide.classList.toggle(
        "active",
        position === activeSlide
      );

    }
  );

  dots.forEach(
    (dot, position) => {

      dot.classList.toggle(
        "active",
        position === activeSlide
      );

    }
  );

}

dots.forEach(
  (dot, index) => {

    dot.addEventListener(
      "click",
      () => showSlide(index)
    );

  }
);

if (slides.length > 1) {

  window.setInterval(
    () => showSlide(activeSlide + 1),
    6000
  );

}


/* ==============================
   UPYA GALLERY
   ============================== */

const galleryItems = [
  ...document.querySelectorAll(
    ".gallery-item"
  )
];

const galleryFilters = [
  ...document.querySelectorAll(
    ".gallery-filter"
  )
];

const lightbox =
  document.querySelector(
    ".gallery-lightbox"
  );

const lightboxImage =
  document.querySelector(
    ".lightbox-image"
  );

const lightboxCaption =
  document.querySelector(
    ".lightbox-caption"
  );

const lightboxClose =
  document.querySelector(
    ".lightbox-close"
  );

const lightboxPrev =
  document.querySelector(
    ".lightbox-prev"
  );

const lightboxNext =
  document.querySelector(
    ".lightbox-next"
  );

let currentGalleryIndex = 0;

let visibleGalleryItems =
  galleryItems;


/* ==============================
   OPEN GALLERY
   ============================== */

function openGallery(index) {

  if (
    !lightbox ||
    !visibleGalleryItems.length
  ) {
    return;
  }

  currentGalleryIndex = index;

  const item =
    visibleGalleryItems[
      currentGalleryIndex
    ];

  const image =
    item.querySelector("img");

  if (!image) return;

  if (lightboxImage) {

    lightboxImage.src =
      image.src;

    lightboxImage.alt =
      image.alt;

  }

  if (lightboxCaption) {

    lightboxCaption.textContent =
      item.dataset.caption ||
      image.alt ||
      "";

  }

  lightbox.classList.add("open");

  lightbox.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.style.overflow =
    "hidden";

}


/* ==============================
   CLOSE GALLERY
   ============================== */

function closeGallery() {

  if (!lightbox) return;

  lightbox.classList.remove(
    "open"
  );

  lightbox.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.style.overflow =
    "";

}


/* ==============================
   CHANGE GALLERY IMAGE
   ============================== */

function changeGalleryImage(
  direction
) {

  if (
    !visibleGalleryItems.length
  ) {
    return;
  }

  currentGalleryIndex =
    (
      currentGalleryIndex +
      direction +
      visibleGalleryItems.length
    ) %
    visibleGalleryItems.length;

  openGallery(
    currentGalleryIndex
  );

}


/* ==============================
   GALLERY ITEMS
   ============================== */

galleryItems.forEach(
  (item) => {

    item.addEventListener(
      "click",
      () => {

        const index =
          visibleGalleryItems.indexOf(
            item
          );

        openGallery(index);

      }
    );

  }
);


/* ==============================
   GALLERY FILTERS
   ============================== */

galleryFilters.forEach(
  (filter) => {

    filter.addEventListener(
      "click",
      () => {

        const category =
          filter.dataset.filter;

        galleryFilters.forEach(
          (button) => {

            button.classList.remove(
              "active"
            );

          }
        );

        filter.classList.add(
          "active"
        );

        galleryItems.forEach(
          (item) => {

            const itemCategory =
              item.dataset.category;

            if (
              category === "all" ||
              itemCategory === category
            ) {

              item.style.display = "";

            } else {

              item.style.display =
                "none";

            }

          }
        );

        visibleGalleryItems =
          galleryItems.filter(
            (item) => {

              return (
                category === "all" ||
                item.dataset.category ===
                  category
              );

            }
          );

      }
    );

  }
);


/* ==============================
   GALLERY CONTROLS
   ============================== */

lightboxClose?.addEventListener(
  "click",
  closeGallery
);

lightboxPrev?.addEventListener(
  "click",
  () => {
    changeGalleryImage(-1);
  }
);

lightboxNext?.addEventListener(
  "click",
  () => {
    changeGalleryImage(1);
  }
);


/* ==============================
   CLOSE LIGHTBOX BY BACKGROUND
   ============================== */

lightbox?.addEventListener(
  "click",
  (event) => {

    if (
      event.target === lightbox
    ) {
      closeGallery();
    }

  }
);


/* ==============================
   KEYBOARD CONTROLS
   ============================== */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      !lightbox?.classList.contains(
        "open"
      )
    ) {
      return;
    }

    if (event.key === "Escape") {
      closeGallery();
    }

    if (event.key === "ArrowLeft") {
      changeGalleryImage(-1);
    }

    if (event.key === "ArrowRight") {
      changeGalleryImage(1);
    }

  }
);
/* ==============================
   ABOUT PAGE IMPACT COUNTERS
   ============================== */

const impactNumbers = [
  ...document.querySelectorAll(".impact-number")
];

function animateImpactNumber(element) {

  const target =
    Number(element.dataset.target) || 0;

  const duration = 1800;
  const startTime = performance.now();

  function updateNumber(currentTime) {

    const elapsed =
      currentTime - startTime;

    const progress =
      Math.min(elapsed / duration, 1);

    const easedProgress =
      1 - Math.pow(1 - progress, 3);

    const currentValue =
      Math.floor(target * easedProgress);

    element.textContent =
      currentValue.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(updateNumber);
    }

  }

  requestAnimationFrame(updateNumber);
}


if (impactNumbers.length) {

  const impactObserver =
    new IntersectionObserver(
      (entries, observer) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            animateImpactNumber(
              entry.target
            );

            observer.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.4
      }
    );


  impactNumbers.forEach((number) => {
    impactObserver.observe(number);
  });

}
