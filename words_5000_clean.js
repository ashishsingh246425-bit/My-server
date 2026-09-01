
<!-- ================= WORD MEANING ================= -->

<section id="wordMeaningSection">

  <h2>📖 शब्द अर्थ (Word Meaning)</h2>

  <div class="wm-tabs">
    <button onclick="setWordMode('EH')">
      📖 English - Hindi
    </button>

    <button onclick="setWordMode('HE')">
      📘 Hindi - English
    </button>

    <button onclick="showDailyWords()">
      📗 Daily Words
    </button>

    <button onclick="showFavourites()">
      ⭐ Favourites
    </button>
  </div>

  <input
    id="wordSearch"
    type="text"
    placeholder="🔍 Search Word..."
    oninput="searchWordMeaning()"
  >

  <div id="wordCount"></div>

  <div id="wordMeaningList"></div>

</section>


<style>

#wordMeaningSection{
  background:#ffffff;
  padding:20px;
  margin:20px auto;
  border-radius:22px;
  max-width:700px;
  box-shadow:0 6px 25px rgba(0,0,0,.08);
}

#wordMeaningSection h2{
  font-size:26px;
  margin-bottom:18px;
}

.wm-tabs{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:10px;
}

.wm-tabs button{
  padding:14px 8px;
  border:none;
  border-radius:14px;
  background:#edf2ff;
  color:#2459df;
  font-size:15px;
  font-weight:bold;
}

#wordSearch{
  width:100%;
  padding:15px;
  margin:18px 0 8px;
  border:2px solid #dce2ec;
  border-radius:15px;
  font-size:17px;
  outline:none;
}

#wordCount{
  text-align:center;
  color:#667085;
  margin:8px;
}

.wm-card{
  display:flex;
  align-items:center;
  gap:12px;
  background:#f8faff;
  padding:15px;
  margin:10px 0;
  border-radius:17px;
  border:1px solid #e5e9f2;
}

.wm-number{
  width:40px;
  height:40px;
  min-width:40px;
  background:#2459df;
  color:white;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:bold;
}

.wm-content{
  flex:1;
}

.wm-word{
  color:#1455d9;
  font-size:21px;
  font-weight:bold;
}

.wm-meaning{
  margin-top:5px;
  font-size:17px;
}

.wm-meaning b{
  color:#26933f;
}

.wm-actions{
  display:flex;
  gap:5px;
}

.wm-action{
  border:none;
  background:none;
  font-size:23px;
  cursor:pointer;
}

</style>


<script>

/* ================= WORD MEANING SYSTEM ================= */

let wordMode = "EH";

let favouriteWords =
  JSON.parse(localStorage.getItem("studyHubFavourites") || "[]");


function setWordMode(mode){

  wordMode = mode;

  document.getElementById("wordSearch").value = "";

  renderWordMeanings(wordMeanings);

}


function renderWordMeanings(words){

  const list =
    document.getElementById("wordMeaningList");

  const count =
    document.getElementById("wordCount");

  list.innerHTML = "";

  count.innerText =
    "📚 कुल Words: " + words.length;

  words.forEach(function(word,index){

    let english = word[0];
    let hindi = word[1];

    if(wordMode === "HE"){

      english = word[1];
      hindi = word[0];

    }

    const originalKey =
      word[0] + "|" + word[1];

    const isFavourite =
      favouriteWords.includes(originalKey);

    const card =
      document.createElement("div");

    card.className = "wm-card";

    card.innerHTML = `

      <div class="wm-number">
        ${index + 1}
      </div>

      <div class="wm-content">

        <div class="wm-word">
          ${english} 🔊
        </div>

        <div class="wm-meaning">
          <b>अर्थ:</b> ${hindi}
        </div>

      </div>

      <div class="wm-actions">

        <button
          class="wm-action"
          onclick="speakWord('${escapeQuotes(english)}')">
          🔊
        </button>

        <button
          class="wm-action"
          onclick="toggleFavourite('${escapeQuotes(originalKey)}')">
          ${isFavourite ? "❤️" : "♡"}
        </button>

        <button
          class="wm-action"
          onclick="copyMeaning('${escapeQuotes(english + ' - ' + hindi)}')">
          📋
        </button>

      </div>

    `;

    list.appendChild(card);

  });

}


function searchWordMeaning(){

  const search =
    document
    .getElementById("wordSearch")
    .value
    .toLowerCase()
    .trim();

  const results =
    wordMeanings.filter(function(word){

      return (

        word[0]
        .toLowerCase()
        .includes(search)

        ||

        word[1]
        .toLowerCase()
        .includes(search)

      );

    });

  renderWordMeanings(results);

}


function showDailyWords(){

  wordMode = "EH";

  document.getElementById("wordSearch").value = "";

  renderWordMeanings(
    wordMeanings.slice(0,20)
  );

}


function toggleFavourite(key){

  if(favouriteWords.includes(key)){

    favouriteWords =
      favouriteWords.filter(
        item => item !== key
      );

  }else{

    favouriteWords.push(key);

  }

  localStorage.setItem(
    "studyHubFavourites",
    JSON.stringify(favouriteWords)
  );

  renderWordMeanings(wordMeanings);

}


function showFavourites(){

  const favouriteList =
    wordMeanings.filter(function(word){

      return favouriteWords.includes(
        word[0] + "|" + word[1]
      );

    });

  renderWordMeanings(favouriteList);

}


function speakWord(word){

  if("speechSynthesis" in window){

    const speech =
      new SpeechSynthesisUtterance(word);

    speech.lang = "en-US";

    speech.rate = 0.85;

    speechSynthesis.speak(speech);

  }

}


function copyMeaning(text){

  navigator.clipboard
    .writeText(text)
    .then(function(){

      alert("✅ Word Meaning copied!");

    });

}


function escapeQuotes(text){

  return text
    .replace(/\\/g,"\\\\")
    .replace(/'/g,"\\'")
    .replace(/"/g,"&quot;");

}


/* START */

if(typeof wordMeanings !== "undefined"){

  renderWordMeanings(wordMeanings);

}else{

  document.getElementById("wordMeaningList").innerHTML =
    "<p style='text-align:center;color:red'>⚠️ Word data file नहीं मिली।</p>";

}

</script>
