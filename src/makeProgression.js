const makeProgression = (firstItemProgression) => {
  const stackOfProgression = [];
  for (let i = firstItemProgression; i <= firstItemProgression + 9; i += 1) {
    stackOfProgression.push(i);
  }
  return stackOfProgression;
};

export default makeProgression;
