'use strict';

const templates = document.querySelectorAll(`template`);
const main = document.querySelector(`section.main`);
let currentScreenIndex = 0;

const setScreenByIndex = (index) => {
  if (index < 0) {
    index = templates.length - 1;
  }

  if (index === templates.length) {
    index = 0;
  }

  main.innerHTML = templates[index].innerHTML;
  currentScreenIndex = index;
};

const prevScreen = () => setScreenByIndex(currentScreenIndex - 1);
const nextScreen = () => setScreenByIndex(currentScreenIndex + 1);

const addKeyboardPressListener = () => {
  document.addEventListener(`keydown`, (event) => {
    const keyCode = event.key;

    if (keyCode === `ArrowLeft`) {
      prevScreen();
    }

    if (keyCode === `ArrowRight`) {
      nextScreen();
    }

    return true;
  });
};

const appendNavNode = () => {
  const app = document.querySelector(`main.app`);
  const navNode = document.createElement(`div`);
  const navTemplate =
    `<style>
      .arrows__wrap {
        position: absolute;
        top: 135px;
        left: 50%;
        margin-left: -56px;
      }
      .arrows__btn {
        background: none;
        border: 2px solid black;
        padding: 5px 20px;
      }
    </style>
    <button class="arrows__btn"><-</button>
    <button class="arrows__btn">-></button>`;

  navNode.innerHTML = navTemplate;
  navNode.classList.add(`arrows__wrap`);

  app.append(navNode);
};

const handleArrowNavigation = () => {
  const [prevArrow, nextArrow] = document.querySelectorAll(`.arrows__btn`);

  prevArrow.addEventListener(`click`, () => prevScreen());
  nextArrow.addEventListener(`click`, () => nextScreen());
};

const addArrowNavigation = () => {
  appendNavNode();
  handleArrowNavigation();
};

setScreenByIndex(currentScreenIndex);

addKeyboardPressListener();

addArrowNavigation();
