import { game } from '../index.js'
import { getRandomNumber } from '../utils.js'

const description = 'Find the greatest common divisor of given numbers.'

const getGCD = (a, b) => {
  if (b === 0) return a

  return getGCD(b, a % b)
}

const getQeustionAndAnswer = () => {
  const number1 = getRandomNumber(1, 30)
  const number2 = getRandomNumber(1, 30)
  const question = `Question: ${number1} ${number2}`
  const correctAnswer = getGCD(number1, number2)
  return { question, correctAnswer }
}

export default () => game(description, getQeustionAndAnswer)
