import readlineSync from 'readline-sync';
import 'colors';

export const startGame = () => {
  const userHello = readlineSync.question(
    `\nWelcome to the Brain Games! \nAnswer ${'"yes"'.red} if the number is even, otherwise answer ${'"no"'.red}.\n\nMay I have your name? `.white,
  );
  console.log(`Hello, ${userHello}!\n`);

  const maxTries = 3;
  let rightAnswers = 0;

  while (rightAnswers < maxTries) {
    const number = Math.floor(Math.random() * 100);
    const isEven = number % 2 === 0;
    console.log(`Question: ${number}`);

    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === 'yes' && isEven) {
      console.log('Correct!');
      rightAnswers += 1;
    } else if (userAnswer === 'no' && !isEven) {
      console.log('Correct!');
      rightAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven ? 'yes' : 'no'}'.\nLet's try again, ${userHello}!`);
      rightAnswers = 0;
    }
  }
  console.log(`Congratulations, ${userHello}!`);
};
