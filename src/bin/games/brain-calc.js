#!/usr/bin/games/env node

import { startGame } from '../../logic';

const description = 'What is the result of the expression?';

const brainCalc = () => {
  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);
  const arr = ['+', '-', '*'];

  const arrayRandElement = (a) => {
    const rand = Math.floor(Math.random() * a.length);
    return arr[rand];
  };

  const randomOpetation = arrayRandElement(arr);

  const task = `${number1} ${randomOpetation} ${number2}`;

  let rightAnswer;

  if (randomOpetation === '+') {
    rightAnswer = number1 + number2;
  } else if (randomOpetation === '-') {
    rightAnswer = number1 - number2;
  } else if (randomOpetation === '*') {
    rightAnswer = number1 * number2;
  }
  return { task, rightAnswer };
};

startGame(description, brainCalc);
