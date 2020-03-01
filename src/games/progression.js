import playGame from '../logic';
import getRandomNumber from '../randomNumber';

const description = 'What number is missing in the progression?';

const min = 0;
const max = 15;

const createGameProgression = () => {
  const firstNumberOfProgression = getRandomNumber(min, max);
  const stepOfProgression = getRandomNumber(min, max);

  const lengthOfProgression = 10;

  const randomIndex = getRandomNumber(lengthOfProgression - 1, 0);

  const progression = Array.from({ length: lengthOfProgression }).map((_, i) => {
    if (i === randomIndex) {
      return '..';
    }

    return firstNumberOfProgression + stepOfProgression * i;
  });

  const rightAnswer = firstNumberOfProgression + stepOfProgression * randomIndex;

  const task = progression.join(' ');

  return { task, rightAnswer };
};
export default () => {
  playGame(description, createGameProgression);
};
