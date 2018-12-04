import welcomeScreen from './screens/welcome.js';
import gameSettings from './data/game-settings.js';
import {renderScreen} from './utils.js';

const screen = welcomeScreen(gameSettings);

renderScreen(screen);
