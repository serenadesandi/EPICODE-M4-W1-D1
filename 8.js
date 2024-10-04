//crea una funzione che crei un acronimo a partire da una frase: organizzazione mondiale della sanità diventa OMS

function creaAcronimo (frase) {
    const parole = frase.split ('');
    const acronimo = parole.map (parola => parola.chartArt (0).toUpperCase()).join ('')
    
    return acronimo
}