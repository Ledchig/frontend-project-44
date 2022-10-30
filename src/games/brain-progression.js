// Задача игры.
export const taskOfGame = 'What number is missing in the progression?';

function getRandomNum() {
  return Math.round(Math.random() * 10);
}

// Получаем ответы и вопросы.
export function getQuestsAndAnswers() {
  const questsAndAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const arrayForQuest = [];
    let quest = '';
    let answer = '';
    const step = getRandomNum();
    // Первое число.
    let x = getRandomNum();
    // Создаем массив для вопросов.
    for (let i = 0; i < 10; i += 1) {
      arrayForQuest.push(x);
      x += step;
    }
    // Определяем какое число прячем и записываем его в ответ.
    let numOfElementIsHide = getRandomNum();
    if (numOfElementIsHide === 0 || numOfElementIsHide === 1) {
      numOfElementIsHide += 2;
    }
    answer = `${arrayForQuest[numOfElementIsHide - 1] - arrayForQuest[numOfElementIsHide - 2]}`;
    arrayForQuest[numOfElementIsHide] = '..';
    // Превращаем его в строку для вопроса.
    for (let i = 0; i < 10; i += 1) {
      quest = `${quest} ${arrayForQuest[i]}`;
    }
    questsAndAnswers.push([quest, answer]);
  }
  return questsAndAnswers;
}