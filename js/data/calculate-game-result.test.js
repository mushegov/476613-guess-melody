import {assert} from 'chai';

const mockAnswersShouldReturn9Points = [
  {isTrue: true, time: 5},
  {isTrue: true, time: 10},
  {isTrue: true, time: 15},
  {isTrue: true, time: 20},
  {isTrue: true, time: 25},
  {isTrue: true, time: 30},
  {isTrue: true, time: 35},
  {isTrue: true, time: 40},
  {isTrue: false, time: 45},
  {isTrue: false, time: 50},
];

const mockAnswersShouldReturn10Points = [
  {isTrue: true, time: 40},
  {isTrue: true, time: 40},
  {isTrue: true, time: 40},
  {isTrue: true, time: 40},
  {isTrue: true, time: 40},
  {isTrue: true, time: 40},
  {isTrue: true, time: 40},
  {isTrue: true, time: 40},
  {isTrue: true, time: 40},
  {isTrue: true, time: 40},
];

const mockAnswersShouldReturn17Points = [
  {isTrue: true, time: 5},
  {isTrue: true, time: 10},
  {isTrue: true, time: 15},
  {isTrue: true, time: 20},
  {isTrue: true, time: 5},
  {isTrue: true, time: 30},
  {isTrue: true, time: 35},
  {isTrue: true, time: 40},
  {isTrue: true, time: 5},
  {isTrue: true, time: 5},
];

const mockShouldReturnError1 = [];

const mockShouldReturnError2 = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];

/**
 * Подсчёта набранных баллов игрока
 * @param {Array} answers Ответы игрока
 * @return {Number} Количество набранных очков (или -1 если ошибка)
 */
const calculateGameResult = (answers) => {
  if (!(answers instanceof Array) || answers.length < 10) {
    return -1;
  }

  let totalPoints = 0;
  let livesLeft = 3;

  for (let item of answers) {
    if (item.isTrue) {
      if (item.time < 30) {
        totalPoints = totalPoints + 2;
      } else {
        totalPoints++;
      }
    } else {
      livesLeft--;
      totalPoints = totalPoints - 2;
    }

    if (livesLeft === 0) {
      return -1;
    }
  }

  return totalPoints;
};

describe(`Calculate Game Result`, () => {

  it(`Success Answers`, () => {
    assert.equal(9, calculateGameResult(mockAnswersShouldReturn9Points));
    assert.equal(10, calculateGameResult(mockAnswersShouldReturn10Points));
    assert.equal(17, calculateGameResult(mockAnswersShouldReturn17Points));
  });

  it(`Error Answers`, () => {
    assert.equal(-1, calculateGameResult(mockShouldReturnError1));
    assert.equal(-1, calculateGameResult(mockShouldReturnError2));
  });

  it(`Invalid Answers`, () => {
    assert.equal(-1, calculateGameResult(123));
    assert.equal(-1, calculateGameResult(`answers`));
  });

});
