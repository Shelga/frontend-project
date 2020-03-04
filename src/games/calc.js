import getRandomNumber from '../randomNumber';
import playGame from '../engine';

const description = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const getRandomIndex = () => {
  const randomOperationIndex = getRandomNumber(0, operations.length - 1);
  return operations[randomOperationIndex];
};

const min = 0;
const max = 10;

const createGameCalc = () => {
  const firstNumber = getRandomNumber(min, max);
  const secondNumber = getRandomNumber(min, max);
  const randomOpetation = getRandomIndex(operations);
  const task = `${firstNumber} ${randomOpetation} ${secondNumber}`;
  let rightAnswer;
  switch (randomOpetation) {
    case '+':
      rightAnswer = (firstNumber + secondNumber).toString();
      break;
    case '-':
      rightAnswer = (firstNumber - secondNumber).toString();
      break;
    case '*':
      rightAnswer = (firstNumber * secondNumber).toString();
      break;
    default:
  }
  return { task, rightAnswer };
};

export default () => {
  playGame(description, createGameCalc);
};
