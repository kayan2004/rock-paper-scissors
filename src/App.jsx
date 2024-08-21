import "./App.css";
import Rules from "./components/Rules";
import Game from "./components/Game";
import Score from "./components/Score";
import { useState } from "react";
function App() {
  const [score, setScore] = useState(0);

  const handleScore = (value) => {
    setScore(value);
  };
  return (
    <div className=" w-screen h-screen p-5 flex flex-col justify-between max-w-[700px]">
      <Score score={score}></Score>
      <Game handleScore={handleScore} score={score}></Game>
      <Rules></Rules>
    </div>
  );
}

export default App;
