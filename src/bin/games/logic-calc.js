
import { getRandomNumber } from '../../randomNumber';
import { startGame } from '../../logic';

export const description = 'What is the result of the expression?';

const arrOfOperation = ['+', '-', '*'];

export const brainCalc = () => {
  const min = 0;
  const max = 99;
  const number1 = getRandomNumber(max, min);
  const number2 = getRandomNumber(max, min);


  const arrayRandElement = (a) => {
    const rand = getRandomNumber(0, a.length);
    return arrOfOperation[rand];
  };

  const randomOpetation = arrayRandElement(arrOfOperation);

  const task = `${number1} ${randomOpetation} ${number2}`;

  let rightAnswer;

  switch (randomOpetation) {
    case '+':
      rightAnswer = number1 + number2;
      break;
    case '-':
      rightAnswer = number1 - number2;
      break;
    case '*':
      rightAnswer = number1 * number2;
      break;
    default:
  }
  return { task, rightAnswer };
};

export function startCalc() {
  startGame(description, brainCalc);
}
