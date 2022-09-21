const myInput = document.querySelector("#validation-input");
const onBlur=(color)=> {
  const inputColor = color.currentTarget;
  const inputLength = Number(inputColor.dataset.length);
  if (inputColor.value.length === inputLength) {
    inputColor.classList.remove("invalid");
    inputColor.classList.add("valid");
  } else {
    inputColor.classList.remove("valid");
    inputColor.classList.add("invalid");
  }
  //console.log(inputColor);
  //console.log(inputLength);
}
myInput.addEventListener("blur", onBlur);