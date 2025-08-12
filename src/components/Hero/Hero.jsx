import React from "react";
import "./Hero.css";
import hero_img from "../Assets/hero_img.webp";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div>
          <div className="content">
            <p className="body-heading">Play Game</p>
          </div>
          <p className="body-heading">Everytime Always</p>
          <p className="body-heading">Be Winner And</p>
          <p className="body-heading">Strong</p>

          <p className="body-text">
            Improve your gaming skills by playing games that are
          </p>
          <p className="body-text">
            currently popular so that you don't go out of style improve
          </p>
          <p className="body-text">skills</p>
        </div>

        <div className="buttons">
          <div className="hero-btn primary">Get Started</div>
          <div className="hero-btn secondary">Learn More</div>
        </div>
      </div>

      <div className="hero-right">
        <img src={hero_img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
