import readlineSync from 'readline-sync';

const numberOfAnswers = 3;

const playGame = (nameOfAPlayer, generator) => {
  for (let counter = 1; counter <= numberOfAnswers; counter += 1) {
    const obj = generator();
    console.log(`Question: ${obj.task}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (counter === numberOfAnswers) {
      console.log(`Congratulations, ${nameOfAPlayer}!`);
      return;
    }

    if (userAnswer !== obj.rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${obj.rightAnswer}'.`);
      console.log(`Let's try again, ${nameOfAPlayer}!`);
      return;
    }
    console.log('Correct!');
  }
};

export default (description, generator) => {
  console.log('Welcome to the Brain Games');
  console.log(description);
  const nameOfPlayer = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameOfPlayer}!\n`);

  playGame(nameOfPlayer, generator);
};
