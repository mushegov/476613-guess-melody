import {assert} from 'chai';
import {getType} from '../utils';


const loseLives = (initialLives = 3, livesToLoose = 1) => {
  if (getType(initialLives) !== `number`) {
    throw new Error(`initialLives is not an Number`);
  }

  if (getType(livesToLoose) !== `number`) {
    throw new Error(`livesToLoose is not an Number`);
  }

  let livesAmount = initialLives;

  livesAmount = livesAmount - livesToLoose;

  return livesAmount < 0 ? 0 : livesAmount;
};


describe(`Change Lives Count`, () => {

  it(`Valid Data`, () => {
    assert.equal(3, loseLives(3, 0));
    assert.equal(2, loseLives(3, 1));
    assert.equal(2, loseLives());
    assert.equal(1, loseLives(3, 2));
    assert.equal(3, loseLives(6, 3));
    assert.equal(0, loseLives(4, 4));
    assert.equal(0, loseLives(99, 999));
  });

  it(`Invalid Data`, () => {
    assert.throws(() => loseLives(`data`, `data`));
    assert.throws(() => loseLives([], []));
    assert.throws(() => loseLives({}, {}));
  });

});
