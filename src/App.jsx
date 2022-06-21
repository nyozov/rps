import { useState } from "react";
import Choice from "./components/Choice";
import Title from "./components/Title";
import Rules from "./components/Rules";
import PicksPage from "./components/PicksPage";

function App() {
  const [score, setScore] = useState(0);
  const [choice, setChoice] = useState("");
  const [page, setPage] = useState(1);

  return (
    <div className="App bg-gradient-to-r from-[#1f3756] to-[#141539] w-screen h-screen">
      <Title score={score} />
      {page === 1 && <Choice choice={choice} setChoice={setChoice} setPage={setPage} />}
      {page === 2 && <PicksPage choice={choice} setScore={setScore} score={score} />}

      <Rules />
    </div>
  );
}

export default App;
