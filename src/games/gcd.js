import getRandomNumber from '../randomNumber';
import playGame from '../engine';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return getGcd(number2, number1 % number2);
};

const min = 0;
const max = 15;

const createGameGcd = () => {
  const firstNumber = getRandomNumber(min, max);
  const secondNumber = getRandomNumber(min, max);
  const task = `${firstNumber} ${secondNumber}`;
  const rightAnswer = (getGcd(firstNumber, secondNumber)).toString();
  return { task, rightAnswer };
};

export default () => {
  playGame(description, createGameGcd);
};
