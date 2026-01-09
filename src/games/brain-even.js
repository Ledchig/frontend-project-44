import { game } from '../index.js'
import { getRandomNumber, isEven } from '../utils.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const getQeustionAndAnswer = () => {
  const number = getRandomNumber(1, 100)
  const question = `Question: ${number}`
  const correctAnswer = isEven(number) ? 'yes' : 'no'
  return { question, correctAnswer }
}

export default () => game(description, getQeustionAndAnswer)
