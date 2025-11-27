import React from "react";
import CardsInfo from "./CardsInfo";
import "./CardsGrid.css";

function CardsGrid() {
  return (
    <div className="cardsGrid">
      {CardsInfo.map((card, index) => {
        return (
          <div className="card">
            <img src={card.image} alt="card" />
            <div className="info">
              <h2>{card.title}</h2>
              <p>{card.description}</p>
              <button>learn more</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardsGrid;
