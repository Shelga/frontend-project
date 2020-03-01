
import getRandomNumber from '../randomNumber';
import playGame from '../logic';

const description = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const createGameCalc = () => {
  const min = 0;
  const max = 10;
  const number1 = getRandomNumber(min, max);
  const number2 = getRandomNumber(min, max);


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

export default () => {
  playGame(description, createGameCalc);
};
