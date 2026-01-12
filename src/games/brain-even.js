import { game } from '../index.js'
import { getRandomNumber } from '../utils.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = num => num % 2 === 0

const getQeustionAndAnswer = () => {
  const number = getRandomNumber()
  const question = `Question: ${number}`
  const correctAnswer = isEven(number) ? 'yes' : 'no'
  return { question, correctAnswer }
}

export default () => game(description, getQeustionAndAnswer)
