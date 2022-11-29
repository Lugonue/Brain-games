import getDivisors from './getDivisors.js';

const greatestDivisor = (num1, num2) => {
  const num1Devisors = getDivisors(num1);
  const num2Devisors = getDivisors(num2);
  const commonDevisors = [];
  for (let i = 0; i < num1Devisors.length; i += 1) {
    if (num2Devisors.includes(num1Devisors[i])) {
      commonDevisors.push(num1Devisors[i]);
    }
  }
  return commonDevisors.length === 0 ? 0 : Math.max(...commonDevisors);
};

export default greatestDivisor;
