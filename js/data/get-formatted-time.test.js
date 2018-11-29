import {assert} from 'chai';
import {getType} from '../utils';


/**
 * Возвращает оставшееся времени игры
 * @param {Number} time Количество секунду прошедших со старта игры
 * @return {String} Время в формате MM:SS
 */
const getFormattedLeftTime = (time) => {
  if (getType(time) !== `number`) {
    throw new Error(`time is not an Number`);
  }

  const gameDuration = 60 * 5;
  const leftTime = gameDuration - time;

  let minutesLeft = Math.floor(leftTime / 60);
  let secondsLeft = leftTime - minutesLeft * 60;

  if (minutesLeft < 10) {
    minutesLeft = `0${minutesLeft}`;
  }

  if (secondsLeft < 10) {
    secondsLeft = `0${secondsLeft}`;
  }

  return `${minutesLeft}:${secondsLeft}`;
};


describe(`Get Formatted Time`, () => {

  it(`Valid Data`, () => {
    assert.equal(`04:05`, getFormattedLeftTime(55));
    assert.equal(`02:30`, getFormattedLeftTime(150));
    assert.equal(`00:30`, getFormattedLeftTime(270));
  });

  it(`Invalid Data`, () => {
    assert.throws(() => getFormattedLeftTime(`time`));
    assert.throws(() => getFormattedLeftTime([]));
    assert.throws(() => getFormattedLeftTime({}));
  });

});
