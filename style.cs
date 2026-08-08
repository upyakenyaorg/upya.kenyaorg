/* =========================================================
   UPYA PROFESSIONAL WEBSITE
   Uwezo Pamoja Youths Association
   ========================================================= */


/* =========================
   ROOT / COLOURS
   ========================= */

:root {

  --navy: #071A3D;
  --navy-light: #0D2A5C;

  --blue: #1455C0;
  --blue-light: #2D72E8;

  --green: #087443;
  --green-dark: #04552F;

  --gold: #F4C430;
  --gold-light: #FFD95A;

  --white: #FFFFFF;
  --off-white: #F7F9FC;

  --text: #182230;
  --muted: #667085;

  --border: #E5EAF1;

  --shadow:
    0 15px 45px rgba(7, 26, 61, 0.10);

  --shadow-large:
    0 25px 70px rgba(7, 26, 61, 0.16);

}


/* =========================
   RESET
   ========================= */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {

  font-family: "DM Sans", sans-serif;

  color: var(--text);

  background:
    linear-gradient(
      180deg,
      #ffffff 0%,
      #f7f9fc 100%
    );

  line-height: 1.7;

  overflow-x: hidden;

}

img {
  max-width: 100%;
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  font-family: inherit;
}


/* =========================
   CONTAINER
   ========================= */

.container {

  width: min(1180px, 92%);

  margin: auto;

}


/* =========================
   PRELOADER
   ========================= */

#loader {

  position: fixed;

  inset: 0;

  z-index: 99999;

  background:
    linear-gradient(
      135deg,
      var(--navy),
      var(--green-dark)
    );

  display: flex;

  flex-direction: column;

  justify-content: center;

  align-items: center;

  color: white;

  transition:
    opacity .6s ease,
    visibility .6s ease;

}

#loader.hide {

  opacity: 0;

  visibility: hidden;

}

.loader-logo {

  font-family: "Montserrat", sans-serif;

  font-size: 48px;

  font-weight: 800;

  letter-spacing: 5px;

  color: var(--gold);

  animation: loaderPulse 1.5s infinite;

}

.loader-line {

  width: 150px;

  height: 3px;

  margin: 15px 0;

  background:
    linear-gradient(
      90deg,
      transparent,
      var(--gold),
      transparent
    );

  animation: loaderMove 1.5s infinite;

}

#loader p {

  font-size: 13px;

  letter-spacing: 1px;

  opacity: .8;

}

@keyframes loaderPulse {

  0%,100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.08);
  }

}

@keyframes loaderMove {

  0% {
    transform: scaleX(.3);
    opacity: .4;
  }

  50% {
    transform: scaleX(1);
    opacity: 1;
  }

  100% {
    transform: scaleX(.3);
    opacity: .4;
  }

}


/* =========================
   NAVIGATION BAR
   ========================= */

.navbar {

  position: fixed;

  top: 0;
  left: 0;

  width: 100%;

  height: 82px;

  z-index: 9999;

  padding: 0 4%;

  display: flex;

  align-items: center;

  justify-content: space-between;

  background:
    rgba(7, 26, 61, .88);

  backdrop-filter: blur(16px);

  border-bottom:
    1px solid rgba(255,255,255,.08);

  transition:
    .3s ease;

}


/* LOGO */

.logo {

  display: flex;

  align-items: center;

  gap: 12px;

  color: white;

}

.logo img {

  width: 52px;

  height: 52px;

  object-fit: contain;

}

.logo strong {

  display: block;

  font-family: "Montserrat", sans-serif;

  font-size: 22px;

  letter-spacing: 1px;

  color: var(--gold);

}

.logo small {

  display: block;

  font-size: 9px;

  letter-spacing: .5px;

  opacity: .75;

}


/* NAV LINKS */

.navbar nav {

  display: flex;

  align-items: center;

  gap: 5px;

}

.navbar nav a {

  position: relative;

  color: white;

  font-size: 13px;

  font-weight: 600;

  padding: 9px 12px;

  border-radius: 6px;

  transition: .3s ease;

}

.navbar nav a::after {

  content: "";

  position: absolute;

  left: 12px;
  right: 12px;

  bottom: 4px;

  height: 2px;

  background: var(--gold);

  transform: scaleX(0);

  transform-origin: center;

  transition: .3s ease;

}

.navbar nav a:hover {

  color: var(--gold);

}

.navbar nav a:hover::after {

  transform: scaleX(1);

}


/* DONATE BUTTON */

.nav-donate {

  background:
    linear-gradient(
      135deg,
      var(--gold),
      var(--gold-light)
    ) !important;

  color: var(--navy) !important;

  margin-left: 8px;

  padding: 10px 17px !important;

  border-radius: 30px !important;

  font-weight: 800 !important;

  box-shadow:
    0 8px 20px rgba(244,196,48,.2);

}

.nav-donate::after {
  display: none;
}

.nav-donate:hover {

  transform: translateY(-2px);

  color: var(--navy) !important;

}


/* MOBILE MENU */

.menu-btn {

  display: none;

  border: none;

  background: none;

  color: white;

  font-size: 25px;

  cursor: pointer;

}


/* =========================
   HERO
   ========================= */

.hero {

  min-height: 100vh;

  position: relative;

  display: flex;

  align-items: center;

  overflow: hidden;

  background:

    linear-gradient(
      120deg,
      var(--navy),
      var(--green-dark)
    );

}


/* Animated background */

.hero::before {

  content: "";

  position: absolute;

  inset: 0;

  background-image:

    linear-gradient(
      rgba(7,26,61,.60),
      rgba(4,85,47,.65)
    ),

    url("images/hero-1.jpg");

  background-size: cover;

  background-position: center;

  animation:
    heroZoom 16s ease-in-out infinite alternate;

}

@keyframes heroZoom {

  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.10);
  }

}


/* COLOUR GLOW */

.hero::after {

  content: "";

  position: absolute;

  width: 600px;

  height: 600px;

  right: -250px;

  bottom: -300px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(244,196,48,.30),
      transparent 65%
    );

  animation:
    glowMove 8s ease-in-out infinite alternate;

}

@keyframes glowMove {

  from {
    transform: translate(0,0);
  }

  to {
    transform: translate(-100px,-80px);
  }

}


/* HERO CONTENT */

.hero-content {

  position: relative;

  z-index: 2;

  width: min(850px, 90%);

  margin-left: 8%;

  padding-top: 70px;

  color: white;

}

.hero-tag {

  display: inline-flex;

  align-items: center;

  gap: 8px;

  color: var(--gold);

  font-size: 12px;

  font-weight: 800;

  letter-spacing: 2px;

  margin-bottom: 20px;

}

.hero-tag i {

  font-size: 7px;

  animation: blink 1.5s infinite;

}

@keyframes blink {

  0%,100% {
    opacity: 1;
  }

  50% {
    opacity: .2;
  }

}

.hero h1 {

  font-family:
    "Montserrat",
    sans-serif;

  font-size:
    clamp(42px, 6vw, 78px);

  line-height: 1.05;

  font-weight: 800;

  letter-spacing: -2px;

  margin-bottom: 25px;

}

.hero h1 span {

  color: var(--gold);

}

.hero p {

  max-width: 690px;

  font-size: 17px;

  line-height: 1.8;

  color:
    rgba(255,255,255,.88);

  margin-bottom: 32px;

}


/* HERO BUTTONS */

.hero-buttons {

  display: flex;

  gap: 14px;

  flex-wrap: wrap;

}


/* BUTTON */

.btn {

  display: inline-flex;

  align-items: center;

  justify-content: center;

  gap: 10px;

  padding: 14px 24px;

  border-radius: 8px;

  font-weight: 800;

  font-size: 14px;

  transition:
    .3s ease;

}

.btn-gold {

  color: var(--navy);

  background:
    linear-gradient(
      135deg,
      var(--gold),
      var(--gold-light)
    );

  box-shadow:
    0 12px 30px rgba(244,196,48,.22);

}

.btn-gold:hover {

  transform:
    translateY(-4px);

  box-shadow:
    0 18px 35px rgba(244,196,48,.3);

}

.btn-outline {

  color: white;

  border:
    1px solid rgba(255,255,255,.5);

  background:
    rgba(255,255,255,.05);

}

.btn-outline:hover {

  background: white;

  color: var(--navy);

  transform:
    translateY(-4px);

}


/* HERO STATS */

.hero-stats {

  display: flex;

  gap: 45px;

  margin-top: 55px;

}

.hero-stats div {

  display: flex;

  flex-direction: column;

}

.hero-stats strong {

  font-family: "Montserrat";

  font-size: 26px;

  color: var(--gold);

}

.hero-stats span {

  font-size: 11px;

  color:
    rgba(255,255,255,.7);

}


/* SCROLL */

.scroll-down {

  position: absolute;

  right: 5%;

  bottom: 30px;

  z-index: 3;

  color: white;

  display: flex;

  align-items: center;

  gap: 10px;

  font-size: 11px;

  letter-spacing: 1px;

  opacity: .7;

}

.scroll-down i {

  color: var(--gold);

  animation:
    bounce 1.5s infinite;

}

@keyframes bounce {

  0%,100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(6px);
  }

}


/* =========================
   SECTIONS
   ========================= */

.section {

  padding:
    110px 0;

}

.section-heading {

  max-width: 750px;

  margin-bottom: 55px;

}

.section-heading.center {

  text-align: center;

  margin-left: auto;

  margin-right: auto;

}

.section-heading > span,
.impact-heading > span,
.membership-box span {

  color: var(--green);

  font-size: 12px;

  font-weight: 800;

  letter-spacing: 2px;

}

.section-heading h2,
.impact-heading h2 {

  font-family:
    "Montserrat",
    sans-serif;

  font-size:
    clamp(32px, 4vw, 48px);

  line-height: 1.15;

  margin:
    12px 0 18px;

  color: var(--navy);

}

.section-heading h2 em {

  color: var(--green);

  font-style: normal;

}

.section-heading p {

  color: var(--muted);

  font-size: 16px;

}


/* =========================
   ABOUT
   ========================= */

.about {

  background: white;

}

.about-grid {

  display: grid;

  grid-template-columns:
    1fr 1fr;

  gap: 70px;

  align-items: center;

}

.about-image {

  position: relative;

}

.about-image img {

  width: 100%;

  height: 480px;

  object-fit: cover;

  border-radius: 18px;

  box-shadow:
    var(--shadow-large);

}

.experience-card {

  position: absolute;

  bottom: -25px;

  right: -25px;

  background: var(--gold);

  color: var(--navy);

  padding: 22px 28px;

  border-radius: 12px;

  box-shadow: var(--shadow);

}

.experience-card strong {

  display: block;

  font-family: "Montserrat";

  font-size: 24px;

}

.experience-card span {

  font-size: 12px;

  font-weight: 600;

}

.about-content h3 {

  font-family: "Montserrat";

  color: var(--navy);

  margin-bottom: 12px;

}

.about-content > p {

  color: var(--muted);

  margin-bottom: 30px;

}


/* MISSION / VISION */

.mission-vision {

  display: grid;

  gap: 15px;

}

.mv-card {

  display: flex;

  gap: 18px;

  padding: 20px;

  border: 1px solid var(--border);

  border-radius: 12px;

  background: var(--off-white);

  transition: .3s ease;

}

.mv-card:hover {

  transform:
    translateX(5px);

  border-color:
    var(--gold);

}

.mv-icon {

  min-width: 48px;

  height: 48px;

  display: grid;

  place-items: center;

  border-radius: 10px;

  color: var(--green);

  background:
    rgba(8,116,67,.1);

  font-size: 19px;

}

.mv-card h4 {

  font-family: "Montserrat";

  color: var(--navy);

  margin-bottom: 4px;

}

.mv-card p {

  color: var(--muted);

  font-size: 13px;

}

.values-title {

  margin-top: 30px;

}

.values {

  display: flex;

  flex-wrap: wrap;

  gap: 8px;

}

.values span {

  padding: 7px 12px;

  border-radius: 30px;

  background: #EEF4FF;

  color: var(--blue);

  font-size: 12px;

  font-weight: 700;

}


/* =========================
   PROGRAMS
   ========================= */

.programs {

  background: var(--off-white);

}

.program-grid {

  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 20px;

}

.program-card {

  background: white;

  padding: 32px 27px;

  border-radius: 15px;

  border:
    1px solid var(--border);

  box-shadow:
    0 8px 25px rgba(7,26,61,.04);

  transition:
    .35s ease;

  position: relative;

  overflow: hidden;

}

.program-card::before {

  content: "";

  position: absolute;

  left: 0;
  top: 0;

  width: 100%;

  height: 4px;

  background:
    linear-gradient(
      90deg,
      var(--green),
      var(--gold)
    );

  transform:
    scaleX(0);

  transform-origin: left;

  transition: .35s ease;

}

.program-card:hover {

  transform:
    translateY(-10px);

  box-shadow:
    var(--shadow);

}

.program-card:hover::before {

  transform:
    scaleX(1);

}

.program-icon {

  width: 58px;

  height: 58px;

  display: grid;

  place-items: center;

  border-radius: 12px;

  color: var(--green);

  background:
    rgba(8,116,67,.09);

  font-size: 23px;

  margin-bottom: 22px;

}

.program-card h3 {

  font-family: "Montserrat";

  color: var(--navy);

  font-size: 18px;

  margin-bottom: 10px;

}

.program-card p {

  color: var(--muted);

  font-size: 14px;

  margin-bottom: 20px;

}

.program-card a,
.event-body a {

  color: var(--green);

  font-size: 13px;

  font-weight: 800;

}

.program-card a i,
.event-body a i {

  margin-left: 5px;

  transition: .3s;

}

.program-card a:hover i,
.event-body a:hover i {

  transform:
    translateX(5px);

}


/* =========================
   IMPACT
   ========================= */

.impact {

  padding: 100px 0;

  color: white;

  background:

    linear-gradient(
      120deg,
      var(--navy),
      var(--green-dark)
    );

}

.impact-heading {

  text-align: center;

  max-width: 650px;

  margin:
    0 auto 55px;

}

.impact-heading > span {

  color: var(--gold);

}

.impact-heading h2 {

  color: white;

}

.impact-heading h2 strong {

  color: var(--gold);

}

.impact-heading p {

  color:
    rgba(255,255,255,.7);

}

.impact-grid {

  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 20px;

}

.impact-item {

  text-align: center;

  padding: 30px 15px;

  border:
    1px solid rgba(255,255,255,.12);

  border-radius: 14px;

  background:
    rgba(255,255,255,.05);

  backdrop-filter:
    blur(8px);

}

.impact-item i {

  color: var(--gold);

  font-size: 25px;

  margin-bottom: 15px;

}

.impact-item strong {

  display: block;

  font-family: "Montserrat";

  font-size: 42px;

}

.impact-item span {

  color:
    rgba(255,255,255,.7);

  font-size: 12px;

}


/* =========================
   EVENTS
   ========================= */

.events {

  background: white;

}

.event-grid {

  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 22px;

}

.event-card {

  border:
    1px solid var(--border);

  border-radius: 15px;

  overflow: hidden;

  background: white;

  box-shadow:
    0 8px 25px rgba(7,26,61,.05);

  transition: .35s;

}

.event-card:hover {

  transform:
    translateY(-8px);

  box-shadow:
    var(--shadow);

}

.event-image {

  position: relative;

  height: 230px;

}

.event-image img {

  width: 100%;

  height: 100%;

  object-fit: cover;

}

.date {

  position: absolute;

  top: 15px;

  left: 15px;

  width: 58px;

  height: 65px;

  background: var(--gold);

  color: var(--navy);

  border-radius: 8px;

  display: flex;

  flex-direction: column;

  justify-content: center;

  align-items: center;

  box-shadow:
    0 8px 20px rgba(0,0,0,.15);

}

.date strong {

  font-family: "Montserrat";

  font-size: 23px;

  line-height: 1;

}

.date span {

  font-size: 10px;

  font-weight: 800;

}

.event-body {

  padding: 25px;

}

.event-type {

  font-size: 10px;

  font-weight: 800;

  letter-spacing: 1px;

  color: var(--green);

}

.event-body h3 {

  font-family: "Montserrat";

  color: var(--navy);

  font-size: 19px;

  margin: 8px 0;

}

.event-body p {

  color: var(--muted);

  font-size: 13px;

  margin-bottom: 18px;

}


/* =========================
   MEMBERSHIP
   ========================= */

.membership {

  padding: 80px 0;

  background: var(--off-white);

}

.membership-box {

  padding: 55px;

  border-radius: 20px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 30px;

  background:

    linear-gradient(
      120deg,
      var(--green-dark),
      var(--navy)
    );

  color: white;

  box-shadow:
    var(--shadow-large);

}

.membership-box span {

  color: var(--gold);

}

.membership-box h2 {

  font-family: "Montserrat";

  font-size: 35px;

  line-height: 1.2;

  margin: 10px 0;

}

.membership-box h2 strong {

  color: var(--gold);

}

.membership-box p {

  color:
    rgba(255,255,255,.7);

}


/* =========================
   DONATE
   ========================= */

.donate {

  padding: 100px 0;

  text-align: center;

  background: white;

}

.donate-icon {

  width: 80px;

  height: 80px;

  display: grid;

  place-items: center;

  margin: auto;

  border-radius: 50%;

  background:
    rgba(244,196,48,.15);

  color: var(--green);

  font-size: 32px;

}

.donate h2 {

  font-family: "Montserrat";

  color: var(--navy);

  font-size: 38px;

  margin:
    20px 0 12px;

}

.donate p {

  max-width: 650px;

  margin:
    0 auto 25px;

  color: var(--muted);

}


/* =========================
   FOOTER
   ========================= */

footer {

  background: var(--navy);

  color: white;

  padding-top: 70px;

}

.footer-grid {

  display: grid;

  grid-template-columns:
    2fr 1fr 1.5fr;

  gap: 60px;

  padding-bottom: 50px;

}

.footer-about img {

  width: 100px;

  margin-bottom: 18px;

}

.footer-about p {

  color:
    rgba(255,255,255,.65);

  max-width: 380px;

  font-size: 13px;

}


/* SOCIALS */

.socials {

  display: flex;

  gap: 9px;

  margin-top: 20px;

}

.socials a {

  width: 38px;

  height: 38px;

  display: grid;

  place-items: center;

  border-radius: 50%;

  background:
    rgba(255,255,255,.08);

  color: white;

  transition: .3s;

}

.socials a:hover {

  background: var(--gold);

  color: var(--navy);

  transform:
    translateY(-4px);

}


/* FOOTER COLUMNS */

.footer-column h3 {

  font-family: "Montserrat";

  color: var(--gold);

  font-size: 15px;

  margin-bottom: 18px;

}

.footer-column a {

  display: block;

  color:
    rgba(255,255,255,.65);

  font-size: 13px;

  margin-bottom: 9px;

  transition: .2s;

}

.footer-column a:hover {

  color: var(--gold);

  transform:
    translateX(4px);

}

.footer-column p {

  display: flex;

  gap: 10px;

  color:
    rgba(255,255,255,.65);

  font-size: 13px;

  margin-bottom: 12px;

}

.footer-column p i {

  color: var(--gold);

  margin-top: 5px;

}


/* FOOTER BOTTOM */

.footer-bottom {

  border-top:
    1px solid rgba(255,255,255,.08);

  padding:
    20px 4%;

  display: flex;

  justify-content: space-between;

  gap: 15px;

  color:
    rgba(255,255,255,.5);

  font-size: 11px;

}


/* =========================
   RESPONSIVE
   ========================= */

@media (max-width: 1050px) {

  .navbar nav a {

    padding:
      8px 7px;

    font-size: 12px;

  }

  .program-grid,
  .event-grid {

    grid-template-columns:
      repeat(2, 1fr);

  }

}


@media (max-width: 850px) {

  .navbar {

    height: 72px;

  }

  .menu-btn {

    display: block;

  }

  .navbar nav {

    position: absolute;

    top: 72px;

    right: 3%;

    width: 260px;

    padding: 15px;

    display: none;

    flex-direction: column;

    align-items: stretch;

    gap: 4px;

    background:
      rgba(7,26,61,.98);

    border-radius: 12px;

    box-shadow:
      var(--shadow-large);

  }

  .navbar nav.active {

    display: flex;

  }

  .navbar nav a {

    padding: 12px;

  }

  .nav-donate {

    margin-left: 0;

    text-align: center;

  }

  .hero-content {

    margin-left: 5%;

  }

  .about-grid {

    grid-template-columns: 1fr;

  }

  .about-image img {

    height: 380px;

  }

  .impact-grid {

    grid-template-columns:
      repeat(2, 1fr);

  }

  .membership-box {

    flex-direction: column;

    align-items: flex-start;

  }

  .footer-grid {

    grid-template-columns:
      1fr 1fr;

  }

}


@media (max-width: 600px) {

  .logo img {

    width: 43px;

    height: 43px;

  }

  .logo strong {

    font-size: 18px;

  }

  .logo small {

    display: none;

  }

  .hero {

    min-height: 760px;

  }

  .hero-content {

    margin: auto;

    width: 90%;

    text-align: center;

  }

  .hero-tag {

    justify-content: center;

  }

  .hero h1 {

    font-size: 40px;

    letter-spacing: -1px;

  }

  .hero p {

    font-size: 14px;

  }

  .hero-buttons {

    justify-content: center;

  }

  .hero-stats {

    justify-content: center;

    gap: 20px;

  }

  .hero-stats strong {

    font-size: 21px;

  }

  .scroll-down {

    display: none;

  }

  .section {

    padding: 75px 0;

  }

  .program-grid,
  .event-grid {

    grid-template-columns: 1fr;

  }

  .impact-grid {

    grid-template-columns: 1fr 1fr;

  }

  .impact-item strong {

    font-size: 32px;

  }

  .membership-box {

    padding: 35px 25px;

  }

  .membership-box h2 {

    font-size: 28px;

  }

  .donate h2 {

    font-size: 29px;

  }

  .footer-grid {

    grid-template-columns: 1fr;

    gap: 35px;

  }

  .footer-bottom {

    flex-direction: column;

    text-align: center;

  }

}
