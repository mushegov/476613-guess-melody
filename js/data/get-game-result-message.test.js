import {assert} from 'chai';

const mockPlayerResultSuccess = {
  points: 10,
  livesLeft: 2,
  timeLeft: 55
};

const mockPlayerResultTmeout = {
  points: 10,
  livesLeft: 2,
  timeLeft: 0
};

const mockPlayerResultNoLivesLeft = {
  points: 10,
  livesLeft: 0,
  timeLeft: 55
};

// const mockGlobalResults = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];


const getGameResultMessage = (globalResults, playerResults) => {
  if (!(globalResults instanceof Array)) {
    throw new Error(`globalResults is not an Array`);
  }

  if (!(playerResults instanceof Object)) {
    throw new Error(`playerResults is not an Object`);
  }

  if (typeof playerResults.timeLeft !== `number`) {
    throw new Error(`playerResults.timeLeft is NaN`);
  }

  if (typeof playerResults.livesLeft !== `number`) {
    throw new Error(`playerResults.livesLeft is NaN`);
  }

  let result;

  if (playerResults.timeLeft <= 0) {
    result = `Время вышло! Вы не успели отгадать все мелодии`;
  }

  if (playerResults.livesLeft <= 0) {
    result = `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }

  return result;
};

describe(`Get Game Result Message`, () => {

  it(`Valid Answers`, () => {
    assert.equal(`Время вышло! Вы не успели отгадать все мелодии`, getGameResultMessage([], mockPlayerResultTmeout));
    assert.equal(`У вас закончились все попытки. Ничего, повезёт в следующий раз!`, getGameResultMessage([], mockPlayerResultNoLivesLeft));
  });

  it(`Invalid Data`, () => {
    assert.throws(getGameResultMessage([], mockPlayerResultSuccess), `globalResults is not an Array`);
  });

});
