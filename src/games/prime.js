import playGame from '../engine';
import getRandomNumber from '../randomNumber';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const min = 0;
const max = 15;

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let divisor = 2; (divisor * divisor) <= number; divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }
  return true;
};

const createGamePrime = () => {
  const number = getRandomNumber(min, max);
  const task = number.toString();
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  return { task, rightAnswer };
};

export default () => {
  playGame(description, createGamePrime);
};
