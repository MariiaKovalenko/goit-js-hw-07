
const refs = {
    input: document.getElementById('validation-input'),
};

function onInputFocus() {
console.log('Инпут получил фокус');
}

function onInputBlur(){
    console.log('Инпут потерял фокус');
    if (refs.input.value.length === 6) {
        refs.input.classList.add('valid');
        refs.input.classList.remove('invalid');
      } else {
        refs.input.classList.add('invalid');
        refs.input.classList.remove('valid');
      }
}

refs.input.addEventListener('focus', onInputFocus);
refs.input.addEventListener('blur', onInputBlur);

