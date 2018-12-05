/**
 * Генерируем DOM элемент
 * @param {String} template
 * @param {String} className
 * @return {HTMLElement}
 */
const getElementFromTemplate = (template, className) => {
  const element = document.createElement(`section`);
  const classList = className.split(` `);

  element.innerHTML = template;

  classList.forEach((item) => {
    element.classList.add(item);
  });

  return element;
};

/**
 * Очищаем контейнер приложения и вставляем полученный DOM элемент
 * @param {HTMLElement} screenNode
 */
const renderScreen = (screenNode) => {
  const main = document.querySelector(`section.main`);

  main.innerHTML = ``;
  main.append(screenNode);

  document.removeEventListener(`click`);
};

/**
 * Возвращает тип переменной
 * @param {*} val
 * @return {String} Тип переменной
 */
const getType = (val) => {
  return ({}).toString.call(val).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
};

export {getElementFromTemplate, renderScreen, getType};
