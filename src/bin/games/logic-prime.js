import { startGame } from '../../logic';
import { getRandomNumber } from '../../randomNumber';

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const min = 0;
const max = 15;


const isPrime = (num) => {
  if (num >= 2 && num % num === 0 && num % 2 !== 0 && num % 3 !== 0) {
    return true;
  }
  return false;
};


export const brainPrime = () => {
  const number = getRandomNumber(max, min);
  const task = `${number}`;

  let rightAnswer;

  if (isPrime(number)) {
    rightAnswer = 'yes';
  } else rightAnswer = 'no';


  return { task, rightAnswer };
};
export function startPrime() {
  startGame(description, brainPrime);
}
