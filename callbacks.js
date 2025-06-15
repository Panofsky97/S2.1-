function saludar(nombre){
    document.getElementById("greet2").innerHTML ="Hola " + nombre;
}

function procesar(callback){
    let nombre = document.getElementById("callBackName").value;
    callback(nombre);
}

procesar(saludar);


function calculadora (num1, num2){
    document.getElementById("resultadoCalculadora").innerHTML= (num1 + num2);
}

function procesarNumeros(callback){
    let num1 = parseInt(document.getElementById("callBackNumber1").value);
    let num2 = parseInt(document.getElementById("callBackNumber2").value);
    callback(num1, num2)
}

procesarNumeros(calculadora);


async function saludo2() {
  console.log("Esperando...");
  await esperar(2000);
  console.log("¡Has esperado 2 segundos!");
}

function procesarElementos(array, callback){
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

function mostrarNumeros(){
    const numbers = [2,6,7,8];
    procesarElementos (numbers, function(number){
        console.log(number);
    })
}

function procesarCadena(array,callback){
    let cadena = "";
    for (let i = 0; i < array.length; i++) {
        cadena = array[i].toUpperCase();
        callback(cadena)
    }
}

function mostrarCadena(){
    const letters = ["a", "b", "c", "d", "e"];

    procesarCadena(letters, function(cadena){
        console.log(cadena);
    })
}