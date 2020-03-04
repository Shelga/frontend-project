import playGame from '../engine';
import getRandomNumber from '../randomNumber';

const description = 'What number is missing in the progression?';

const min = 0;
const max = 15;

const createGameProgression = () => {
  const firstNumber = getRandomNumber(min, max);
  const step = getRandomNumber(min, max);
  const lengthOfProgression = 10;
  const randomIndex = getRandomNumber(0, lengthOfProgression - 1);
  const progressionWithoutOneElement = Array.from({ length: lengthOfProgression }).map((_, i) => {
    if (i === randomIndex) {
      return '..';
    }
    return firstNumber + step * i;
  });
  const answer = firstNumber + step * randomIndex;
  const rightAnswer = answer.toString();
  const task = progressionWithoutOneElement.join(' ');
  return { task, rightAnswer };
};

export default () => {
  playGame(description, createGameProgression);
};
