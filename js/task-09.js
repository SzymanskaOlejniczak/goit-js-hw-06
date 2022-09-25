function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
const myBody = document.querySelector("body");

const changeColorButton = document.querySelector(".change-color");

const changeColorSpan = document.querySelector(".color");
const changeRandomColor = ()=> {
  changeColorSpan.textContent = myBody.style.backgroundColor=getRandomHexColor();
}
changeColorButton.addEventListener("click", changeRandomColor);

