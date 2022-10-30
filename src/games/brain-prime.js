// Задача игры
export const taskOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".ind the greatest common divisor of given numbers.';

// Генерация случайного числа.
function getRandomNum() {
  return Math.round(Math.random() * 100);
}

// Проверка на простое число.
function isTheNumberPrime(number) {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// Получаем массив вопросов и ответов.
export function getQuestsAndAnswers() {
  let quest = 0;
  let answer = '';
  const questsAndAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    quest = getRandomNum();
    answer = isTheNumberPrime(quest) ? 'yes' : 'no';
    questsAndAnswers.push([quest, answer]);
  }
  return questsAndAnswers;
}