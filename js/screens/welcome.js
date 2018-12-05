import {getElementFromTemplate, renderScreen} from '../utils.js';
import gameScreen from "../screens/game.js";
import questions from '../data/questions.js';

export default (data) => {
  const template = `
    <div class="welcome__logo">
      <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83">
    </div>
    <button class="welcome__button" type="button">
      <span class="visually-hidden">Начать игру</span>
    </button>
    <h2 class="welcome__rules-title">Правила игры</h2>
    <p class="welcome__text">Правила просты:</p>
    <ul class="welcome__rules-list">
      <li>За ${data.duration / 60} минут нужно ответить на все вопросы;</li>
      <li>Можно допустить ${data.lives} ошибки.</li>
    </ul>
    <p class="welcome__text">Удачи!</p>
  `;

  const element = getElementFromTemplate(template, `welcome`);

  element.addEventListener(`click`, () => {
    const screen = gameScreen(questions);
    renderScreen(screen);
  });

  return element;
};
