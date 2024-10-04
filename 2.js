//crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. passa la stringa e la posizione come parametri e ritorna la stringa modificata//
function removeCharacterAt (stringa, posizione) {
    if (posizione < 0 || posizione >= stringa.lenght) {
        return "Posizione non valida"
    } 
    
    return stringa.slice (0,posizione) //prende la parte della stringa prima del carattere alla posizione specificata// 
    + stringa.slice (posizione+1) //prende la parte della stringa dopo il carattere//;
}

// Esempio di test
console.log(removeCharacterAt("buonanotte", 2)); // "bonanotte" (rimosso 'u')
console.log(removeCharacterAt("bene", 10));      // "Posizione non valida" (posizione non valida)