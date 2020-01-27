
import { getRandomNumber } from './randomNumber';

export const description = 'What is the result of the expression?';

export const brainCalc = () => {
  const min = 0;
  const max = 99;
  const number1 = getRandomNumber(max, min);
  const number2 = getRandomNumber(max, min);
  const arr = ['+', '-', '*'];

  const arrayRandElement = (a) => {
    const rand = Math.floor(Math.random() * a.length);
    return arr[rand];
  };

  const randomOpetation = arrayRandElement(arr);

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
