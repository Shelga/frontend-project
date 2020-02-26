
import getRandomNumber from '../randomNumber';
import playGame from '../logic';

export const description = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

export const createGameCalc = () => {
  const min = 0;
  const max = 10;
  const number1 = getRandomNumber(max, min);
  const number2 = getRandomNumber(max, min);


  const getrandElement = (a) => {
    const randOperation = getRandomNumber(0, a.length);
    return operations[randOperation];
  };

  const randomOpetation = getrandElement(operations);

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
  playGame(description, createGameCalc);
}
