//crea una funzione che calcoli la somma di tutti gli elementi di un array. l'array deve essere passato come parametro

function sumArray(array) {
    let sum = 0;

    for (let i = 0; i<array.lenght; i++) {
        sum += array[i];
    }

    return sum;
    
}

//"i" è usato convenzionalmente come sigla per "indice"
// (let i = 0): Inizializza una variabile i a 0. Questa variabile è utilizzata come indice per accedere agli elementi dell'array. i rappresenta la posizione corrente nell'array.
//(i < arr.length): Questa condizione viene controllata prima di ogni iterazione del ciclo. Se i è minore della lunghezza dell'array (arr.length), il ciclo continuerà ad eseguire; arr.length restituisce il numero totale di elementi nell'array. Se, ad esempio, l'array contiene 4 elementi, arr.length sarà 4.
//(i++): Questo è l'operatore di incremento. Dopo ogni iterazione del ciclo, i viene aumentato di 1. Quindi, se i era 0, dopo la prima iterazione diventa 1, dopo la seconda diventa 2, e così via.
//(sum += arr[i]): All'interno del ciclo, si utilizza sum += arr[i]. Questo è un modo per sommare il valore corrente all'accumulatore sum; arr[i] accede all'elemento dell'array alla posizione i. Ad esempio, se i è 0, arr[i] restituirà il primo elemento dell'array; L'operatore += è un'abbreviazione per sum = sum + arr[i], che aggiunge il valore corrente di arr[i] a sum.
