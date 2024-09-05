function myPrimeList(limit){
  let primeList = []

  for(let i=2; i<=limit;i++){
    let isPrime = true
    for(y=2; y<=Math.sqrt(i);y++){
      if( i % y == 0 ){
        isPrime = false
        break
      }
    }

    if(isPrime){
      primeList.push(i)
    }

  }

  return primeList
}

console.log(myPrimeList(18))