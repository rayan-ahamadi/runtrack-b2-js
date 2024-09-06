const textDisplayer = document.querySelector("#text-displayer")
const inputText = document.querySelector("#input-text")
const buttonBold = document.querySelector('#turn-text-bold')
const buttonItalic = document.querySelector('#turn-text-italic')
const buttonClear = document.querySelector("#clear-text")

inputText.addEventListener("input", function(){
  textDisplayer.textContent = inputText.value
})

buttonBold.addEventListener("click", function(){
  textDisplayer.style["fontWeight"] = "bold"
})

buttonItalic.addEventListener("click", function(){
  textDisplayer.style["fontStyle"] = "italic"
})

buttonClear.addEventListener("click", function(){
  textDisplayer.style["fontWeight"] = "normal"
  textDisplayer.style["fontStyle"] = "normal"
})



