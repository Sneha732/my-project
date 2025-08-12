import React from "react";
import "./Popular.css";
import popular_2 from "../Assets/popular_2.webp";
import popular_3 from "../Assets/popular_3.webp";
import popular_1 from "../Assets/popular_1.webp";
import popular_4 from "../Assets/popular_4.webp";

const games = [
  {
    id: 1,
    name: "The Soldier war",
    category: "Actions",
    rating: 5,
    image: popular_2,
  },
  {
    id: 2,
    name: "The Warriors IX",
    category: "Actions",
    rating: 5,
    image: popular_3,
  },
  {
    id: 3,
    name: "Pubjiken Dak",
    category: "Actions",
    rating: 5,
    image: popular_1,
  },
  {
    id: 4,
    name: "Garela Menihem",
    category: "Actions",
    rating: 5,
    image: popular_4,
  },
];

const Popular = () => {
  return (
    <div className="popular">
      <h1>
        The Most Popular Game <br /> About Fighting And Wars
      </h1>

      <div className="popular-item">
        {games.map((game) => (
          <div className="popular-game" key={game.id}>
            <img className="popular-img" src={game.image} alt={game.name} />
            <div className="game-information">
              <h3>{game.name}</h3>
              <p className="category">{game.category}</p>
              <div className="starbtn">
                <p className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </p>
                <button className="download-button">Download</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
