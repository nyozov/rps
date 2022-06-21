import { useState, useEffect } from "react";
import Rock from "./Rock";
import Paper from "./Paper";
import Scissors from "./Scissors";

import { randomPicker } from "../randomPicker";

function PicksPage({ choice, score, setScore}) {
  const [randomChoice, setRandomChoice] = useState("");
  const [result, setResults] = useState("");

  useEffect(() => {
    setRandomChoice(randomPicker());
  }, []);

  useEffect(() => {
    setResults(rpsHelper())
   
  }, [randomChoice])

  useEffect(() => {
    if (result === "win"){
      setScore(prevScore => prevScore+1)

    }
    else if (result === "lose"){
      setScore(prevScore => prevScore-1)
    }
   
  }, [result])

  const rpsHelper = () => {
    if (
      (randomChoice === "scissors" && choice === "rock") ||
      (randomChoice === "paper" && choice === "scissors") ||
      (randomChoice === "rock" && choice === "paper")
    ) {
      return "win";
    } else if (
      (choice === "scissors" && randomChoice === "rock") ||
      (choice === "paper" && randomChoice === "scissors") ||
      (choice === "rock" && randomChoice === "paper")
    ) {
      return "lose";
    }
    else {
      return "tie"
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="border flex justify-between p-6 text-white text-center text-xl w-3/4 items-center">
        <div className="p-2">
          <p>You Picked</p>
          {choice === "rock" && <Rock />}
          {choice === "scissors" && <Scissors />}
          {choice === "paper" && <Paper />}
        </div>
        <div>
          {result}
        </div>
        <div>
          <p>The House Picked</p>
          {randomChoice === "rock" && <Rock />}
          {randomChoice === "scissors" && <Scissors />}
          {randomChoice === "paper" && <Paper />}
          {/* <div className="bg-gray-800 w-32 h-32 rounded-full shadow-lg"></div> */}
        </div>
      </div>
    </div>
  );
}

export default PicksPage;
