#!/usr/bin/games/env node


import { startGame } from '../../logic';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEven = () => {
  const number = Math.floor(Math.random() * 100);

  const task = `${number}`;

  const isEven = number % 2 === 0;

  let rightAnswer;

  if (isEven) {
    rightAnswer = 'yes';
  } else rightAnswer = 'no';

  return { task, rightAnswer };
};

startGame(description, brainEven);
