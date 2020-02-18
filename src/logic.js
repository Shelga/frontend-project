import readlineSync from 'readline-sync';

const playGame = (nameOfAPlayer, generator) => {
  const numberOfAnswers = 3;

  for (let counter = 0; counter < numberOfAnswers; counter += 1) {
    const obj = generator();

    console.log(`Question: ${obj.task}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (counter === numberOfAnswers - 1) {
      console.log(`Congratulations, ${nameOfAPlayer}!`);
      break;
    }

    if (userAnswer === `${obj.rightAnswer}`) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${obj.rightAnswer}'.\nLet's try again, ${nameOfAPlayer}!`);
      break;
    }
  }
};

export default (description, generator) => {
  console.log('Welcome to the Brain Games');
  console.log(description);
  const nameOfPlayer = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameOfPlayer}!\n`);

  playGame(nameOfPlayer, generator);
};
