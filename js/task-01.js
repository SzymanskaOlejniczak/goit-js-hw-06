const numberOfCategories = document.querySelectorAll("li.item");
console.log(`Number of Categories:${numberOfCategories.length}`);
const category = numberOfCategories[0].querySelector("h2").textContent;
console.log(`Category: ${category}`); 

const listAnimals =  numberOfCategories[0].lastElementChild.querySelectorAll("li");
console.log(`Elements: ${listAnimals.length}`);
const category2 = numberOfCategories[1].querySelector("h2").textContent;
console.log(`Category: ${category2}`); 

const listProducts =  numberOfCategories[1].lastElementChild.querySelectorAll("li");
console.log(`Elements: ${listProducts.length}`);

const category3 = numberOfCategories[2].querySelector("h2").textContent;
console.log(`Category: ${category3}`); 

const listTechnologies =  numberOfCategories[2].lastElementChild.querySelectorAll("li");
console.log(`Elements: ${listTechnologies.length}`);