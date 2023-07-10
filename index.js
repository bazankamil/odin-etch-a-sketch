// selectors
const container = document.querySelector(".container");
const button = document.querySelector(".button");
let root = document.documentElement;
const colorPicker = document.querySelector(".menu__picker");
const eraser = document.querySelector(".menu__eraser");

//update color

colorPicker.addEventListener("input", (e) => {
  root.style.setProperty("--PICKED-COLOR", e.target.value);
});

//making - divs

function makeCanvas(size = 16) {
  if (size > 100) {
    size = 100;
  }
  root.style.setProperty("--CANVAS-HEIGHT", 100 / size + "%");
  root.style.setProperty("--CANVAS-WIDTH", 100 / size + "%");
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      container.appendChild(document.createElement("div"));
    }
  }
}

makeCanvas();

//listener container
container.addEventListener("mouseover", (e) => {
  e.target.style.backgroundColor = "var(--PICKED-COLOR)";
  e.stopPropagation();
  container.style.backgroundColor = "black";
  if (eraserStatus == 1) {
    e.target.style.backgroundColor = "black";
  }
});

//prompt

button.addEventListener("click", (e) => {
  let canvasSize = prompt("What size?");
  container.innerHTML = "";
  makeCanvas(canvasSize);
});

//eraser

let eraserStatus = 0;

eraser.addEventListener("click", (e) => {
  if (eraserStatus == 0) {
    eraserStatus = 1;
  } else {
    eraserStatus = 0;
  }
});

//eraser on/off

eraser.addEventListener("click", (e) => {
  if (eraserStatus == 0) {
    e.target.style.color = "aliceblue";
  } else if (eraserStatus == 1) {
    e.target.style.color = "yellow";
  }
  console.log(eraserStatus);
});
//TODO:

//kazde najechanie zmniejsza/zwieksza saturacje o 10% - tryb podobny, ale po najechaniu zmienia styl modyfikujac var i dodajac 10% pociemnienia
//size jako input range

//etch wewnatrz "okienka" tv albo innego obrazu
