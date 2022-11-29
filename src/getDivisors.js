const getDivisors = (num) => {
  const Divisors = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      Divisors.push(i);
    }
  }
  return Divisors;
};

export default getDivisors;
