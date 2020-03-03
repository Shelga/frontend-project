import getRandomNumber from '../randomNumber';
import playGame from '../engine';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGcd(num2, num1 % num2);
};

const min = 0;
const max = 15;

const createGameGcd = () => {
  const firstNumber = getRandomNumber(min, max);
  const secondNumber = getRandomNumber(min, max);
  const task = `${firstNumber} ${secondNumber}`;
  const rightAnswer = `${getGcd(firstNumber, secondNumber)}`;
  return { task, rightAnswer };
};

export default () => {
  playGame(description, createGameGcd);
};
