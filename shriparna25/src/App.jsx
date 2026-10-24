import "./App.css";
import { useState } from "react";


function App() {

const [vibe, setvibe] = useState([]);
const [speed, setspeed] = useState("Relaxed");
const [plan, setplan] = useState(null);

const activities = {
  "Seaside": [
    "Juhu Beach — take a breather by the water.",
    "Gorai Beach — Accessible only by ferry, a quiet escape.",
    "Aksa Beach, Malad — clean & calm, perfect for a walk.",
    "Marine Drive — catch the sea breeze."
  ],
  "Food Heaven": [
    "Café Universal — start with an Irani café meal.",
    "Ram Ashray — try a South Indian cuisine.",
    "Aaram Vada Pav — grab a Mumbai snack.",
    "K. Rustom Ice Cream — finish with an ice cream.",
    "Pancham Puriwala - try the famous aamras puri.",
    "Elco Pani Puri — Shah Rukh's favorite!",
    "Juhu Beach - endless street food options, from bhel to pav bhaji."
  ],

  "Art & Heritage": [
    "Jahangir Art Gallery — see the contemporary art exhibits.",
    "Kala Ghoda — explore its art and heritage lanes.",
    "David Sassoon Library — see the historic building.",
    "Dr. Bhau Daji Lad Museum — browse Mumbai’s history.",
    "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya — explore the museum’s collection."
  ],
  "Adrenaline Quests": [
    "Sanjay Gandhi National Park — hike to the Kanheri Caves.",
    "Worli Sea Link — rent a bike and ride across the bridge.",
    "Malabar Hill Trail — climb to the top for a view of the city.",
    "Powai Lake — rent a kayak and paddle around the lake."
  ],
  "Nerdy Bombay": [
    "Kitaab Khana — browse the Fort bookstore.",
    "Nehru Science Centre — explore hands-on science exhibits,cyberlabs and more.",
    "David Sassoon Library — take in the striking historic building filled with books.",
    "Asiatic Society — take in its architecture and history.",
    "Paradox Musem — explore the interactive museum of illusions."
  ]
};

function buildMyDay() {

  let stopCount;

if (speed === "Relaxed") {
  stopCount = 3;
} else if (speed=== "Cut-to-cut") {
  stopCount = 5;
} else {
  stopCount=4;
}

  const selectedvibe =[...vibe].sort(() => Math.random() - 0.5);
  const shuffledActivities = {};
  const stops = [];

  for (let i = 0; i < selectedvibe.length; i++) {
  const selectedVibe = selectedvibe[i];

  shuffledActivities[selectedVibe] = activities[selectedVibe]
    
    .sort(() => Math.random() - 0.5);
}
  let round = 0;

  while (stops.length < stopCount) {
    let addedActivity = false;

    for (let i = 0; i <selectedvibe.length; i++) {
      const selectedVibe = selectedvibe[i];
      const activity =shuffledActivities[selectedVibe][round];

      if (activity && stops.length< stopCount) {
        stops.push(activity);
        addedActivity = true;
      } }
    if (!addedActivity) {
      break;
    }
    round++;
  }

  setplan(stops);
}

  return (
    <main>

      <details className="about">
  <summary aria-label="About this project">?</summary>
  <p>
    चला, Mumbai! is a mood-based one day planner. For the times, when you don't feel like planning your day, but want to make the most of it. Pick your pace and vibe, and let the website build a day for you! 
  </p>
</details>
      <div className="head">
     <h1 className="title">
  <span>चला,</span>
  <img src="/mumbaisticker.png" alt="Mumbai" />
</h1>
      <h2>One Day, By the Bay, Your Way.</h2>

      <a className="planbutton" href="#planner"> Plan My Day </a>
      </div>
<section id="planner">

  <h2>Pick your kind of day</h2>
  <h3>Pick your pace</h3>

    <div className="speedoptions">
<label>
  <input type="radio" name="pace" value="Relaxed"  checked={speed==="Relaxed"}  onChange={() =>  setspeed("Relaxed")} />
  Relaxed
</label>

<label>
  <input type="radio" name="pace" value="A little bit of everything" checked={speed==="A little bit of everything"} onChange={()=>setspeed("A little bit of everything")} />
  A little bit of everything
</label>

<label>
  <input type="radio" name="pace" value="Cut-to-cut" checked={speed==="Cut-to-cut"} onChange={()=>setspeed("Cut-to-cut")} />
  Cut-to-cut
</label>
  
  </div>

<h3> Pick your vibe </h3>

<div className= "vibeoptions">

  <label>
  <input type="checkbox" name="vibe" value="Seaside" checked={vibe.includes("Seaside")} onChange={() =>{

    if (vibe.includes("Seaside")) {
      setvibe(vibe.filter((vibe) => vibe !== "Seaside"));
    } else {
      setvibe([...vibe, "Seaside"]);
    }

  }} />
  Seaside
</label>

  <label>
  <input type="checkbox" name="vibe" value="Food Heaven" checked={vibe.includes("Food Heaven")} onChange={() => {
    if (vibe.includes("Food Heaven")) {
      setvibe(vibe.filter((vibe) => vibe !== "Food Heaven"));
    } else {
      setvibe([...vibe, "Food Heaven"]);
    }
  }}
/>
  Food Heaven
</label>

<label>
  <input type="checkbox" name="vibe" value="Art & Heritage" checked={vibe.includes("Art & Heritage")}
  onChange={() => {
    if (vibe.includes("Art & Heritage")) {
      setvibe(vibe.filter((vibe) => vibe !== "Art & Heritage"));
    } else {
      setvibe([...vibe, "Art & Heritage"]);
    }
  }}
/>
  Art & Heritage
</label>

<label>
  <input type="checkbox" name="vibe" value="Adrenaline Quests" checked={vibe.includes("Adrenaline Quests")}
  onChange={() => {
    if (vibe.includes("Adrenaline Quests")) {
      setvibe(vibe.filter((vibe) => vibe !== "Adrenaline Quests"));
    } else {
      setvibe([...vibe, "Adrenaline Quests"]);
    }
  }}
/>
  Adrenaline Quests
</label>

<label>
  <input type="checkbox" name="vibe" value="Nerdy Bombay"
  checked={vibe.includes("Nerdy Bombay")}
  onChange={() => {
    if (vibe.includes("Nerdy Bombay")) {
      setvibe(vibe.filter((vibe) => vibe !== "Nerdy Bombay"));
    } else {
      setvibe([...vibe, "Nerdy Bombay"]);
    }
  }}
/>
  Nerdy Bombay
</label>

<button
  className="buildday"
  type="button"
  onClick={buildMyDay}
>
  Build My Day
</button>
</div>

{plan !== null && (

  <div id="builder" className="builtplan">

    <h3>Your Mumbai day</h3>
    {plan.length === 0 ? (
      <p>Choose at least one vibe first.</p>
    ) : (
      plan.map((stop, index) => (
        <p key={index}>{stop}</p>
      ))
    )}
  </div>
)}

<h3>Or maybe a ready-made plan?</h3>

<div className="readymade">

  <article className="plan1">
    <h4>Old Money Bombay</h4>
    <p><strong>Café Universal:</strong> Start with an old-school Irani café breakfast.</p>
    <p><strong>Ballard Estate:</strong> Stroll past grand buildings from Bombay’s trading-era past.</p>
    <p><strong>Kitaab Khana:</strong> Browse a thoughtfully curated Fort bookstore.</p>
    <p><strong>Kala Ghoda:</strong> Explore art, heritage buildings, and lively lanes.</p>
    <p><strong>Aaram Vada Pav:</strong> Grab a classic Mumbai snack near CST.</p>
    <p><strong>Marine Drive:</strong> End the day watching the sunset over the sea.</p>
  </article>

  <article className="plan2">
    <h4>Temple Run!</h4>
    <p><strong>Babulnath Temple:</strong> Visit a historic Shiva temple above the city.</p>
    <p><strong>ISKCON Chowpatty:</strong> Take in the peaceful atmosphere near the seafront.</p>
    <p><strong>Girgaon Chowpatty:</strong> Pause for a local food break by the beach.</p>
    <p><strong>Siddhivinayak Temple:</strong> Finish with darshan at Mumbai’s beloved Ganpati temple.</p>
  </article>

  <article className="plan3">
    <h4>Pages of Bombay</h4>
    <p><strong>Asiatic Society:</strong> Admire the grand steps and heritage architecture.</p>
    <p><strong>Kitaab Khana:</strong> Wander through an independent bookstore.</p>
    <p><strong>David Sassoon Library:</strong> Take in the striking historic building.</p>
    <p><strong>Marine Drive and Chowpatty:</strong> Watch the sunset, then have dinner nearby.</p>
  </article>
</div>

</section>
<footer className="footer">
  <p>Built with love in Mumbai by <strong>Shriparna Ghate.</strong></p>
  <a href="https://www.linkedin.com/in/shriparna-ghate-99973b2ab?utm_source=share_via&utm_content=profile&utm_medium=member_android" >
    LinkedIn
  </a>
  <span> · </span>
  <a href="https://github.com/shriparna25" >
    GitHub
  </a>
</footer>

    </main>
    
  )
}

export default App 