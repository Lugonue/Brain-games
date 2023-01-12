const isPrimary = (number) => {


  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return 'no';
  }
  return number < 2 ? 'no' : 'yes';
};

export default isPrimary;
