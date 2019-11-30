import readlineSync from 'readline-sync';

const playGame = (nameOfAPlayer, generator) => {
  const maxTries = 3;
  let rightTries = 0;

  while (rightTries < maxTries) {
    const obj = generator();
    console.log(`Question: ${obj.task}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === `${obj.rightAnswer}`) {
      console.log('Correct!');
      rightTries += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${obj.rightAnswer}'.\nLet's try again, ${nameOfAPlayer}!`);
      rightTries = 0;
    }
  }
  console.log(`Congratulations, ${nameOfAPlayer}!`);
};

export const startGame = (gameDescription, generator) => {
  console.log('Welcome to the Brain Games');
  console.log(gameDescription);
  const nameOfPlayer = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameOfPlayer}!\n`);

  playGame(nameOfPlayer, generator);
};
