function myNearZero(array){
  let nearestNumber = array[0];

  for(let i = 0; i<array.length-1;i++){
    let gap = 0
    if(array[i] < 0){
      gap = 0 - (array[i]) 
    }else{
      gap = array[i]
    }

    if(gap < nearestNumber){
      nearestNumber = gap
    }
  }

  return nearestNumber

}

console.log(myNearZero([3,8,4,2,5]))
console.log(myNearZero([-1,-4,2,5,6,9]))