// crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. ritorna true se rispecchiano queste condizioni sennò è false//
function checkInRange(num1, num2) {
    let inRange1 = (num1 >=40 && num1 <=60) && (num2 >=40 && num2 <=60)
    let inRage2 = (num1 >=70 && num1 <=100) && (num2 >=70 && num2 <=100)

    return inRange1 || inRage2
}

// la funzione inRange controlla se entrambi i numeri sono compresi in un certo intervallo. 
// ricorda: In JavaScript non è necessario scrivere esplicitamente true o false quando la condizione restituisce già un valore booleano, poiché le espressioni logiche (&&, ||, >=, <=, ecc.) restituiscono di per sé true o false.
// Esempio di test
console.log(checkInRange(42, 53));  // true (entrambi tra 40 e 60)
console.log(checkInRange(78, 98));  // true (entrambi tra 70 e 100)
console.log(checkInRange(45, 90));  // false (uno in un intervallo, l'altro no)
console.log(checkInRange(44, 98));  // false (nessuno dei due in un intervallo valido)