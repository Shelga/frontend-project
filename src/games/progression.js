import playGame from '../logic';
import getRandomNumber from '../randomNumber';

export const description = 'What number is missing in the progression?';

export const createGameProgression = () => {
  const min = 0;
  const max = 15;
  const number1 = getRandomNumber(max, min);
  const number2 = getRandomNumber(max, min);

  const lengthOfArray = 10;

  const randomIndex = getRandomNumber(lengthOfArray - 1, min);

  let progressionNumbers = Array.from({ length: lengthOfArray });
  progressionNumbers = progressionNumbers.map((_, i) => {
    if (i === randomIndex) {
      return '..';
    }
    if (i > 0) {
      return number1 + number2 * i;
    }

    return number1;
  });

  const rightAnswer = number1 + number2 * randomIndex;

  const task = progressionNumbers.join(' ');

  return { task, rightAnswer };
};
export function startProgression() {
  playGame(description, createGameProgression);
}
