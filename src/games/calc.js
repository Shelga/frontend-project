
import getRandomNumber from '../randomNumber';
import playGame from '../engine';

const description = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getOperation = (a) => {
  const randOperation = getRandomNumber(0, a.length - 1);
  return operations[randOperation];
};


const min = 0;
const max = 10;

const createGameCalc = () => {
  const firstNumber = getRandomNumber(min, max);
  const secondNumber = getRandomNumber(min, max);
  const randomOpetation = getOperation(operations);
  const task = `${firstNumber} ${randomOpetation} ${secondNumber}`;
  let rightAnswer;
  switch (randomOpetation) {
    case '+':
      rightAnswer = `${firstNumber + secondNumber}`;
      break;
    case '-':
      rightAnswer = `${firstNumber - secondNumber}`;
      break;
    case '*':
      rightAnswer = `${firstNumber * secondNumber}`;
      break;
    default:
  }
  return { task, rightAnswer };
};

export default () => {
  playGame(description, createGameCalc);
};
