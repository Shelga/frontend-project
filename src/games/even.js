import getRandomNumber from '../randomNumber';
import startGame from '../logic';

export const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const min = 0;
const max = 15;

const isEven = (num) => num % 2 === 0;

export const createGameEven = () => {
  const number = getRandomNumber(max, min);
  const task = number.toString();

  const rightAnswer = isEven(number) ? 'yes' : 'no';

  return { task, rightAnswer };
};

export function startEven() {
  startGame(description, createGameEven);
}
