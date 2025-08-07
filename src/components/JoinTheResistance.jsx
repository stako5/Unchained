// src/components/JoinTheResistance.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";


import "../styles/components/joinTheResistance.css";
import "../styles/components/waitlistform.css";

import ArtistsCard from "../components/ArtistsCard";
import VenuesCard from "./VenuesCard";
import FansCard from "./FansCard";
import HandleEmail from "./HandleEmail";
import EventsSection from "./EventsSection";


const JoinTheResistance = () => {


  const navigate = useNavigate("");

  navigate("/Home/Events")
  
  const [showCTAOnly] = useState(true);

  if (showCTAOnly === false) {
    return <EventsSection/>;
  }


  return (
    <section className="join-the-resistance">
      <header>
        <h1>Ready to join the Resistance?</h1>
        <p> Reward fans, Dismantle the monopoly, Unchain from the 🎟️ Master.</p>
      </header>

      <div className="audience-cards">
        <button onClick={() => navigate("/Home/Events")}>
          <ArtistsCard/>
        </button>

        <button onClick={() => showCTAOnly(false)}>
          <VenuesCard/>
        </button>

        <button onClick={() => showCTAOnly(false)}>
          <FansCard/>
        </button>
      </div>
      <div>
        <HandleEmail/>
      </div>
     
    </section>
  );
};

export default JoinTheResistance;

// <section>
//   <h1>Join the Resistance</h1>
//   <p>Unchain ticketing. Reward fans. Dismantle the monopoly.</p>

//   <div class="cards">
//     <div class="card">Fans CTA</div>
//     <div class="card">Artists CTA</div>
//     <div class="card">Venues CTA</div>
//   </div>

//   <form>
//     <input type="email" placeholder="Enter your email" />
//     <button>Join the Resistance</button>
//   </form>
// </section>;
