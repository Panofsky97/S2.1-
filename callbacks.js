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