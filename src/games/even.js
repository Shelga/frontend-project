import getRandomNumber from '../randomNumber';
import playGame from '../engine';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const min = 0;
const max = 15;

const isEven = (num) => num % 2 === 0;

const createGameEven = () => {
  const number = getRandomNumber(min, max);
  const task = number.toString();
  const rightAnswer = `${isEven(number) ? 'yes' : 'no'}`;
  return { task, rightAnswer };
};

export default () => {
  playGame(description, createGameEven);
};
