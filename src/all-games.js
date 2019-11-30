// export const startGame = () => {
    //   const userHello = readlineSync.question(
    //     `\nWelcome to the Brain Games! \nAnswer ${'"yes"'.red} if the number is even, otherwise answer ${'"no"'.red}.\n\nMay I have your name? `.white,
    //   );
    //   console.log(`Hello, ${userHello}!\n`);
    
    //   const maxTries = 3;
    //   let rightAnswers = 0;
    
    //   while (rightAnswers < maxTries) {
    //     const number = Math.floor(Math.random() * 100);
    //     const isEven = number % 2 === 0;
    //     console.log(`Question: ${number}`);
    //     const userAnswer = readlineSync.question('Your answer: ');
    //     if (userAnswer === 'yes' && isEven) {
    //       console.log('Correct!');
    //       rightAnswers += 1;
    //     } else if (userAnswer === 'no' && !isEven) {
    //       console.log('Correct!');
    //       rightAnswers += 1;
    //     } else {
    //       console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven ? 'yes' : 'no'}'.\nLet's try again, ${userHello}!`);
    //       rightAnswers = 0;
    //     }
    //   }
    //   console.log(`Congratulations, ${userHello}!`);
    // };



    // export const startGame = () => {
    //     const userHello = readlineSync.question(
    //       // eslint-disable-next-line comma-dangle
    //       '\nWelcome to the Brain Games! \nWhat is the result of the expression?.\n\nMay I have your name? '
    //     );
    //     console.log(`Hello, ${userHello}!\n`);
      
      
    //     const maxTries = 3;
    //     let rightAnswers = 0;
      
    //     let answer;
      
    //     while (rightAnswers < maxTries) {
    //       const number1 = Math.floor(Math.random() * 100);
    //       const number2 = Math.floor(Math.random() * 100);
    //       const arr = ['+', '-', '*'];
    //       const arrayRandElement = (a) => {
    //         const rand = Math.floor(Math.random() * a.length);
    //         return arr[rand];
    //       };
      
    //       const randomOpetation = arrayRandElement(arr);
      
    //       console.log(`Question: ${number1} ${randomOpetation} ${number2}`);
      
    //       if (randomOpetation === '+') {
    //         answer = number1 + number2;
    //       } else if (randomOpetation === '-') {
    //         answer = number1 - number2;
    //       } else if (randomOpetation === '*') {
    //         answer = number1 * number2;
    //       }
      
    //       const userAnswer = readlineSync.question('Your answer: ');
      
      
    //       if (parseInt(userAnswer, 10) === answer) {
    //         console.log('Correct!');
    //         rightAnswers += 1;
    //       } else {
    //         console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userHello}!`);
    //         rightAnswers = 0;
    //       }
    //     }
    //     console.log(`Congratulations, ${userHello}!`);
    //   };
      
      
      