import React from "react";
import "./Game.css";
import best_game from "../Assets/best_game.webp";
const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-right">
        <img src={best_game} alt="" />
      </div>

      <div className="offers-left">
        <h1>The Best Game That </h1>
        <h1>Will Get Your </h1>
        <h1>Adrenaline Pumping</h1>
        <p>This is the best episode that we present you, we collect all over</p>
        <p>asia and we present it to you, our special customer, this is an</p>
        <p>episode discussing the design of various types of design.</p>
        <div className="buttons">
          <div className="hero-btn primary">Get Started</div>
          <div className="hero-btn secondary">Learn More</div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
