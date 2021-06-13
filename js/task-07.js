const refs = {
    input: document.getElementById('font-size-control'),
    text: document.getElementById('text'),
};

const textFontSize = function (event) {
  refs.text.style.fontSize = `${event.target.value}px`;
};

refs.input.addEventListener('input', textFontSize);