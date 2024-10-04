//crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro. angolo acuto: meno di 90 gradi, ritorna in acuto; angolo ottuso: tra i 90 e 180 gradi, ritorna in ottuso; angolo retto: 90 gradi, ritorna in retto; angolo piatto: 180 gradi, ritorna in piatto

function checkAngle(gradi) {
    if (gradi<90) {
        return "acuto";
        
    } else if  (gradi=== 90) {
        return "retto";
       
    } else if (gradi===180) {
        return "piatto"

    } else if (gradi>90 && gradi<180)
        return "ottuso"
}

// Esempi di test
console.log(tipoAngolo(67));   // "acuto"
console.log(tipoAngolo(90));   // "retto"
console.log(tipoAngolo(170));  // "ottuso"
console.log(tipoAngolo(180));  // "piatto"
console.log(tipoAngolo(195));  // "angolo non valido"