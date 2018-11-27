import {assert} from 'chai';
import {getType} from '../utils';


const INITIAL_LIVES_AMOUNT = 3;

const loseLives = (livesToLoose = 1) => {
  if (getType(livesToLoose) !== `number`) {
    throw new Error(`livesToLoose is not an Number`);
  }

  let livesAmount = INITIAL_LIVES_AMOUNT;

  livesAmount = livesAmount - livesToLoose;

  return livesAmount < 0 ? 0 : livesAmount;
};


describe(`Change Lives Count`, () => {

  it(`Valid Data`, () => {
    assert.equal(3, loseLives(0));
    assert.equal(2, loseLives());
    assert.equal(1, loseLives(2));
    assert.equal(0, loseLives(3));
    assert.equal(0, loseLives(4));
    assert.equal(0, loseLives(5));
    assert.equal(0, loseLives(6));
    assert.equal(0, loseLives(999));
  });

  it(`Invalid Data`, () => {
    assert.throws(() => loseLives(`data`));
    assert.throws(() => loseLives([]));
    assert.throws(() => loseLives({}));
  });

});
