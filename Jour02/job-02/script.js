const countDisplayer = document.querySelector("#count-displayer")
const countButton = document.querySelector("#add-count-btn")
let counter = 0;

countDisplayer.textContent = counter

countButton.addEventListener("click", () => {
  counter++
  countDisplayer.textContent = counter
})