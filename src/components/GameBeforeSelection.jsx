/* eslint-disable react/prop-types */
import Element from "./Element";
import colorsUtil from "../utils/colorsUtil";
const GameBeforeSelection = ({ handleGameStarted }) => {
  return (
    <div className=" sm:scale-150  relative w-min">
      <svg
        className="scale-[60%]  "
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
        onClick={() => handleGameStarted("paper")}
        type="paper"
        position={`top-0 left-[5%] `}
        colors={colorsUtil("paper")}
      ></Element>
      <Element
        onClick={() => handleGameStarted("rock")}
        type="rock"
        position={`top-0 right-[5%] `}
        colors={colorsUtil("rock")}
      ></Element>
      <Element
        onClick={() => handleGameStarted("scissors")}
        type="scissors"
        position={`bottom-[8%] left-[30%] `}
        colors={colorsUtil("scissors")}
      ></Element>
    </div>
  );
};

export default GameBeforeSelection;
