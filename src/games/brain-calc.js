import { game } from '../index.js'
import { getRandomNumber } from '../utils.js'

const description = 'What is the result of the expression?'

const operations = ['+', '-', '*']

const getRandomOperation = (arrayWithOperations) => {
  const rand = Math.floor(Math.random() * arrayWithOperations.length)
  return operations[rand]
}

const calculate = (firstNumber, secondNumber, operation) => {
  switch (operation) {
    case '+':
      return (firstNumber + secondNumber).toString()
    case '-':
      return (firstNumber - secondNumber).toString()
    default:
      return (firstNumber * secondNumber).toString()
  }
}

const getQeustionAndAnswer = () => {
  const number1 = getRandomNumber(1, 10)
  const number2 = getRandomNumber(1, 10)
  const operation = getRandomOperation(operations)
  const question = `Question: ${number1} ${operation} ${number2}`
  const correctAnswer = calculate(number1, number2, operation)
  return { question, correctAnswer }
}

export default () => game(description, getQeustionAndAnswer)
