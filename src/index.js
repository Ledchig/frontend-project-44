import readlineSync from 'readline-sync'

const ROUNDS = 3

export const game = (description, gameRound) => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  console.log(description)

  for (let i = 0; i < rounds; i++) {
    const { question, correctAnswer } = gameRound()
    console.log(question)
    const userAnswer = readlineSync.question('Your answer: ').trim()
    if (String(userAnswer) === String(correctAnswer)) {
      console.log('Correct!')
    }
    else {
      console.log(`${userAnswer} is wrong answer (. Correct answer was ${correctAnswer}.`)
      return console.log(`Let's try again, ${userName}!`)
    }
  }

  console.log(`Congratulations, ${userName}!`)
}
