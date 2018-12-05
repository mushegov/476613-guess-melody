export default (tracks) => {
  return tracks.map((track, index) => {
    return `
      <div class="track">
        <button class="track__button track__button--play" type="button"></button>
        <div class="track__status">
          <audio>${track.url}</audio>
        </div>
        <div class="game__answer">
          <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-${index}" id="answer-${index}">
          <label class="game__check" for="answer-${index}">Отметить</label>
        </div>
      </div>
    `;
  }).join(``);
};
