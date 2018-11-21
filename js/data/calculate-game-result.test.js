import {assert} from 'chai';

/**
 * Подсчёта набранных баллов игрока
 * @param {Array} answers Ответы игрока
 * @param {Number} livesLeft Количество оставшихя жизней
 * @return {Number} Количество набранных очков
 */
const calculateGameResult = (answers, livesLeft) => {
  if (typeof answers !== `object` && answers.length !== 9) {
    throw new Error(`Answers array should consist of exact 10 items`);
  }

  if (typeof livesLeft !== `number`) {
    throw new Error(`livesLeft should be number`);
  }

  return 1;
};

describe(`Calculate Game Result: Valid Data: answers`, () => {

  it(`Answers array should consist of exact 10 items`, () => {
    assert.throws(() => calculateGameResult([0], null));
    assert.throws(() => calculateGameResult([0, 1, 2, 3, 4, 5, 6, 7, 8], null));
    assert.throws(() => calculateGameResult([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], null));

    assert.doesNotThrow(() => calculateGameResult([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 1));
  });

});
