const htmlElement = document.querySelector("html")
const screenWidth = window.innerWidth

function myChangeBackgroundColor(){
  if(screenWidth >= 1337){
    htmlElement.style["backgroundColor"] = "#ffb703"
  }
  if(screenWidth >= 1336 && screenWidth <= 505){
    htmlElement.style["backgroundColor"] = "#d90429"
  }
  if(screenWidth <= 504){
    htmlElement.style["backgroundColor"] = "#003049"
  }
}

myChangeBackgroundColor()