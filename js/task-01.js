const numberOfCategories = document.querySelectorAll("li.item");
console.log(`Number of Categories:${numberOfCategories.length}`);

const animal = numberOfCategories[0].firstElementChild;
const animal2 = numberOfCategories[0].querySelector("h2")
console.log(animal2);

const listAnimals =  numberOfCategories[0].lastElementChild.querySelectorAll("li");
console.log(`Elements: ${listAnimals.length}`);