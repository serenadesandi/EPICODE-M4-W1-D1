//crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con "los" o "new", altrimenti è false
function checkCityName(città) {
    if (città.startsWith("Los") || città.startsWith ("New")) {
        return città;
    } else {
        return false
        
    }
    
}

// Esempio di test
console.log(checkCityName("Los Angeles"));  // "Los Angeles"
console.log(checkCityName("New York"));     // "New York"
console.log(checkCityName("Bari"));      // false