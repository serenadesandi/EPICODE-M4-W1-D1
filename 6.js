//crea una funzione che calcoli che un array non contenga 1 o 3, se non li contiene è true, sennò false
function checkArray(array) {
  if (array.includes (1) || array.includes (3) ) {
    return false
    
  } else {
    return true
    
  }  
    
}

console.log(checkArray([7, 4, 5]));   // true (non contiene 1 o 3)
console.log(checkArray([1, 4, 6]));   // false (contiene 1)
console.log(checkArray([2, 7, 3]));   // false (contiene 3)
