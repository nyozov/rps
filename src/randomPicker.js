const randomPicker = () => {
  const randomPick = Math.floor(Math.random() * 3);

  if (randomPick === 0) {
    return "rock";
  } else if (randomPick === 1) {
    return "paper";
  } else if (randomPick === 2) {
    return "scissors";
  }
};

export {randomPicker}
