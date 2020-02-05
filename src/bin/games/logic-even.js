import { getRandomNumber } from '../../randomNumber';
import { startGame } from '../../logic';

export const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const min = 0;
const max = 15;

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

export const brainEven = () => {
  const number = getRandomNumber(max, min);
  const task = `${number}`;

  let rightAnswer;

  if (isEven(number)) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }

  return { task, rightAnswer };
};

export function startEven() {
  startGame(description, brainEven);
}
