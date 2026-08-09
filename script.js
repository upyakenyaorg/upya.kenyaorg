/* =========================================================
   UPYA WEBSITE — JAVASCRIPT
   Uwezo Pamoja Youths Association
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       LOADER
    ========================= */

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {
        setTimeout(() => {
            if (loader) {
                loader.classList.add("hide");
            }
        }, 700);
    });


    /* =========================
       MOBILE NAVIGATION
    ========================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            navLinks.classList.toggle("show");

            const icon = menuToggle.querySelector("i");

            if (navLinks.classList.contains("show")) {

                if (icon) {
                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-xmark");
                }

            } else {

                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }

            }

        });


        /* Close menu when a link is clicked */

        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("show");

                const icon = menuToggle.querySelector("i");

                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }

            });

        });

    }


    /* =========================
       NAVBAR SCROLL EFFECT
    ========================= */

    const navbar = document.querySelector(".navbar");

    function updateNavbar() {

        if (!navbar) return;

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", updateNavbar);

    updateNavbar();


    /* =========================
       ACTIVE NAVIGATION LINK
    ========================= */

    const sections = document.querySelectorAll("section[id]");
    const navigationLinks = document.querySelectorAll(".nav-links a");

    function updateActiveLink() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navigationLinks.forEach(link => {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === `#${currentSection}`) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", updateActiveLink);

    updateActiveLink();


    /* =========================
       SCROLL REVEAL ANIMATIONS
    ========================= */

    const revealElements = document.querySelectorAll(
        ".reveal, .fade-left, .fade-right"
    );

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    /* =========================
       IMPACT COUNTERS
    ========================= */

    const counters = document.querySelectorAll(".impact-number");

    const counterObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const counter = entry.target;

                const target = parseInt(
                    counter.getAttribute("data-target"),
                    10
                );

                if (isNaN(target)) return;

                let current = 0;

                const duration = 1800;
                const startTime = performance.now();

                function animateCounter(currentTime) {

                    const progress = Math.min(
                        (currentTime - startTime) / duration,
                        1
                    );

                    current = Math.floor(
                        progress * target
                    );

                    counter.textContent = current.toLocaleString();

                    if (progress < 1) {
                        requestAnimationFrame(animateCounter);
                    } else {
                        counter.textContent =
                            target.toLocaleString() + "+";
                    }

                }

                requestAnimationFrame(animateCounter);

                observer.unobserve(counter);

            });

        },
        {
            threshold: 0.5
        }
    );

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });


    /* =========================
       SMOOTH SCROLL
    ========================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            const navbarHeight =
                navbar ? navbar.offsetHeight : 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });


    /* =========================
       SCROLL TO TOP BUTTON
    ========================= */

    const scrollTopButton =
        document.querySelector(".scroll-top");

    if (scrollTopButton) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                scrollTopButton.classList.add("show");

            } else {

                scrollTopButton.classList.remove("show");

            }

        });

        scrollTopButton.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =========================
       GALLERY LIGHTBOX
    ========================= */

    const galleryItems =
        document.querySelectorAll(".gallery-item");

    if (galleryItems.length > 0) {

        const lightbox =
            document.createElement("div");

        lightbox.className = "upya-lightbox";

        lightbox.innerHTML = `
            <button class="lightbox-close"
                    aria-label="Close image">
                &times;
            </button>

            <img src="" alt="UPYA Gallery Image">
        `;

        document.body.appendChild(lightbox);

        const lightboxImage =
            lightbox.querySelector("img");

        const closeButton =
            lightbox.querySelector(".lightbox-close");


        galleryItems.forEach(item => {

            item.addEventListener("click", () => {

                const image =
                    item.querySelector("img");

                if (!image) return;

                lightboxImage.src = image.src;

                lightbox.classList.add("show");

                document.body.style.overflow = "hidden";

            });

        });


        function closeLightbox() {

            lightbox.classList.remove("show");

            document.body.style.overflow = "";

            setTimeout(() => {
                lightboxImage.src = "";
            }, 300);

        }


        closeButton.addEventListener(
            "click",
            closeLightbox
        );


        lightbox.addEventListener(
            "click",
            event => {

                if (event.target === lightbox) {
                    closeLightbox();
                }

            }
        );


        document.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Escape" &&
                    lightbox.classList.contains("show")
                ) {
                    closeLightbox();
                }

            }
        );

    }


    /* =========================
       CONTACT FORM
    ========================= */

    const contactForm =
        document.querySelector(".contact-form");

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                const button =
                    contactForm.querySelector("button");

                if (!button) return;

                const originalText =
                    button.innerHTML;

                button.innerHTML =
                    '<i class="fas fa-spinner fa-spin"></i> Sending...';

                button.disabled = true;


                /*
                   DEMO ONLY

                   Later we can connect this form
                   to Formspree, EmailJS, PHP,
                   or another backend.
                */

                setTimeout(() => {

                    button.innerHTML =
                        '<i class="fas fa-check"></i> Message Sent';

                    contactForm.reset();

                    setTimeout(() => {

                        button.innerHTML =
                            originalText;

                        button.disabled = false;

                    }, 2500);

                }, 1200);

            }
        );

    }


    /* =========================
       HERO PARALLAX EFFECT
    ========================= */

    const hero = document.querySelector(".hero");

    if (hero) {

        window.addEventListener("scroll", () => {

            const scrollPosition =
                window.scrollY;

            if (scrollPosition < window.innerHeight) {

                const slides =
                    document.querySelectorAll(".hero-slide");

                slides.forEach(slide => {

                    slide.style.backgroundPosition =
                        `center ${50 + scrollPosition * 0.02}%`;

                });

            }

        });

    }


    /* =========================
       EVENT FILTER
    ========================= */

    const eventFilters =
        document.querySelectorAll("[data-event-filter]");

    const eventCards =
        document.querySelectorAll("[data-event-category]");

    if (
        eventFilters.length > 0 &&
        eventCards.length > 0
    ) {

        eventFilters.forEach(filter => {

            filter.addEventListener("click", () => {

                const category =
                    filter.getAttribute(
                        "data-event-filter"
                    );


                eventFilters.forEach(button => {
                    button.classList.remove("active");
                });

                filter.classList.add("active");


                eventCards.forEach(card => {

                    const cardCategory =
                        card.getAttribute(
                            "data-event-category"
                        );


                    if (
                        category === "all" ||
                        cardCategory === category
                    ) {

                        card.style.display = "";

                    } else {

                        card.style.display = "none";

                    }

                });

            });

        });

    }


    /* =========================
       CURRENT YEAR
    ========================= */

    const yearElements =
        document.querySelectorAll(".current-year");

    yearElements.forEach(element => {
        element.textContent =
            new Date().getFullYear();
    });


    /* =========================
       DONATE BUTTON
    ========================= */

    const donateButtons =
        document.querySelectorAll(
            ".donate-button, .nav-donate"
        );

    donateButtons.forEach(button => {

        button.addEventListener("click", event => {

            const target =
                document.querySelector("#donate");

            if (!target) return;

            event.preventDefault();

            const navbarHeight =
                navbar ? navbar.offsetHeight : 0;

            window.scrollTo({

                top:
                    target.offsetTop -
                    navbarHeight,

                behavior: "smooth"

            });

        });

    });


    /* =========================
       SOCIAL MEDIA EXTERNAL LINKS
    ========================= */

    document
        .querySelectorAll(".social-icons a")
        .forEach(link => {

            link.setAttribute(
                "target",
                "_blank"
            );

            link.setAttribute(
                "rel",
                "noopener noreferrer"
            );

        });


    /* =========================
       ACCESSIBILITY
    ========================= */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                navLinks &&
                navLinks.classList.contains("show")
            ) {

                navLinks.classList.remove("show");

                const icon =
                    menuToggle?.querySelector("i");

                if (icon) {

                    icon.classList.remove(
                        "fa-xmark"
                    );

                    icon.classList.add(
                        "fa-bars"
                    );

                }

            }

        }
    );


    /* =========================
       PAGE READY
    ========================= */

    document.body.classList.add("js-loaded");

    console.log(
        "UPYA website loaded successfully."
    );

});
