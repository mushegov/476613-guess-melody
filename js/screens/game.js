import {getElementFromTemplate, renderScreen} from '../utils.js';
import welcomeScreen from '../screens/welcome.js';
import gameSettings from '../data/game-settings.js';
import header from '../screens/header.js';

export default (data) => {
  const template = `
  ${header()}
  <section class="game__screen">
    <h2 class="game__title">Кто исполняет эту песню?</h2>
    <div class="game__track">
      <button class="track__button track__button--play" type="button"></button>
      <audio></audio>
    </div>
    <form class="game__artist">
      <div class="artist">
        <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-1" id="answer-1">
        <label class="artist__name" for="answer-1">
          <img class="artist__picture" src="http://placehold.it/134x134" alt="Пелагея">
          Пелагея
        </label>
      </div>
    </form>
  </section>
`;

  const element = getElementFromTemplate(template, `game game--artist`);
  //
  // document.querySelector(`section.main`).addEventListener(`click`, (evt) => {
  //   if (evt.target && evt.path.some((el) => el.className === `artist`)) {
  //     const screen = welcomeScreen(gameSettings);
  //     renderScreen(screen);
  //   }
  // });

  return element;
};
