#!/usr/bin/env node

import { startGame } from '../logic';

const description = 'Find the greatest common divisor of given numbers.';

const brainGcd = () => {
  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);
  const task = `${number1} ${number2}`;

  const getTheGcd = (num1, num2) => {
    if (num2 === 0) {
      return num1;
    }
    return getTheGcd(num2, num1 % num2);
  };
  const rightAnswer = getTheGcd(number1, number2);

  return { task, rightAnswer };
};

startGame(description, brainGcd);

//   const tryAnswer = (number1, number2) => {
//     var R;
//     while ((number1 % number2) > 0)  {
//       R = number1 % number2;
//       number1 = number2;
//       number2 = R;
//     }
//     return number2;
//   }


// function gcd_two_numbers(x, y) {
//     if ((typeof x !== 'number') || (typeof y !== 'number'))
//       return false;
//     x = Math.abs(x);
//     y = Math.abs(y);
//     while(y) {
//       var t = y;
//       y = x % y;
//       x = t;
//     }
//     return x;
//   }

//   console.log(gcd_two_numbers(100, 52));
