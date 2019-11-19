import readlineSync from 'readline-sync';

const userName = readlineSync.question(
  'Welcome to the Brain Games!  \n May I have your name?',
);
console.log(`Hello, ${userName}!`);

export default userName;


const userHello = readlineSync.question(
    'Welcome to the Brain Games! \n Answer "yes" if the number is even, otherwise answer "no". \n May I have your name?',
  );
  console.log(`Hello, ${userHello}!`);
  
  export default userHello;

  const getRandom = (min, max) => {
    return Math.random() * (max - min) + min;
  };


const isEven = (number) => {
    if (number % 2 == 0)
        return Correct!;
    else
        return '''yes' is wrong answer ;(. Correct answer was 'no'.
        Let's try again, ${userHello}!`)!';
};


