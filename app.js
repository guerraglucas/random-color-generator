const h1 = document.querySelector("h1");
const html = document.querySelector("html");
const button = document.querySelector("button");

function randomColor() {
  const r = Math.floor(Math.random() * (250 + 1));
  const g = Math.floor(Math.random() * (250 + 1));
  const b = Math.floor(Math.random() * (250 + 1));
  html.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  h1.innerText = `rgb(${r}, ${g}, ${b})`;
}

button.addEventListener("click", randomColor);
