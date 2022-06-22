import { useState, useEffect } from "react";
import Rock from "./Rock";
import Paper from "./Paper";
import Scissors from "./Scissors";
import { motion } from "framer-motion";

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
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex justify-between w-11/12 p-6 text-white text-center text-xl sm:w-3/4 items-center">
        <div className="p-2 flex flex-col-reverse md:flex-col">
          <p>You Picked</p>

          <div className="mb-6 md:mt-6">
            {choice === "rock" && <Rock result2={result} />}
            {choice === "scissors" && <Scissors result2={result} />}
            {choice === "paper" && <Paper result2={result} />}
          </div>
        </div>

        <motion.div
          className="hidden md:block
        "
          initial={{ opacity: 0, y: -100 }}
          transition={{ delay: 0.5 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {result === "lose" && <p className="text-4xl font-bold">You Lose</p>}
          {result === "win" && <p className="text-4xl font-bold">You Win</p>}
          {result === "tie" && <p className="text-4xl font-bold">Tie</p>}
          {result && (
            <div
              onClick={() => setPage(1)}
              className="bg-white cursor-pointer text-[#2a46c0] rounded mt-2 p-1 px-8 hover:text-red-500 shadow"
            >
              Play Again
            </div>
          )}
        </motion.div>

        <div className='p-2 flex flex-col-reverse md:flex-col'>
          <p className="text-lg font-bold">The House Picked</p>
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
            animate={{ opacity: 1 }}
            className="mb-6 md:mt-6"
          >
            {randomChoice === "rock" && <Rock result={result} />}
            {randomChoice === "scissors" && <Scissors result={result} />}
            {randomChoice === "paper" && <Paper result={result} />}
          </motion.div>
          {/* <div className="bg-gray-800 w-32 h-32 rounded-full shadow-lg"></div> */}
        </div>
        
      </div>
      <motion.div
          className="md:hidden mt-24 w-full flex justify-center flex-col items-center
        "
          initial={{ opacity: 0, y: -100 }}
          transition={{ delay: 0.5 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {result === "lose" && <p className="text-4xl font-bold text-white text-center">You Lose</p>}
          {result === "win" && <p className="text-4xl font-bold text-white text-center">You Win</p>}
          {result === "tie" && <p className="text-4xl font-bold text-white text-center">Tie</p>}
          {result && (
            <div
              onClick={() => setPage(1)}
              className="bg-white cursor-pointer w-7/12 flex justify-center items-center rounded-xl text-2xl font-semibold mt-2 p-4 px-8 text-[#2a46c0] hover:text-red-500 shadow-lg"
            >
              Play Again
            </div>
          )}
        </motion.div>
    </div>
  );
}

export default PicksPage;
