import { getRandomNumber } from '../utils.js'
import { game } from '../index.js'

const description = 'What number is missing in the progression?'

const progressionLength = 10

const getProgression = (firstNumber, step) => {
  const progression = [firstNumber]
  let nextNumber = firstNumber + step
  for (let i = 1; i < progressionLength; i += 1) {
    progression.push(nextNumber)
    nextNumber += step
  }
  return progression
}

const getQeustionAndAnswer = () => {
  const firstNumber = getRandomNumber(1, 50)
  const step = getRandomNumber(2, 9)
  const progression = getProgression(firstNumber, step)
  const randomIndex = getRandomNumber(0, 9)
  const correctAnswer = progression[randomIndex]
  progression[randomIndex] = '..'
  const question = `Question: ${progression.join(' ')}`

  return { question, correctAnswer }
}

export default () => game(description, getQeustionAndAnswer)