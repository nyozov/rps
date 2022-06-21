

import Rock from "./Rock";
import Paper from "./Paper";
import Scissors from "./Scissors";

function Choice({ setChoice, setPage }) {


  const handleChoice = (choice) => {
    setChoice(choice);
    setPage(2);
  };
  return (
    <div className="w-full flex justify-center items-center mt-24">
      <div className="w-[325px] h-full relative flex justify-center items-center flex-col p-12">
        <svg width="313" height="278" xmlns="http://www.w3.org/2000/svg">
          <path
            stroke="#000"
            stroke-width="15"
            fill="none"
            opacity=".2"
            d="M156.5 262 300 8H13z"
          />
        </svg>
        {/* scissors */}
        <Scissors absolute clickable handleChoice={handleChoice} />
        {/* rock */}
        <Rock absolute clickable handleChoice={handleChoice} />
        {/* paper */}
        <Paper absolute clickable handleChoice={handleChoice} />
      </div>
    </div>
  );
}

export default Choice;
