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

function mostrarObjeto(){
    const obj1 = { Nombre: "Ona", Edad: 25, Ciudad: 'Barcelona' };

    for(let propiedad in obj1){
        console.log(propiedad);
        console.log(obj1[propiedad]);
    }
}

function buscarNumero(){
    const numeros = [1,2,3,4,5,6];

    for(let numero of numeros) {
        console.log(numero);
        if (numero === 5){
            break
        }
    }
}

function mostrarArray(){

    const nombres = ["Anna", "Bernat", "Clara"];

    for(let [index, nombre] of nombres.entries()){
        console.log(index + ": "+nombre);
    }
}