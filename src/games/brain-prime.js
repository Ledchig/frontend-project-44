import { getRandomNumber } from '../utils.js'
import { game } from '../index.js'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

function isPrimeNumber(number) {
  if (number < 2) return false
  if (number === 2) return true
  if (number % 2 === 0) return false

  for (let i = 3; i * i <= number; i += 2) {
    if (number % i === 0) return false
  }
  return true
}

const getQuestAndAnswer = () => {
  const number = getRandomNumber(2, 100)
  const question = `Question: ${number}`
  const correctAnswer = isPrimeNumber(number) ? 'yes' : 'no'
  return { question, correctAnswer }
}

export default () => game(description, getQuestAndAnswer)
