const myInput = document.querySelector('#name-input' );
const mySpan = document.querySelector('#name-output');

myInput.addEventListener("input", newInput);

function newInput (name) {
   console.log(name.currentTarget.value);
    mySpan.textContent = name.currentTarget.value;

    if (name.currentTarget.value === "") {
        mySpan.textContent = 'Anonymous'
    }
}