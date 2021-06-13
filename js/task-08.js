
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxesRef = document.getElementById('boxes');

renderBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  let divEls = [];
  const inputNumber = document.querySelector('#controls input').value;
  for (let i = 0; i < inputNumber; i += 1) {
    const divEl = document.createElement('div');
    divEl.style.width = `${30 + i * 10}px`;
    divEl.style.height = `${30 + i * 10}px`;
    divEl.style.backgroundColor =
    "#" + (Math.round(Math.random() * 0XFFFFFF)).toString(16);
    divEls.push(divEl);
  }
  boxes.append(...divEls);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}
