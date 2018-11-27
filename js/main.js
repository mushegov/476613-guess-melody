import {screen, handleStartPlayButtonClick} from './screens/welcome.js';
import {renderScreen} from './utils.js';

renderScreen(screen);
handleStartPlayButtonClick();


const updateTimer = (time) => {
  return time;
};

const gameTimer = (duration) => {
  let timeLeft = duration;

  const tick = () => {
    timeLeft--;
    updateTimer(timeLeft);

    if (timeLeft === 0) {
      clearInterval(timer);
    }
  };

  const timer = setInterval(() => {
    tick();
  }, 1000);
};

gameTimer();
