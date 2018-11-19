import {getElementFromTemplate} from '../utils.js';

const template = `
  <h2 class="modal__title">Произошла ошибка!</h2>
  <p class="modal__text">Статус: 404. Пожалуйста, перезагрузите страницу.</p>
`;

const screen = getElementFromTemplate(template, `modal`);

export {screen};
