import { useState } from "react";
import { getRandomBoolean, getRandomInteger } from "../utils/getRandomId";

export default function Test6() {
  const [card, setCard] = useState(null);
  const [goldCardCound, setGoldCardCount] = useState(0);
  const [round, setRound] = useState(0);

  const isGameOver = round > 5;

  const handlePlaceCard = (nextCard) => {
    if (isGameOver) {
      throw Error("Game already ended");
    }
    setCard(nextCard);
    if (nextCard.gold) {
      if (goldCardCound <= 3) {
        setGoldCardCount(goldCardCound + 1);
      } else {
        setGoldCardCount(0);
        setRound(round + 1);
        if (round === 5) {
          console.log("Good game!");
        }
      }
    }
  };

  return (
    <div>
      <h1>Gold Game</h1>
      <div>
        <button>Place Random Card</button>
      </div>
      <div className="result">
        <span
          className="gold"
          onClick={() =>
            handlePaceCard({
              id: getRandomInteger(1, 100),
              gold: getRandomBoolean(),
            })
          }
        >
          Gold Card: {glodCardCound}
        </span>
        <span className="round">Round: {round}</span>
      </div>
    </div>
  );
}
