import {assert} from 'chai';
import {getType} from '../utils';


const changeLevel = (currentLevel, levelsToChange = 1) => {
  if (getType(currentLevel) !== `number`) {
    throw new Error(`currentLevel is not an Number`);
  }

  if (getType(levelsToChange) !== `number`) {
    throw new Error(`levelsToChange is not an Number`);
  }

  if (levelsToChange === 0) {
    throw new Error(`levelsToChange can not be zero`);
  }

  let newLevel = currentLevel;

  newLevel += levelsToChange;

  return newLevel < 0 ? 0 : newLevel;
};


describe(`Change Level`, () => {

  it(`Valid Data`, () => {
    assert.equal(1, changeLevel(0, 1));
    assert.equal(2, changeLevel(0, 2));
    assert.equal(3, changeLevel(2, 1));
    assert.equal(4, changeLevel(3, 1));
    assert.equal(20, changeLevel(10, 10));
  });

  it(`Invalid Data`, () => {
    assert.throws(() => changeLevel(`data`, `data`));
    assert.throws(() => changeLevel([], []));
    assert.throws(() => changeLevel({}, {}));
    assert.throws(() => changeLevel(2, 0));
    assert.throws(() => changeLevel(22, 0));
  });

});
