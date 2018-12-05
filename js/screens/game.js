import {getElementFromTemplate} from '../utils.js';
import header from '../screens/header.js';
import artists from '../screens/game-artist.js';
import tracks from '../screens/game-track.js';

export default (questions) => {
  const question = questions[2];
  let template;
  let element;

  if (question.type === `artist`) {
    template = `
      ${header()}
      <section class="game__screen">
        <h2 class="game__title">Кто исполняет эту песню?</h2>
        <div class="game__track">
          <button class="track__button track__button--play" type="button"></button>
          <audio></audio>
        </div>
        <form class="game__artist">
          ${artists(question.artists)}
        </form>
      </section>
    `;

    element = getElementFromTemplate(template, `game game--artist`);
  } else {
    template = `
      ${header()}    
      <section class="game__screen">
        <h2 class="game__title">Выберите ${question.genre} треки</h2>
        <form class="game__tracks">
          ${tracks(question.tracks)}
          <button class="game__submit button" type="submit" disabled>Ответить</button>
        </form>
      </section>
    `;

    element = getElementFromTemplate(template, `game game--genre`);
  }

  return element;
};
