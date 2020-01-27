import { getRandomNumber } from './randomNumber';

export const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export const brainEven = () => {
  const min = 0;
  const max = 99;
  const number = getRandomNumber(max, min);

  const task = `${number}`;

  const isEven = number % 2 === 0;

  let rightAnswer;

  if (isEven) {
    rightAnswer = 'yes';
  } else rightAnswer = 'no';

  return { task, rightAnswer };
};
