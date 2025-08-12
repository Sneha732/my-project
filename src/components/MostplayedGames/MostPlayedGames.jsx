import React from "react";
import "./MostPlayedGames.css";

import mostPlayed1 from "../Assets/mostplayed1.webp";
import mostPlayed2 from "../Assets/mostplayed2.png";
import mostPlayed3 from "../Assets/mostplayed3.png";

const MostPlayedGames = () => {
  return (
    <div className="games-section">
      <h1 className="games-title">Most Played Games</h1>
      <h2 className="games-subtitle">Of the Year</h2>
    
      <p className="games-description">
        We have the data on the most played games this year and as a result,
        games about battles and wars are very popular with gamers at this time.
        So we recommend these games to add to your collection.
      </p>

      <div className="games-grid">
        <img src={mostPlayed1} alt="Game 1" className="game-image-large" />
        <img src={mostPlayed2} alt="Game 2" className="game-image-large" />
        <img src={mostPlayed3} alt="Game 3" className="game-image-large " />
      </div>
    </div>
  );
};

export default MostPlayedGames;
