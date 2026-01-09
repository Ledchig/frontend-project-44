import readlineSync from 'readline-sync';

const rounds = 3;

const isEven = (num) => num % 2 === 0;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getQeustionAndAnswer = () => {
  const number = getRandomNumber(1, 100);
  const question = `Question: ${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return { question, correctAnswer };
}

const evenGameRound = () => {
  const { question, correctAnswer } = getQeustionAndAnswer();
  console.log(question);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer.toLowerCase() === correctAnswer) {
    console.log('Correct!');
    return true;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  }

}

export const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < rounds; i++) {
    if (!evenGameRound()) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log('Congratulations, you have completed the Even Game!');
}
