import { useState, useEffect } from "react";
import Rock from "./Rock";
import Paper from "./Paper";
import Scissors from "./Scissors";

import { randomPicker } from "../randomPicker";

function PicksPage({ choice, score, setScore, setPage }) {
  const [randomChoice, setRandomChoice] = useState("");
  const [result, setResults] = useState("");

  useEffect(() => {
    setRandomChoice(randomPicker());
  }, []);

  useEffect(() => {
    setResults(rpsHelper());
  }, [randomChoice]);

  useEffect(() => {
    if (result === "win") {
      setScore((prevScore) => prevScore + 1);
    } else if (result === "lose") {
      setScore((prevScore) => prevScore - 1);
    }
  }, [result]);

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
    } else {
      return "tie";
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="border flex justify-between p-6 text-white text-center text-xl w-3/4 items-center">
        <div className="p-2">
          <p>You Picked</p>

          <div className='mt-6'>

          {choice === "rock" && <Rock result2={result}/>}
          {choice === "scissors" && <Scissors result2={result}/>}
          {choice === "paper" && <Paper result2={result}/>}
          </div>
        </div>
        <div>
          {result === "lose" && <p className="text-4xl font-bold">You Lose</p>}
          {result === "win" && <p className="text-4xl font-bold">You Win</p>}
          {result === "tie" && <p className="text-4xl font-bold">Tie</p>}
          {result && (
            <div
            onClick={()=>setPage(1)}
            
            className="bg-white cursor-pointer hover:bg-gray-200 rounded mt-2 p-1 px-8 text-red-500 shadow">
              Play Again
            </div>
          )}
        </div>
        <div>
          <p>The House Picked</p>
          <div className=''>
          {randomChoice === "rock" && <Rock result={result}/>}
          {randomChoice === "scissors" && <Scissors result={result}/>}
          {randomChoice === "paper" && <Paper result={result} />}
          </div>
          {/* <div className="bg-gray-800 w-32 h-32 rounded-full shadow-lg"></div> */}
        </div>
      </div>
    </div>
  );
}

export default PicksPage;
