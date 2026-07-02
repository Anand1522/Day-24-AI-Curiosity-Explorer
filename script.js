/*==================================================
 AI Curiosity Explorer
 Day 24
 Part 1
==================================================*/

/*==============================
ELEMENTS
==============================*/

const topicInput = document.getElementById("topicInput");
const exploreBtn = document.getElementById("exploreBtn");

const loadingSection = document.getElementById("loadingSection");
const results = document.getElementById("results");

const topicTitle = document.getElementById("topicTitle");
const topicSubtitle = document.getElementById("topicSubtitle");

const factsList = document.getElementById("factsList");
const questionsList = document.getElementById("questionsList");
const relatedList = document.getElementById("relatedList");
const learnList = document.getElementById("learnList");
const futureList = document.getElementById("futureList");

const summaryText = document.getElementById("summaryText");

const themeBtn = document.getElementById("themeBtn");

const copyBtn = document.getElementById("copyBtn");
const downloadBtn = document.getElementById("downloadBtn");
const shareBtn = document.getElementById("shareBtn");

const toast = document.getElementById("toast");

/*==============================
TOPIC DATABASE
==============================*/

const topicDatabase = {

Space:{

facts:[
"The observable universe contains billions of galaxies.",
"Light from distant galaxies travels for billions of years.",
"A day on Venus is longer than its year.",
"Neutron stars are incredibly dense.",
"The universe continues expanding."
],

questions:[
"What existed before the Big Bang?",
"Is there intelligent life elsewhere?",
"Can humans travel faster than light?",
"What is dark matter?",
"Will humans colonize other galaxies?"
],

related:[
"Astronomy",
"Astrophysics",
"Rocket Science",
"Cosmology",
"Planetary Science"
],

learn:[
"Solar System",
"Stars",
"Galaxies",
"Black Holes",
"Exoplanets",
"Dark Matter"
],

future:[
"Moon cities",
"Mars colonies",
"Asteroid mining",
"Deep-space travel",
"Interstellar exploration"
],

summary:
"Space is one of humanity's greatest frontiers, combining science, engineering, mathematics and imagination to understand our universe."

},

"Artificial Intelligence":{

facts:[
"AI can recognize images and speech.",
"Machine Learning enables computers to learn from data.",
"Generative AI creates text, images and code.",
"AI powers recommendation systems.",
"AI is transforming nearly every industry."
],

questions:[
"Can AI achieve human-level intelligence?",
"Should AI have ethical rights?",
"How can AI remain trustworthy?",
"Will AI replace every job?",
"How should governments regulate AI?"
],

related:[
"Machine Learning",
"Deep Learning",
"Data Science",
"Robotics",
"Computer Vision"
],

learn:[
"Python",
"Statistics",
"Linear Algebra",
"Neural Networks",
"LLMs",
"Prompt Engineering"
],

future:[
"AI Scientists",
"AI Doctors",
"Autonomous Robots",
"Personal AI Assistants",
"General AI"
],

summary:
"Artificial Intelligence enables machines to perform tasks that normally require human intelligence by learning patterns and making decisions."

},

Ocean:{

facts:[
"More than 70% of Earth is covered by oceans.",
"Most of the deep ocean remains unexplored.",
"The ocean produces much of Earth's oxygen.",
"Deep-sea creatures survive extreme pressure.",
"Ocean currents regulate climate."
],

questions:[
"What undiscovered species exist?",
"What lies in the deepest trenches?",
"How will climate change affect oceans?",
"Can oceans become sustainable energy sources?",
"How can plastic pollution be eliminated?"
],

related:[
"Marine Biology",
"Climate Science",
"Ecology",
"Oceanography",
"Geology"
],

learn:[
"Coral Reefs",
"Marine Animals",
"Ocean Currents",
"Deep Sea",
"Climate"
],

future:[
"Floating Cities",
"Ocean Farming",
"Underwater Research Bases",
"Autonomous Submarines",
"Marine Conservation AI"
],

summary:
"The ocean is Earth's largest ecosystem and remains one of the least explored places on our planet."

}

};

/*==============================
DEFAULT DATA
==============================*/

const defaultData = {

facts:[
"Every topic connects to many other fields.",
"Curiosity accelerates learning.",
"Questions often lead to discoveries.",
"Knowledge grows continuously.",
"Exploration builds creativity."
],

questions:[
"What makes this topic important?",
"What problems can it solve?",
"What should beginners learn first?",
"What discoveries are still possible?",
"How will this field evolve?"
],

related:[
"Science",
"Technology",
"History",
"Innovation",
"Education"
],

learn:[
"Basics",
"Applications",
"Real-world Examples",
"Advanced Concepts",
"Future Trends"
],

future:[
"New Research",
"Global Innovation",
"AI Assistance",
"Automation",
"Scientific Discovery"
],

summary:
"This topic offers many opportunities to learn, explore and discover new ideas. Every subject connects with countless other fields and can inspire lifelong curiosity."

};

/*==============================
HELPERS
==============================*/

function createList(items, element){

element.innerHTML="";

items.forEach(item=>{

const li=document.createElement("li");

li.textContent=item;

element.appendChild(li);

});

}

function showToast(message){

toast.textContent=message;

toast.classList.add("show");

setTimeout(()=>{

toast.classList.remove("show");

},2500);

}

/*==================================================
 AI Curiosity Explorer
 Day 24
 Part 2
==================================================*/

/*==============================
SEARCH TOPIC
==============================*/

function findTopic(topic){

    const input = topic.trim().toLowerCase();

    for(const key in topicDatabase){

        if(key.toLowerCase() === input){

            return topicDatabase[key];

        }

    }

    return defaultData;

}

/*==============================
RENDER RESULTS
==============================*/

function renderResults(topic){

    const data = findTopic(topic);

    topicTitle.textContent = topic;

    topicSubtitle.textContent =
    "Discover amazing facts, unanswered questions and future possibilities.";

    createList(data.facts,factsList);

    createList(data.questions,questionsList);

    createList(data.related,relatedList);

    createList(data.learn,learnList);

    createList(data.future,futureList);

    summaryText.textContent = data.summary;

}

/*==============================
EXPLORE
==============================*/

function exploreTopic(){

    const topic = topicInput.value.trim();

    if(topic===""){

        showToast("Please enter a topic.");

        topicInput.focus();

        return;

    }

    results.classList.add("hidden");

    loadingSection.classList.remove("hidden");

    setTimeout(()=>{

        loadingSection.classList.add("hidden");

        renderResults(topic);

        results.classList.remove("hidden");

        results.scrollIntoView({

            behavior:"smooth"

        });

    },1500);

}

/*==============================
BUTTON
==============================*/

exploreBtn.addEventListener("click",exploreTopic);

/*==============================
ENTER KEY
==============================*/

topicInput.addEventListener("keydown",function(e){

    if(e.key==="Enter"){

        exploreTopic();

    }

});

/*==============================
QUICK TOPICS
==============================*/

document.querySelectorAll(".topic-chip").forEach(chip=>{

    chip.addEventListener("click",()=>{

        topicInput.value = chip.textContent;

        exploreTopic();

    });

});

/*==============================
AUTO DEMO
==============================*/

window.addEventListener("load",()=>{

    topicInput.value="Artificial Intelligence";

});

/*==================================================
 AI Curiosity Explorer
 Day 24
 Part 3 (Final)
==================================================*/

/*==============================
THEME
==============================*/

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "light"){

    document.body.classList.add("light");

    themeBtn.innerHTML =
    '<i class="fa-solid fa-sun"></i>';

}

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        localStorage.setItem("theme","light");

        themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

    }

    else{

        localStorage.setItem("theme","dark");

        themeBtn.innerHTML =
        '<i class="fa-solid fa-moon"></i>';

    }

});

/*==============================
BUILD EXPORT TEXT
==============================*/

function buildText(){

    let text="";

    text += "AI Curiosity Explorer\n";
    text += "=============================\n\n";

    text += "Topic : ";
    text += topicTitle.textContent;
    text += "\n\n";

    function addSection(title,list){

        text += title + "\n";

        text += "----------------------\n";

        list.querySelectorAll("li").forEach(item=>{

            text += "• " + item.textContent + "\n";

        });

        text += "\n";

    }

    addSection("Amazing Facts",factsList);

    addSection("Open Questions",questionsList);

    addSection("Related Fields",relatedList);

    addSection("Learn Next",learnList);

    addSection("Future Possibilities",futureList);

    text += "AI Summary\n";
    text += "----------------------\n";
    text += summaryText.textContent;

    return text;

}

/*==============================
COPY
==============================*/

copyBtn.addEventListener("click",()=>{

    if(results.classList.contains("hidden")){

        showToast("Explore a topic first.");

        return;

    }

    navigator.clipboard.writeText(buildText());

    showToast("Results copied!");

});

/*==============================
DOWNLOAD
==============================*/

downloadBtn.addEventListener("click",()=>{

    if(results.classList.contains("hidden")){

        showToast("Explore a topic first.");

        return;

    }

    const blob = new Blob(

        [buildText()],

        {

            type:"text/plain"

        }

    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download =
    topicTitle.textContent.replace(/\s+/g,"_") +
    "_Curiosity.txt";

    a.click();

    URL.revokeObjectURL(url);

    showToast("Download started!");

});

/*==============================
SHARE
==============================*/

shareBtn.addEventListener("click",async()=>{

    if(results.classList.contains("hidden")){

        showToast("Explore a topic first.");

        return;

    }

    const shareData={

        title:"AI Curiosity Explorer",

        text:buildText()

    };

    try{

        if(navigator.share){

            await navigator.share(shareData);

        }

        else{

            await navigator.clipboard.writeText(buildText());

            showToast("Copied! Share it anywhere.");

        }

    }

    catch(error){

        console.log(error);

    }

});

/*==============================
WELCOME
==============================*/

console.log(

"%cAI Curiosity Explorer Ready 🚀",

"color:#6366F1;font-size:18px;font-weight:bold;"

);