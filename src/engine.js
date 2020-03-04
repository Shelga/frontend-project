import readlineSync from 'readline-sync';

const numberOfAnswers = 3;

const playGame = (nameOfAPlayer, generator) => {
  for (let counter = 1; counter <= numberOfAnswers; counter += 1) {
    const getobject = generator();
    console.log(`Question: ${getobject.task}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== getobject.rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${getobject.rightAnswer}'.`);
      console.log(`Let's try again, ${nameOfAPlayer}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${nameOfAPlayer}!`);
};

export default (description, generator) => {
  console.log('Welcome to the Brain Games');
  console.log(description);
  const nameOfPlayer = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameOfPlayer}!\n`);

  playGame(nameOfPlayer, generator);
};
