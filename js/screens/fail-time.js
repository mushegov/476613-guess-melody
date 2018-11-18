import {getElementFromTemplate, renderScreen} from '../utils.js';
import {screen as startScreen, addEventListeners} from "./game-genre";

const template = `
  <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
  <h2 class="result__title">Увы и ах!</h2>
  <p class="result__total result__total--fail">Время вышло! Вы не успели отгадать все мелодии</p>
  <button class="result__replay" type="button">Попробовать ещё раз</button>
`;

const screen = getElementFromTemplate(template, `result`);

const handleReplayButtonClick = () => {
  const replayButton = document.querySelector(`.result__replay`);

  replayButton.addEventListener(`click`, () => {
    renderScreen(startScreen);
    addEventListeners();
  });
};

export {screen, handleReplayButtonClick};
