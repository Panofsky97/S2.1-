function mostrarNombres(){
    const nombres = ["Cristian", "Marc", "Aida", "Pol"];
    nombres.forEach(nombre => console.log (nombre));
}

function imprimirNombres(){
    const nombres = ["Anna", "Bernat", "Clara"];
    for(let nombre of nombres){
        console.log(nombre);
    }
}

function filtrarPares(){
    const numeros = [1,2,3,4,5];
    const pares = numeros.filter(num => num % 2 == 0);

    console.log(pares);


}