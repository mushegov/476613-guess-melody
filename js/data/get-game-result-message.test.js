import {assert} from 'chai';
import {getType} from '../utils';

const mockPlayerResultValid = {
  points: 10,
  livesLeft: 2,
  timeLeft: 55
};

const mockPlayerResultTimeout = {
  points: 10,
  livesLeft: 2,
  timeLeft: 0
};

const mockPlayerResultNoLivesLeft = {
  points: 10,
  livesLeft: 0,
  timeLeft: 55
};

const mockGlobalResults = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];


const getGameResultMessage = (globalResults, playerResults) => {
  if (getType(globalResults) !== `array`) {
    throw new Error(`globalResults is not an Array`);
  }
  if (getType(playerResults) !== `object`) {
    throw new Error(`playerResults is not an Object`);
  }
  if (getType(playerResults.points) !== `number`) {
    throw new Error(`playerResults.points is NaN`);
  }
  if (getType(playerResults.livesLeft) !== `number`) {
    throw new Error(`playerResults.livesLeft is NaN`);
  }
  if (getType(playerResults.timeLeft) !== `number`) {
    throw new Error(`playerResults.timeLeft is NaN`);
  }

  let result;

  if (playerResults.timeLeft <= 0) {
    result = `Время вышло! Вы не успели отгадать все мелодии`;
  }

  if (playerResults.livesLeft <= 0) {
    result = `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }

  if (playerResults.timeLeft > 0 && playerResults.livesLeft > 0) {
    const playerPoints = playerResults.points;
    globalResults.push(playerPoints);
    globalResults.sort((a, b) => (b - a));
    const totalPlayers = globalResults.length;
    const playerPlace = globalResults.findIndex((element) => (element === playerPoints));
    let offset = Math.floor((playerPlace / totalPlayers) * 100);

    result = `Вы заняли ${playerPlace} место из ${totalPlayers} игроков. Это лучше, чем у ${offset}% игроков`;
  }

  return result;
};

describe(`Get Game Result Message`, () => {

  it(`Valid Answers`, () => {
    assert.equal(`Время вышло! Вы не успели отгадать все мелодии`, getGameResultMessage([], mockPlayerResultTimeout));
    assert.equal(`У вас закончились все попытки. Ничего, повезёт в следующий раз!`, getGameResultMessage([], mockPlayerResultNoLivesLeft));
    assert.equal(
        `Вы заняли 10 место из 21 игроков. Это лучше, чем у 47% игроков`,
        getGameResultMessage(mockGlobalResults, mockPlayerResultValid));
  });

  it(`Invalid Data`, () => {
    assert.throws(() => getGameResultMessage(1, mockPlayerResultValid));
    assert.throws(() => getGameResultMessage({}, mockPlayerResultValid));
    assert.throws(() => getGameResultMessage(`data`, mockPlayerResultValid));

    assert.throws(() => getGameResultMessage([], 1));
    assert.throws(() => getGameResultMessage([], `data`));
    assert.throws(() => getGameResultMessage([], []));

    assert.throws(() => getGameResultMessage([], {points: `string`, livesLeft: [], timeLeft: {}}));
  });

});
