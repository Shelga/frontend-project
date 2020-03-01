import playGame from '../logic';
import getRandomNumber from '../randomNumber';

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const min = 0;
const max = 15;


const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let d = 2; (d * d) <= num; d + 1) {
    if (num % d === 0) {
      return false;
    }
  }
  return true;
};

export const createGamePrime = () => {
  const number = getRandomNumber(min, max);
  const task = number.toString();

  const rightAnswer = isPrime(number) ? 'yes' : 'no';

  return { task, rightAnswer };
};
export default () => {
  playGame(description, createGamePrime);
};
