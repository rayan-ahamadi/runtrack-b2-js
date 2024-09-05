function mySquareArray(array){
  console.log(array.length)
  for(let i=0; i<=array.length-1;i++){
    array[i] = array[i] ** 2
  }

  return array

}

console.log(mySquareArray([3,8,4,2,5]))