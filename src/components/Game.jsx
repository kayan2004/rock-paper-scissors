/* eslint-disable react/prop-types */
import { useState } from "react";
import GameAfterSelection from "./GameAfterSelection";
import GameBeforeSelection from "./GameBeforeSelection";
const Game = ({ handleScore, score }) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [choiceSelected, setChoiceSelected] = useState(null);
  var handleGameStarted = (choice) => {
    setChoiceSelected(choice);
    setGameStarted(true);
  };

  var handleGameEnded = () => {
    setGameStarted(false);
  };

  return (
    <div className="grid justify-center  ">
      {!gameStarted ? (
        <GameBeforeSelection
          handleGameStarted={handleGameStarted}
        ></GameBeforeSelection>
      ) : (
        <GameAfterSelection
          handleScore={handleScore}
          score={score}
          choice={choiceSelected}
          handleGameEnded={handleGameEnded}
        ></GameAfterSelection>
      )}
    </div>
  );
};

export default Game;
