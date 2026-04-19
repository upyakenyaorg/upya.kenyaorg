<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>UPYA Kenya</title>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

<style>
*{margin:0;padding:0;box-sizing:border-box;font-family:'Poppins',sans-serif;}
body{background:#f9fbfd;color:#333;scroll-behavior:smooth;}

/* HEADER */
header{
display:flex;justify-content:space-between;align-items:center;
padding:20px 50px;background:white;
box-shadow:0 2px 10px rgba(0,0,0,0.05);
position:sticky;top:0;z-index:1000;
}
nav a{margin-left:20px;text-decoration:none;color:#333;font-weight:500;}
nav a:hover{color:#0077ff;}

/* HERO */
.hero{
height:90vh;display:flex;flex-direction:column;
justify-content:center;align-items:center;text-align:center;
animation:fadeIn 1.5s ease-in;
}
.hero h1{font-size:3rem;color:#0077ff;}
.hero p{margin:20px 0;max-width:600px;}
.btn{
padding:12px 25px;background:#0077ff;color:white;
border:none;border-radius:5px;margin:10px;cursor:pointer;
transition:0.3s;
}
.btn:hover{background:#005fd1;}

/* SECTIONS */
.section{padding:70px 20px;text-align:center;}
.cards{
display:flex;flex-wrap:wrap;justify-content:center;
gap:25px;margin-top:30px;
}
.card{
background:white;padding:25px;width:260px;
border-radius:12px;
box-shadow:0 8px 20px rgba(0,0,0,0.05);
transition:0.3s;
}
.card:hover{transform:translateY(-8px);}

/* EVENTS */
.events{background:#eef5ff;}

/* SPEAKERS */
.speaker img{
width:100%;border-radius:10px;height:200px;object-fit:cover;
}

/* GALLERY */
.gallery{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
gap:15px;margin-top:30px;
}
.gallery img{
width:100%;height:180px;object-fit:cover;border-radius:10px;
}

/* VIDEO */
.video iframe{
width:100%;max-width:700px;height:400px;border:none;
border-radius:10px;
}

/* SOCIAL */
.socials a{
margin:0 10px;font-size:24px;color:#0077ff;
}

/* WHATSAPP */
.whatsapp{
position:fixed;bottom:20px;right:20px;
background:#25D366;color:white;padding:15px;
border-radius:50%;font-size:22px;
}

/* FOOTER */
footer{
background:#0077ff;color:white;text-align:center;padding:20px;
}

/* ANIMATION */
@keyframes fadeIn{
from{opacity:0;transform:translateY(20px);}
to{opacity:1;transform:translateY(0);}
}
</style>
</head>

<body>

<header>
<h2>UPYA Kenya</h2>
<nav>
<a href="#">Home</a>
<a href="#about">About</a>
<a href="#events">Events</a>
<a href="#gallery">Gallery</a>
<a href="#contact">Contact</a>
</nav>
</header>

<section class="hero">
<h1>From Ideas to Income</h1>
<p>Empowering youths through financial literacy, entrepreneurship, and mentorship.</p>
<button class="btn" onclick="document.getElementById('events').scrollIntoView()">Upcoming Event</button>
</section>

<section id="about" class="section">
<h2>About UPYA</h2>
<p>UPYA Kenya is a youth-led movement building financially empowered and entrepreneurial young leaders.</p>

<div class="cards">
<div class="card"><h3>Mission</h3><p>Equip youths with practical skills.</p></div>
<div class="card"><h3>Vision</h3><p>Independent, innovative youth.</p></div>
<div class="card"><h3>Values</h3><p>Integrity, Growth, Impact.</p></div>
</div>
</section>

<section class="section">
<h2>What We Do</h2>
<div class="cards">
<div class="card">💰 Financial Literacy</div>
<div class="card">💡 Entrepreneurship</div>
<div class="card">🤝 Mentorship</div>
<div class="card">🎤 Events</div>
</div>
</section>

<section id="events" class="section events">
<h2>Upcoming Event</h2>
<p><strong>From Ideas to Income</strong></p>
<p>23rd May | Malela, Kombewa | KES 200</p>

<!-- GOOGLE FORM -->
<a href="https://forms.gle/YOUR_FORM_LINK" target="_blank">
<button class="btn">Register Now</button>
</a>
</section>

<section class="section">
<h2>Featured Speaker</h2>
<div class="cards">
<div class="card speaker">
<img src="https://via.placeholder.com/300" alt="">
<h3>Bishop (Guest Speaker)</h3>
<p>Sharing real stories on success & finance.</p>
</div>
</div>
</section>

<section class="section video">
<h2>Watch Our Vision</h2>
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO"></iframe>
</section>

<section id="gallery" class="section">
<h2>Gallery</h2>
<div class="gallery">
<img src="https://via.placeholder.com/300">
<img src="https://via.placeholder.com/300">
<img src="https://via.placeholder.com/300">
<img src="https://via.placeholder.com/300">
</div>
</section>

<section id="contact" class="section">
<h2>Connect With Us</h2>
<p>0742717363 | upya.kenya100@gmail.com</p>

<div class="socials">
<a href="#"><i class="fab fa-tiktok"></i></a>
<a href="#"><i class="fab fa-facebook"></i></a>
<a href="#"><i class="fab fa-instagram"></i></a>
<a href="#"><i class="fab fa-youtube"></i></a>
</div>
</section>

<a href="https://wa.me/254742717363" class="whatsapp">
<i class="fab fa-whatsapp"></i>
</a>

<footer>
<p>© 2026 UPYA Kenya | Empowering the Future</p>
</footer>

</body>
</html>
