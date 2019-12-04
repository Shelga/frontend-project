#!/usr/bin/games/env node


import { startGame } from '../../logic';


const description = 'What number is missing in the progression?';

const brainProgression = () => {
  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);
  const randomIndex = Math.floor(Math.random() * 9);

  let arr = Array.from({ length: 10 });
  arr = arr.map((_, i) => {
    if (i === randomIndex) {
      return '..';
    }
    if (i > 0) {
      return number1 + number2 * i;
    }

    return number1;
  });

  const rightAnswer = number1 + number2 * randomIndex;

  const task = `${arr.join(' ')}`;

  return { task, rightAnswer };
};

startGame(description, brainProgression);
