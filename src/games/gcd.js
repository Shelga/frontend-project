import getRandomNumber from '../randomNumber';
import playGame from '../logic';

export const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGcd(num2, num1 % num2);
};

const min = 0;
const max = 15;

export const createGameGcd = () => {
  const number1 = getRandomNumber(min, max);
  const number2 = getRandomNumber(min, max);

  const task = `${number1} ${number2}`;

  const rightAnswer = getGcd(number1, number2);

  return { task, rightAnswer };
};

export default () => {
  playGame(description, createGameGcd);
};
