export const brainGcd = () => {
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
