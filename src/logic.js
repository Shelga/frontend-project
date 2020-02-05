import readlineSync from 'readline-sync';

const playGame = (nameOfAPlayer, generator) => {
  const rightAnswersToWin = 3;
  let numberOfRightAnswers = 0;

  while (numberOfRightAnswers < rightAnswersToWin) {
    const obj = generator();
    console.log(`Question: ${obj.task}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === `${obj.rightAnswer}`) {
      console.log('Correct!');
      numberOfRightAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${obj.rightAnswer}'.\nLet's try again, ${nameOfAPlayer}!`);
      numberOfRightAnswers = 0;
    }
  }
  console.log(`Congratulations, ${nameOfAPlayer}!`);
};


export const startGame = (description, generator) => {
  console.log('Welcome to the Brain Games');
  console.log(description);
  const nameOfPlayer = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameOfPlayer}!\n`);

  playGame(nameOfPlayer, generator);
};
