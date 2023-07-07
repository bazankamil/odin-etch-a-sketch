// selectors
const container = document.querySelector(".container");
const button = document.querySelector(".button");
let root = document.documentElement;

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
  e.target.style.backgroundColor = "blue";
  e.stopPropagation();
  container.style.backgroundColor = "black";
});

//prompt

button.addEventListener("click", (e) => {
  let canvasSize = prompt("What size?");
  container.innerHTML = "";
  makeCanvas(canvasSize);
});

//TODO:

//3 butony color picker eraser i pociemniacz i miejsce na suwak na dole

//listener container w funkcji wywolywanej defaultowo
//color picker - defaultowo aktywny i jesli aktywowany to maluje
//eraser - tak samo jak malowanie, ale jesli jest klasa color to usuwa
//kazde najechanie zmniejsza/zwieksza saturacje o 10% - tryb podobny, ale po najechaniu zmienia styl modyfikujac var i dodajac 10% pociemnienia

//zamiast zwyklego listenera - funkcja zmieniajaca defaultowo kolor na niebieski na mauseover, kolor picker wywoluje ze zmienionym kolorem
//eraser wywoluje funkcje zmieniajaca background color na black, moze byc w tej samej funkcji
//pociemniacz osobna funkcja uruchamiana buttonem zmieniajaca styl nie koloru tylko saturacji

//CSS
//buttony
//tytul
//styl

//zamiast prompt suwak
//etch wewnatrz "okienka" tv albo innego obrazu
