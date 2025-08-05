// src/components/JoinTheResistance.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { storeEmail } from "../utils/emailStorage";
import "../styles/components/joinTheResistance.css";

const JoinTheResistance = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      storeEmail(email);
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section>
      <header>
        <h1>Ready to join the Resistance?</h1>
        <p>Unchained from the Masters, Reward fans, Dismantle the monopoly.</p>
      </header>

      <div className="audience-cards">
        <div className="card">
          <h2>🎟️ Fans</h2>
          <p>
            Secure your ticket, claim exclusive rewards, and build the
            underground movement that brings Fans, Artists and Venues together
            to overthrow the 🎟️ "Master."
          </p>
        </div>
        <div className="card">
          <h2>🎤 Artists</h2>
          <p>
            Connect directly with fan base, build your following, reward
            loyalty, protect your IP, royalties, and{" "}
            <Link
              to={{ pathname: "https://www.base.org/ecosystem/" }}
              target="blank"
            >
              {" "}
              @Base{" "}
            </Link>{" "}
            from excessive fees.
          </p>
        </div>
        <div className="card">
          <h2>🏟️ Venues</h2>
          <p>
            Next generation ticketing now! Smart contracts prevent fraud,
            control resale, build trust and a community around your venue while
            we handle your ticketing with enhanced sales analytics and no bank
            fees on USD stablecoin transactions.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {submitted ? (
          <div className="resistance-confirmation">
            <h2>📡 Message Received 📡 </h2>
            <p>
              <h4>You've reached the resistance!</h4> Watch your inbox... Once
              you've been vetted, <strong>The Resistance</strong> will contact
              you about how you can <strong>fight</strong> the oppression from
              excessive fees and <strong>overthrow</strong> the{" "}
              <strong>🎟️ "MASTER"</strong>!
            </p>
          </div>
        ) : (
          <>
            <label htmlFor="email">Sign up today for early access:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(email) => setEmail(email.target.value)}
              placeholder="you@example.com"
              required
            />
            <button type="submit">Join the Resistance</button>
          </>
        )}
      </form>
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
