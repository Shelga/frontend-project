export const brainPrime = () => {
  const number = Math.floor(Math.random() * 100);

  const task = `${number}`;

  const isPrime = number >= 2
      && number % number === 0 && number % 2 !== 0 && number % 3 !== 0;

  let rightAnswer;

  if (isPrime) {
    rightAnswer = 'yes';
  } else rightAnswer = 'no';


  return { task, rightAnswer };
};
