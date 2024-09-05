function arrayMin(array){
  let result = array[0];
  for(let i = 0; i<array.length;i++){
    if(array[i] < result){
      result = array[i]
    }
  }

  return result

}

function arrayMax(array){
  let result = array[0];
  for(let i = 0; i<array.length;i++){
    if(array[i] > result){
      result = array[i]
    }
  }

  return result
}


function myArraySort(array,sorting){
  let sortedArray = []
  let arrayLength = array.length // L'array change de length à chaque itération d'une boucle

  if(sorting === "ASC"){
    
    for(let i = 0; i<arrayLength;i++){
      let min = arrayMin(array)
      sortedArray.push(min)
      array.splice(array.indexOf(min),1)
    }
    
    return sortedArray

  }
  else if (sorting === "DESC"){
      
      for(let i = 0; i<arrayLength;i++){
        let max = arrayMax(array)
        sortedArray.push(max)
        array.splice(array.indexOf(max),1)
      }
      
      return sortedArray
  }

  return "error"
}

console.log(myArraySort([3,8,4,2,5], "ASC"))
console.log(myArraySort([-1,-4,2,5,6,9], "DESC"))