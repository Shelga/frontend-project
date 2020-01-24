import readlineSync from 'readline-sync';

export const brainCalc = () => {
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 100);
    const arr = ['+', '-', '*'];
  
    const arrayRandElement = (a) => {
      const rand = Math.floor(Math.random() * a.length);
      return arr[rand];
    };
  
    const randomOpetation = arrayRandElement(arr);
  
    const task = `${number1} ${randomOpetation} ${number2}`;
  
    let rightAnswer;
  
    switch (randomOpetation) {
        case '+':
            rightAnswer = number1 + number2;
            break;
        case '-': 
            rightAnswer = number1 - number2;
            break;
        case '*': 
            rightAnswer = number1 * number2;
            break;
    }
    return { task, rightAnswer };
  };