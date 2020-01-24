#!/usr/bin/games/env node


import { startGame } from '../../logic';
import { isEven } from '../../logic-even';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEven = () => {
  const number = Math.floor(Math.random() * 100);

  const task = `${number}`;

  let rightAnswer;

  if (isEven) {
    rightAnswer = 'yes';
  } else rightAnswer = 'no';

  return { task, rightAnswer };
};

startGame(description, brainEven);
