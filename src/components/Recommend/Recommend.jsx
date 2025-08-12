import React from "react";
import "./Recommend.css";
import recommendGame1 from "../Assets/weekGame1.png";
import recommendGame2 from "../Assets/weekGame2.png";
import recommendGame3 from "../Assets/weekGame3.png";
import recommendGame4 from "../Assets/weekGame4.png";

const games = [
  {
    id: 1,
    title: "The World's strongest human battle",
    category: "Action, sport",
    description:
      "This is a game about the battle of the strongest humans of the earth",
    image: recommendGame1,
  },
  {
    id: 2,
    title: "Adventure in snake cave danger",
    category: "Adventure, Actions",
    description:
      "Adventure is a dangerous snake cave with friends who were going on vacation",
    image: recommendGame2,
  },
  {
    id: 3,
    title: "Super Hero wearing spider mask",
    category: "Action, Adventure",
    description: "The thrilling life of a masked hero saving the city.",
    image: recommendGame3,
  },
  {
    id: 4,
    title: "Masked hero with a million powers",
    category: "Action, Fantasy",
    description: "A journey of a hero blessed with infinite abilities.",
    image: recommendGame4,
  },
];

const Recommend = () => {
  return (
    <div className="recommend-container">
      <div className="recommend-header">
        <h2>
          Game Recomended For <br /> You This Week
        </h2>
        <div className="nav-buttons">
          <button className="nav-btn light">&#8592;</button>
          <button className="nav-btn dark">&#8594;</button>
        </div>
      </div>

      <div className="recommend-list">
        {games.map((game) => (
          <div className="game-card" key={game.id}>
            <img src={game.image} alt={game.title} className="game-image" />
            <div className="game-info">
              <h3 className="game-title">{game.title}</h3>
              <p className="game-category">{game.category}</p>
              <p className="game-description">{game.description}</p>
              <button className="download-btn">Download</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommend;
