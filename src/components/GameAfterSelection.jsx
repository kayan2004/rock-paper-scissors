/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Element from "./Element";
import colorsUtil from "../utils/colorsUtil";
import { useState, useEffect } from "react";
const GameAfterSelection = ({
  choice,
  handleScore,
  score,
  handleGameEnded,
}) => {
  const [timeoutEnded, setTimeoutEnded] = useState(false);
  const [won, setWon] = useState(null);
  const [randomElement, setRandomElement] = useState(null);

  useEffect(() => {
    // Calculate randomElement inside useEffect to ensure it uses the current choice
    let elements = ["rock", "paper", "scissors"];
    elements = elements.filter((element) => element !== choice);
    const randomElement = elements[Math.floor(Math.random() * 2)];
    setRandomElement(randomElement);
    const userWon = (randomElement) => {
      if (randomElement === "rock" && choice === "paper") {
        return true;
      } else if (randomElement === "paper" && choice === "scissors") {
        return true;
      } else if (randomElement === "scissors" && choice === "rock") {
        return true;
      } else {
        return false;
      }
    };

    const timeoutId = setTimeout(() => {
      const result = userWon(randomElement);
      setWon(result);
      setTimeoutEnded(true);

      // Update the score based on the result
      if (result) {
        handleScore(score + 1);
      } else {
        handleScore(score - 1);
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [choice]);

  return (
    <>
      <div className="sm:scale-150  relative w-min">
        <svg
          className="scale-[60%] opacity-0"
          width="313"
          height="278"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="#000"
            strokeWidth="15"
            fill="none"
            opacity=".2"
            d="M156.5 262 300 8H13z"
          />
        </svg>
        <Element
          type={choice}
          position={`top-0 left-[5%]`}
          colors={colorsUtil(choice)}
        ></Element>
        <h3 className="uppercase absolute bottom-[40%] left-[11%] font-barlow font-bold text-[15px] tracking-[1.88px] text-white ">
          You picked
        </h3>

        {!timeoutEnded ? (
          <div className="absolute top-[5%] right-[5%] rounded-full h-[100px] w-[100px] bg-black opacity-10   "></div>
        ) : (
          <Element
            type={randomElement}
            position={`top-0 right-[5%]`}
            colors={colorsUtil(randomElement)}
          ></Element>
        )}

        <h3 className="uppercase absolute bottom-[40%] right-[-3%] font-barlow font-bold text-[15px] tracking-[1.88px] text-white">
          The house picked
        </h3>
      </div>

      {timeoutEnded && (
        <>
          {" "}
          <h1 className="font-bold font-barlow text-[56px] text-white uppercase text-center">
            {won ? "You win" : "you lose"}
          </h1>
          <div className="w-full flex justify-center items-center">
            <button
              className="bg-white rounded-lg uppercase font-semibold text-[16px] font-barlow tracking-[2.5px] text-greyishBlue px-16 py-4 outline-none "
              onClick={handleGameEnded}
            >
              play again
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default GameAfterSelection;
