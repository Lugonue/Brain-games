const resultCalculation = (a, b, c) => {
  switch (c) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default: return NaN;
  }
};

export default resultCalculation;
