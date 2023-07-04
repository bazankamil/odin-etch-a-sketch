// selectors
const container = document.querySelector(".container");
const button = document.querySelector(".button");

//making - divs

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    container.appendChild(document.createElement("div"));
  }
}

/*selector - divs
const divs = container.querySelectorAll("div");

//listener - divs
divs.forEach((div) => {
  div.addEventListener(mouse);
});
*/

//listener container
container.addEventListener("mouseover", (e) => {
  e.target.style.backgroundColor = "blue";
  e.stopPropagation();
  container.style.backgroundColor = "black";
});

//listener

//TODO: button dajacy prompt
//prompt wchodzacy do petli ile na ile pixeli
//
