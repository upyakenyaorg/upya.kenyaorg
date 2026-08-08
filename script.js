/* =========================================================
   UPYA WEBSITE JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       PRELOADER
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

    const menuBtn = document.querySelector(".menu-btn");
    const nav = document.querySelector(".navbar nav");

    if (menuBtn && nav) {

        menuBtn.addEventListener("click", () => {

            nav.classList.toggle("active");

            const icon = menuBtn.querySelector("i");

            if (icon) {

                if (nav.classList.contains("active")) {
                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-xmark");
                } else {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }

            }

        });

    }


    /* =========================
       CLOSE MOBILE MENU
       ========================= */

    document.querySelectorAll(".navbar nav a").forEach(link => {

        link.addEventListener("click", () => {

            if (nav) {
                nav.classList.remove("active");
            }

            const icon = menuBtn?.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        });

    });


    /* =========================
       NAVBAR SCROLL EFFECT
       ========================= */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (!navbar) return;

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(7, 26, 61, 0.97)";

            navbar.style.boxShadow =
                "0 8px 30px rgba(0,0,0,.15)";

        } else {

            navbar.style.background =
                "rgba(7, 26, 61, 0.88)";

            navbar.style.boxShadow =
                "none";

        }

    });


    /* =========================
       ACTIVE NAVIGATION LINK
       ========================= */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(".navbar nav a");

    function updateActiveLink() {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            const href =
                link.getAttribute("href");

            if (href === "#" + current) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener(
        "scroll",
        updateActiveLink
    );

    updateActiveLink();


    /* =========================
       ANIMATED COUNTERS
       ========================= */

    const counters =
        document.querySelectorAll("[data-count]");

    const counterObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting)
                        return;

                    const counter =
                        entry.target;

                    const target =
                        Number(
                            counter.dataset.count
                        );

                    let current = 0;

                    const duration = 1800;

                    const increment =
                        target / (duration / 16);

                    function updateCounter() {

                        current += increment;

                        if (current < target) {

                            counter.textContent =
                                Math.floor(current);

                            requestAnimationFrame(
                                updateCounter
                            );

                        } else {

                            counter.textContent =
                                target + "+";

                        }

                    }

                    updateCounter();

                    counterObserver.unobserve(counter);

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
       SCROLL REVEAL
       ========================= */

    const revealElements =
        document.querySelectorAll(
            ".program-card, .event-card, .mv-card, .impact-item"
        );

    revealElements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(30px)";

        element.style.transition =
            "opacity .7s ease, transform .7s ease";

    });

    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting)
                        return;

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    revealObserver.unobserve(
                        entry.target
                    );

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
       SMOOTH SCROLL
       ========================= */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            const navbarHeight =
                navbar
                    ? navbar.offsetHeight
                    : 0;

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
       CURRENT YEAR
       ========================= */

    const year =
        document.getElementById("year");

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }


    /* =========================
       ESCAPE KEY
       ========================= */

    document.addEventListener("keydown", event => {

        if (
            event.key === "Escape" &&
            nav
        ) {

            nav.classList.remove("active");

            const icon =
                menuBtn?.querySelector("i");

            if (icon) {

                icon.classList.remove(
                    "fa-xmark"
                );

                icon.classList.add(
                    "fa-bars"
                );

            }

        }

    });

});
