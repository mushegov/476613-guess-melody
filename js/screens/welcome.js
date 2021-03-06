import {getElementFromTemplate, renderScreen} from '../utils.js';
import {screen as nextScreen, addEventListeners as gameGenreAddEventsListeners} from '../screens/game-genre.js';

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
    <li>За 5 минут нужно ответить на все вопросы;</li>
    <li>Можно допустить 3 ошибки.</li>
  </ul>
  <p class="welcome__text">Удачи!</p>
`;

const screen = getElementFromTemplate(template, `welcome`);

const handleStartPlayButtonClick = () => {
  const startPlayButton = document.querySelector(`.welcome__button`);

  startPlayButton.addEventListener(`click`, () => {
    renderScreen(nextScreen);
    gameGenreAddEventsListeners();
  });
};

export {screen, handleStartPlayButtonClick};
