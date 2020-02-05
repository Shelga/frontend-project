import { getRandomNumber } from '../../randomNumber';
import { startGame } from '../../logic';

export const description = 'Find the greatest common divisor of given numbers.';

const getTheGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getTheGcd(num2, num1 % num2);
};

export const brainGcd = () => {
  const min = 0;
  const max = 15;
  const number1 = getRandomNumber(max, min);
  const number2 = getRandomNumber(max, min);

  const task = `${number1} ${number2}`;

  const rightAnswer = getTheGcd(number1, number2);

  return { task, rightAnswer };
};

export function startGcd() {
  startGame(description, brainGcd);
}
