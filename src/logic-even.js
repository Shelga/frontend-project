
export const brainEven = () => {
 const number = Math.floor(Math.random() * 100);
  
    const task = `${number}`;

    const isEven = number % 2 === 0; 

    let rightAnswer;
  
    if (isEven) {
      rightAnswer = 'yes';
    } else rightAnswer = 'no';
  
    return { task, rightAnswer };
  };