export default (artists) => {
  return artists.map((artist, index) => {
    return `
      <div class="artist">
        <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-${index}" id="answer-${index}">
        <label class="artist__name" for="answer-${index}">
          <img class="artist__picture" src="${artist.image}" alt="${artist.name}">
          ${artist.name}
        </label>
      </div>
    `;
  }).join(``);
};
