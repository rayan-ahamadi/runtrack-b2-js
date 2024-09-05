function mySubstring(index1,index2,string){
  let stringPart = ""
  for(let i=index1; i<=index2 ;i++){
    stringPart += string[i]
  }
  return stringPart
}


function myIsInString(haystack,needle) {
  for(i=0;i<=haystack.length;i+=1){
    let index1 = i
    let index2 = i + (needle.length -1)
    const haystackPart = mySubstring(index1,index2, haystack)
    
    if (haystackPart === needle){
      return true
    }
  }
}

console.log(myIsInString("Hello World", "llo"))