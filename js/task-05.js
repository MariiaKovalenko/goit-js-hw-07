const refs = {
    input: document.getElementById('name-input'),
    output: document.getElementById('name-output'),
};

refs.input.addEventListener('input', onInputChange);
refs.input.addEventListener('focus', onInputFocus);
refs.input.addEventListener('blur', onInputBlur);

function onInputFocus() {
console.log('Инпут получил фокус');
}

function onInputBlur(){
console.log('Инпут потерял фокус');
}

function onInputChange(event) {
    refs.output.textContent = event.currentTarget.value;
}

