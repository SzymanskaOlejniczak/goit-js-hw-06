const myInput = document.querySelector('#name-input' );
const mySpan = document.querySelector('#name-output');

const newInput = (name)=> {
   console.log(name.currentTarget.value);
    mySpan.textContent = name.currentTarget.value;

    if (name.currentTarget.value === "") {
        mySpan.textContent = 'Anonymous'
    }
}
myInput.addEventListener("input", newInput);