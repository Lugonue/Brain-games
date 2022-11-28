const greatestDevisor = (a, b) => {
  const aDivisor = [];
  const bDivisor = [];
  const stackDivisors = [];
  for (let i = 1; i <= a; i += 1) {
    if (a % i === 0) {
      aDivisor.push(i);
    }
  }
  for (let i = 1; i <= b; i += 1) {
    if (b % i === 0) {
      bDivisor.push(i);
    }
  }
  if (aDivisor.length < bDivisor.length) {
    for (let i = 0; i < aDivisor.length; i += 1) {
      if (bDivisor.includes(aDivisor[i])) {
        stackDivisors.push(aDivisor[i]);
      }
    }
  } else {
    for (let i = 0; i < bDivisor.length; i += 1) {
      if (aDivisor.includes(bDivisor[i])) {
        stackDivisors.push(bDivisor[i]);
      }
    }
  }
  return stackDivisors.length === 0 ? 0 : Math.max(...stackDivisors);
};

export default greatestDevisor;
