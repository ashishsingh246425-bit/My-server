 
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const questions = [
  {
    q: "भारत की राजधानी क्या है?",
    options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
    answer: 1
  },
  {
    q: "भारत का राष्ट्रीय पशु कौन सा है?",
    options: ["शेर", "हाथी", "बाघ", "हिरण"],
    answer: 2
  },
  {
    q: "भारत का राष्ट्रीय पक्षी कौन सा है?",
    options: ["तोता", "मोर", "कबूतर", "गरुड़"],
    answer: 1
  },
  {
    q: "भारत का राष्ट्रीय फूल कौन सा है?",
    options: ["गुलाब", "कमल", "सूरजमुखी", "चमेली"],
    answer: 1
  },
  {
    q: "भारत का राष्ट्रीय खेल किसे माना जाता है?",
    options: ["क्रिकेट", "हॉकी", "फुटबॉल", "कबड्डी"],
    answer: 1
  },
  {
    q: "भारत में गणतंत्र दिवस कब मनाया जाता है?",
    options: ["15 अगस्त", "26 जनवरी", "2 अक्टूबर", "14 नवंबर"],
    answer: 1
  },
  {
    q: "स्वतंत्रता दिवस कब मनाया जाता है?",
    options: ["26 जनवरी", "15 अगस्त", "2 अक्टूबर", "5 सितंबर"],
    answer: 1
  },
  {
    q: "महात्मा गांधी का जन्मदिन कब मनाया जाता है?",
    options: ["2 अक्टूबर", "14 नवंबर", "5 सितंबर", "15 अगस्त"],
    answer: 0
  },
  {
    q: "भारत का संविधान कब लागू हुआ?",
    options: ["15 अगस्त 1947", "26 जनवरी 1950", "26 नवंबर 1949", "2 अक्टूबर 1950"],
    answer: 1
  },
  {
    q: "भारतीय संविधान के निर्माता के रूप में किसे जाना जाता है?",
    options: ["महात्मा गांधी", "डॉ. बी. आर. आंबेडकर", "जवाहरलाल नेहरू", "सरदार पटेल"],
    answer: 1
  },
  {
    q: "भारत की सबसे लंबी नदी कौन सी है?",
    options: ["यमुना", "गंगा", "गोदावरी", "नर्मदा"],
    answer: 1
  },
  {
    q: "क्षेत्रफल की दृष्टि से भारत का सबसे बड़ा राज्य कौन सा है?",
    options: ["उत्तर प्रदेश", "मध्य प्रदेश", "राजस्थान", "महाराष्ट्र"],
    answer: 2
  },
  {
    q: "क्षेत्रफल की दृष्टि से भारत का सबसे छोटा राज्य कौन सा है?",
    options: ["गोवा", "सिक्किम", "त्रिपुरा", "मणिपुर"],
    answer: 0
  },
  {
    q: "भारत में कितने राज्य हैं?",
    options: ["26", "28", "29", "30"],
    answer: 1
  },
  {
    q: "भारत में कितने केंद्र शासित प्रदेश हैं?",
    options: ["6", "7", "8", "9"],
    answer: 2
  },
  {
    q: "सूर्य के सबसे निकट कौन सा ग्रह है?",
    options: ["पृथ्वी", "शुक्र", "बुध", "मंगल"],
    answer: 2
  },
  {
    q: "सौरमंडल का सबसे बड़ा ग्रह कौन सा है?",
    options: ["शनि", "बृहस्पति", "पृथ्वी", "यूरेनस"],
    answer: 1
  },
  {
    q: "लाल ग्रह किसे कहा जाता है?",
    options: ["मंगल", "शुक्र", "बुध", "शनि"],
    answer: 0
  },
  {
    q: "पृथ्वी का एकमात्र प्राकृतिक उपग्रह कौन है?",
    options: ["सूर्य", "चंद्रमा", "मंगल", "शुक्र"],
    answer: 1
  },
  {
    q: "जल का रासायनिक सूत्र क्या है?",
    options: ["CO2", "H2O", "O2", "NaCl"],
    answer: 1
  },
  {
    q: "ऑक्सीजन का रासायनिक संकेत क्या है?",
    options: ["O", "Ox", "C", "N"],
    answer: 0
  },
  {
    q: "कार्बन डाइऑक्साइड का सूत्र क्या है?",
    options: ["CO", "CO2", "C2O", "O2C"],
    answer: 1
  },
  {
    q: "मानव शरीर में रक्त को पंप करने वाला अंग कौन सा है?",
    options: ["फेफड़ा", "हृदय", "यकृत", "गुर्दा"],
    answer: 1
  },
  {
    q: "मानव शरीर का सबसे बड़ा अंग कौन सा है?",
    options: ["हृदय", "त्वचा", "यकृत", "मस्तिष्क"],
    answer: 1
  },
  {
    q: "विटामिन C का प्रमुख स्रोत क्या है?",
    options: ["नींबू", "चावल", "नमक", "तेल"],
    answer: 0
  },
  {
    q: "भारत में हरित क्रांति के जनक किसे कहा जाता है?",
    options: ["एम. एस. स्वामीनाथन", "होमी भाभा", "विक्रम साराभाई", "सी. वी. रमन"],
    answer: 0
  },
  {
    q: "भारत का पहला उपग्रह कौन सा था?",
    options: ["आर्यभट्ट", "रोहिणी", "भास्कर", "INSAT-1A"],
    answer: 0
  },
  {
    q: "ISRO का मुख्यालय कहाँ है?",
    options: ["नई दिल्ली", "मुंबई", "बेंगलुरु", "चेन्नई"],
    answer: 2
  },
  {
    q: "भारत का पहला चंद्र मिशन कौन सा था?",
    options: ["चंद्रयान-1", "चंद्रयान-2", "चंद्रयान-3", "मंगलयान"],
    answer: 0
  },
  {
    q: "मंगलयान किस ग्रह के लिए मिशन था?",
    options: ["शुक्र", "मंगल", "बृहस्पति", "शनि"],
    answer: 1
  },
  {
    q: "भारत के पहले प्रधानमंत्री कौन थे?",
    options: ["सरदार पटेल", "जवाहरलाल नेहरू", "राजेंद्र प्रसाद", "लाल बहादुर शास्त्री"],
    answer: 1
  },
  {
    q: "भारत के पहले राष्ट्रपति कौन थे?",
    options: ["डॉ. राजेंद्र प्रसाद", "डॉ. राधाकृष्णन", "जवाहरलाल नेहरू", "सरदार पटेल"],
    answer: 0
  },
  {
    q: "भारतीय संसद के कितने सदन हैं?",
    options: ["एक", "दो", "तीन", "चार"],
    answer: 1
  },
  {
    q: "लोकसभा को किस नाम से भी जाना जाता है?",
    options: ["उच्च सदन", "निचला सदन", "राज्य सदन", "विधान परिषद"],
    answer: 1
  },
  {
    q: "राज्यसभा को किस नाम से भी जाना जाता है?",
    options: ["निचला सदन", "उच्च सदन", "जनसभा", "लोकसभा"],
    answer: 1
  },
  {
    q: "भारत की मुद्रा क्या है?",
    options: ["डॉलर", "रुपया", "पाउंड", "येन"],
    answer: 1
  },
  {
    q: "रुपये का प्रतीक क्या है?",
    options: ["$", "€", "₹", "£"],
    answer: 2
  },
  {
    q: "भारतीय रिजर्व बैंक की स्थापना कब हुई?",
    options: ["1930", "1935", "1947", "1950"],
    answer: 1
  },
  {
    q: "RBI का मुख्यालय कहाँ है?",
    options: ["नई दिल्ली", "मुंबई", "कोलकाता", "चेन्नई"],
    answer: 1
  },
  {
    q: "भारत का राष्ट्रीय वृक्ष कौन सा है?",
    options: ["नीम", "बरगद", "पीपल", "आम"],
    answer: 1
  },
  {
    q: "भारत का राष्ट्रीय फल कौन सा है?",
    options: ["सेब", "आम", "केला", "संतरा"],
    answer: 1
  },
  {
    q: "भारत का राष्ट्रीय जलीय जीव कौन सा है?",
    options: ["गंगा डॉल्फिन", "व्हेल", "मगरमच्छ", "कछुआ"],
    answer: 0
  },
  {
    q: "भारत का राष्ट्रीय गीत कौन सा है?",
    options: ["जन गण मन", "वंदे मातरम्", "सारे जहाँ से अच्छा", "ऐ मेरे वतन"],
    answer: 1
  },
  {
    q: "भारत का राष्ट्रगान कौन सा है?",
    options: ["वंदे मातरम्", "जन गण मन", "सारे जहाँ से अच्छा", "जय हिंद"],
    answer: 1
  },
  {
    q: "शिक्षक दिवस भारत में कब मनाया जाता है?",
    options: ["5 सितंबर", "14 नवंबर", "2 अक्टूबर", "15 अगस्त"],
    answer: 0
  },
  {
    q: "बाल दिवस भारत में कब मनाया जाता है?",
    options: ["5 सितंबर", "14 नवंबर", "26 जनवरी", "2 अक्टूबर"],
    answer: 1
  },
  {
    q: "विश्व पर्यावरण दिवस कब मनाया जाता है?",
    options: ["5 जून", "22 अप्रैल", "1 मई", "8 मार्च"],
    answer: 0
  },
  {
    q: "अंतरराष्ट्रीय योग दिवस कब मनाया जाता है?",
    options: ["21 जून", "5 जून", "15 अगस्त", "2 अक्टूबर"],
    answer: 0
  },
  {
    q: "ओलंपिक खेल कितने वर्षों के अंतराल पर आयोजित होते हैं?",
    options: ["2 वर्ष", "3 वर्ष", "4 वर्ष", "5 वर्ष"],
    answer: 2
  },
  {
    q: "क्रिकेट में एक ओवर में कितनी गेंदें होती हैं?",
    options: ["4", "5", "6", "8"],
    answer: 2
  },
  {
    q: "शतरंज में प्रत्येक खिलाड़ी के पास शुरुआत में कितने मोहरे होते हैं?",
    options: ["12", "14", "16", "18"],
    answer: 2
  }
];

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="hi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Study Hub | GK Quiz 2026</title>

<style>
*{box-sizing:border-box}

body{
  margin:0;
  font-family:Arial,sans-serif;
  background:#f4f7ff;
  color:#172033;
}

header{
  background:#3157d5;
  color:white;
  padding:22px 18px;
  text-align:center;
}

header h1{
  margin:0;
  font-size:30px;
}

header p{
  margin:8px 0 0;
}

.container{
  max-width:850px;
  margin:auto;
  padding:25px 15px;
}

.card{
  background:white;
  border-radius:18px;
  padding:25px;
  margin-bottom:20px;
  box-shadow:0 5px 20px rgba(0,0,0,.08);
}

.badge{
  display:inline-block;
  background:#e9efff;
  color:#3157d5;
  padding:8px 14px;
  border-radius:20px;
  font-weight:bold;
}

.question{
  font-size:22px;
  line-height:1.5;
  margin:20px 0;
  font-weight:bold;
}

.option{
  display:block;
  width:100%;
  padding:15px;
  margin:10px 0;
  border:2px solid #e0e5ef;
  border-radius:10px;
  background:white;
  text-align:left;
  font-size:16px;
  cursor:pointer;
}

.option:hover{
  border-color:#3157d5;
  background:#f2f5ff;
}

.option.selected{
  border-color:#3157d5;
  background:#e9efff;
}

button{
  cursor:pointer;
}

.next{
  width:100%;
  padding:15px;
  border:0;
  border-radius:10px;
  background:#3157d5;
  color:white;
  font-size:17px;
  font-weight:bold;
  margin-top:15px;
}

.progress{
  height:10px;
  background:#e5e9f2;
  border-radius:20px;
  overflow:hidden;
}

.progress-bar{
  height:100%;
  background:#3157d5;
  width:0%;
}

.result{
  text-align:center;
}

.score{
  font-size:50px;
  color:#3157d5;
  font-weight:bold;
}

.restart{
  padding:14px 25px;
  background:#3157d5;
  color:white;
  border:0;
  border-radius:9px;
  font-size:16px;
}

footer{
  text-align:center;
  background:#172033;
  color:white;
  padding:30px 15px;
  margin-top:30px;
}
</style>
</head>

<body>

<header>
  <h1>📚 Study Hub</h1>
  <p>सामान्य ज्ञान Quiz 2026</p>
</header>

<div class="container">

  <div class="card">
    <span class="badge">🧠 GK Quiz</span>

    <h2 id="number">Question 1 / ${questions.length}</h2>

    <div class="progress">
      <div class="progress-bar" id="progress"></div>
    </div>

    <div class="question" id="question"></div>

    <div id="options"></div>

    <button class="next" onclick="nextQuestion()">
      अगला प्रश्न →
    </button>
  </div>

</div>

<footer>
  <h2>📚 Study Hub</h2>
  <p>Learn Today • Lead Tomorrow</p>
  <p>© 2026 Study Hub</p>
</footer>

<script>

const questions = ${JSON.stringify(questions)};

let current = 0;
let score = 0;
let selected = null;

function loadQuestion(){

  selected = null;

  const q = questions[current];

  document.getElementById("number").innerText =
    "Question " + (current + 1) + " / " + questions.length;

  document.getElementById("question").innerText = q.q;

  document.getElementById("progress").style.width =
    ((current + 1) / questions.length * 100) + "%";

  const box = document.getElementById("options");

  box.innerHTML = "";

  q.options.forEach((option,index)=>{

    const button = document.createElement("button");

    button.className = "option";

    button.innerText =
      String.fromCharCode(65 + index) + ". " + option;

    button.onclick = function(){

      document.querySelectorAll(".option")
        .forEach(x => x.classList.remove("selected"));

      button.classList.add("selected");

      selected = index;
    };

    box.appendChild(button);

  });
}

function nextQuestion(){

  if(selected === null){
    alert("पहले एक उत्तर चुनें।");
    return;
  }

  if(selected === questions[current].answer){
    score++;
  }

  current++;

  if(current < questions.length){

    loadQuestion();

  }else{

    showResult();

  }
}

function showResult(){

  document.querySelector(".container").innerHTML = `

    <div class="card result">

      <h1>🎉 Quiz Complete!</h1>

      <p>आपका Score</p>

      <div class="score">
        ${score} / ${questions.length}
      </div>

      <p>
        आपने ${questions.length} में से
        ${score} प्रश्न सही किए।
      </p>

      <button class="restart" onclick="location.reload()">
        🔄 फिर से Quiz दें
      </button>

    </div>

  `;
}

loadQuestion();

</script>

</body>
</html>
  `);
});

app.get("/api/quiz", (req, res) => {
  res.json({
    success: true,
    totalQuestions: questions.length,
    questions: questions
  });
});

app.get("/api/hello", (req, res) => {
  res.json({
    success: true,
    message: "Study Hub API working hai!"
  });
});

app.listen(PORT, () => {
  console.log("Study Hub server running on port " + PORT);
});
