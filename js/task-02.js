const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];
  const list = document.querySelector("#ingredients");

  //console.log(list);
  //console.log(ingredients);
  
  const newElements = ingredients.map((ingredient) => {
    const newElement = document.createElement("li");
    newElement.textContent = ingredient;
    newElement.classList.add("item");
    return newElement;
  });
  
  list.append(...newElements);


//  newElement.textContent = ingredients[0];
//newElement.classList.add("item");
  //let newElement1 = document.createElement("li");
  //newElement1.textContent = ingredients[1];
 // newElement1.classList.add("item");
 // let newElement2 = document.createElement("li");
 // newElement2.textContent = ingredients[2];
//  newElement2.classList.add("item");
 // let newElement3 = document.createElement("li");
 // newElement3.textContent = ingredients[3];
 // newElement3.classList.add("item");
 // let newElement4 = document.createElement("li");
 // newElement4.textContent = ingredients[4];
 // newElement4.classList.add("item");
 // let newElement5 = document.createElement("li");
 // newElement5.textContent = ingredients[5];
 // newElement5.classList.add("item");
 
// list.append(newElement,newElement1,newElement2, newElement3,newElement4,newElement5);
  
 
 


  