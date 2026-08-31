Bilkul bhai 👍 Ab 
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const html = `
<!DOCTYPE html>
<html lang="hi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Study Hub - Learn Today</title>

<style>
*{
  box-sizing:border-box;
  margin:0;
  padding:0;
}

body{
  font-family:Arial,sans-serif;
  background:#f7f9ff;
  color:#14213d;
}

header{
  background:#ffffff;
  padding:18px 6%;
  display:flex;
  align-items:center;
  justify-content:space-between;
  box-shadow:0 2px 12px rgba(0,0,0,.08);
  position:sticky;
  top:0;
  z-index:10;
}

.logo{
  font-size:25px;
  font-weight:bold;
  color:#1464e8;
}

nav a{
  margin:0 10px;
  text-decoration:none;
  color:#222;
  font-weight:bold;
}

nav a:hover{
  color:#1464e8;
}

.hero{
  padding:70px 7%;
  background:linear-gradient(135deg,#eef5ff,#ffffff);
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:40px;
}

.hero-text{
  max-width:600px;
}

.badge{
  display:inline-block;
  background:#e7efff;
  color:#1464e8;
  padding:10px 18px;
  border-radius:30px;
  margin-bottom:20px;
  font-weight:bold;
}

h1{
  font-size:48px;
  line-height:1.15;
  margin-bottom:20px;
}

.highlight{
  color:#1464e8;
}

.hero p{
  font-size:18px;
  line-height:1.7;
  color:#555;
  margin-bottom:25px;
}

.btn{
  display:inline-block;
  padding:14px 25px;
  border-radius:8px;
  text-decoration:none;
  font-weight:bold;
  margin-right:10px;
  background:#1464e8;
  color:white;
}

.btn2{
  background:white;
  color:#1464e8;
  border:2px solid #1464e8;
}

.books{
  font-size:150px;
  text-align:center;
}

section{
  padding:55px 7%;
}

.section-title{
  text-align:center;
  font-size:32px;
  margin-bottom:35px;
}

.cards{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:20px;
}

.card{
  background:white;
  padding:30px 20px;
  border-radius:15px;
  text-align:center;
  box-shadow:0 5px 20px rgba(0,0,0,.07);
}

.icon{
  font-size:45px;
  margin-bottom:15px;
}

.card h3{
  margin-bottom:10px;
}

.card p{
  color:#666;
  line-height:1.5;
}

.card button{
  margin-top:18px;
  padding:10px 20px;
  border:1px solid #1464e8;
  background:white;
  color:#1464e8;
  border-radius:6px;
  font-weight:bold;
}

.quiz{
  background:#1464e8;
  color:white;
  border-radius:20px;
  padding:45px;
  text-align:center;
}

.quiz h2{
  font-size:32px;
  margin-bottom:15px;
}

.quiz p{
  margin-bottom:25px;
}

.quiz .btn{
  background:white;
  color:#1464e8;
  margin:0;
}

.stats{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:20px;
  text-align:center;
}

.stat{
  background:white;
  padding:25px;
  border-radius:12px;
  box-shadow:0 4px 15px rgba(0,0,0,.06);
}

.stat h2{
  color:#1464e8;
  font-size:32px;
}

footer{
  background:#101d35;
  color:white;
  padding:45px 7%;
  text-align:center;
}

footer h2{
  margin-bottom:10px;
}

footer p{
  color:#cbd3e2;
}

@media(max-width:800px){
  nav{
    display:none;
  }

  .hero{
    flex-direction:column;
    text-align:center;
    padding:50px 6%;
  }

  h1{
    font-size:38px;
  }

  .books{
    font-size:100px;
  }

  .cards{
    grid-template-columns:1fr;
  }

  .stats{
    grid-template-columns:repeat(2,1fr);
  }
}
</style>
</head>

<body>

<header>
  <div class="logo">📚 Study Hub</div>

  <nav>
    <a href="/">Home</a>
    <a href="#subjects">Subjects</a>
    <a href="#quiz">Quiz</a>
    <a href="#notes">Notes</a>
  </nav>
</header>

<section class="hero">

  <div class="hero-text">
    <div class="badge">🎓 Welcome to Study Hub</div>

    <h1>
      Your Success Starts
      <span class="highlight">With Good Preparation</span>
    </h1>

    <p>
      सामान्य ज्ञान, Current Affairs, Maths, Science और
      competitive exams की तैयारी के लिए notes, PDFs और quizzes
      एक ही जगह।
    </p>

    <a class="btn" href="#subjects">Explore Subjects</a>
    <a class="btn btn2" href="#quiz">Start Quiz</a>
  </div>

  <div class="books">📚🎓</div>

</section>

<section id="subjects">

  <h2 class="section-title">📖 Popular Subjects</h2>

  <div class="cards">

    <div class="card">
      <div class="icon">🌍</div>
      <h3>सामान्य ज्ञान</h3>
      <p>महत्वपूर्ण GK प्रश्न और उत्तर पढ़ें।</p>
      <button>Explore</button>
    </div>

    <div class="card">
      <div class="icon">📰</div>
      <h3>Current Affairs</h3>
      <p>Latest घटनाओं और महत्वपूर्ण updates की तैयारी करें।</p>
      <button>Explore</button>
    </div>

    <div class="card">
      <div class="icon">🔢</div>
      <h3>Maths</h3>
      <p>गणित के concepts और practice questions।</p>
      <button>Explore</button>
    </div>

    <div class="card">
      <div class="icon">🔬</div>
      <h3>Science</h3>
      <p>Science concepts और MCQ practice।</p>
      <button>Explore</button>
    </div>

    <div class="card">
      <div class="icon">🏛️</div>
      <h3>Indian Polity</h3>
      <p>भारतीय संविधान और राजनीति से जुड़े topics।</p>
      <button>Explore</button>
    </div>

    <div class="card">
      <div class="icon">📜</div>
      <h3>History</h3>
      <p>भारत और विश्व इतिहास की तैयारी।</p>
      <button>Explore</button>
    </div>

  </div>
</section>

<section id="notes">

  <h2 class="section-title">📚 Study Materials</h2>

  <div class="cards">

    <div class="card">
      <div class="icon">📕</div>
      <h3>GK 2026 PDF</h3>
      <p>Important General Knowledge questions.</p>
      <button>View PDF</button>
    </div>

    <div class="card">
      <div class="icon">📘</div>
      <h3>Current Affairs 2026</h3>
      <p>Monthly current affairs notes.</p>
      <button>View PDF</button>
    </div>

    <div class="card">
      <div class="icon">📗</div>
      <h3>Maths Notes</h3>
      <p>Formula और practice material.</p>
      <button>View Notes</button>
    </div>

  </div>
</section>

<section id="quiz">

  <div class="quiz">
    <h2>🎯 Online Quiz</h2>

    <p>
      अपनी तैयारी check करने के लिए आज का free quiz शुरू करें।
    </p>

    <a class="btn" href="/api/quiz">Start Free Quiz</a>
  </div>

</section>

<section>

  <h2 class="section-title">⭐ Study Hub</h2>

  <div class="stats">

    <div class="stat">
      <h2>1000+</h2>
      <p>GK Questions</p>
    </div>

    <div class="stat">
      <h2>200+</h2>
      <p>Study Notes</p>
    </div>

    <div class="stat">
      <h2>50+</h2>
      <p>Quizzes</p>
    </div>

    <div class="stat">
      <h2>24/7</h2>
      <p>Learning</p>
    </div>

  </div>

</section>

<footer>

  <h2>📚 Study Hub</h2>

  <p>Learn Today • Lead Tomorrow</p>

  <br>

  <p>© 2026 Study Hub. All Rights Reserved.</p>

</footer>

</body>
</html>
`;

app.get("/", (req, res) => {
  res.send(html);
});

app.get("/api/hello", (req, res) => {
  res.json({
    success: true,
    message: "Study Hub API working hai!"
  });
});

app.get("/api/quiz", (req, res) => {
  res.json({
    title: "GK Quiz",
    question: "भारत की राजधानी क्या है?",
    options: [
      "Mumbai",
      "New Delhi",
      "Kolkata",
      "Chennai"
    ],
    answer: "New Delhi"
  });
});

app.listen(PORT, () => {
  console.log("Study Hub server running on port " + PORT);
});
