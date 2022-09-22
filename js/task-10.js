const boxesAdd = document.querySelector('#boxes');
const inputAdd = document.querySelector('#controls>input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

const createBoxes = (amount) => {
  const boxesDiv = [];

  for (let i = 0; i < amount; i++) {
    const boxAdd = document.createElement('div');
    boxAdd.style.width = `${30 + 10 * i}px`;
    boxAdd.style.height = `${30 + 10 * i}px`;
    boxAdd.style.backgroundColor=getRandomHexColor();
    
    boxesDiv.push(boxAdd);
  }

  boxesAdd.append(...boxesDiv);
}
createBtn.addEventListener('click', () => createBoxes(inputAdd.value));

destroyBtn.addEventListener('click', () => boxesAdd.innerHTML = '');


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}