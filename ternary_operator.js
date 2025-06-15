function puedeConducir(){
    let age = parseInt(document.getElementById("age").value);
    let message = age >= 18 ? "Puedes conducir" : "No puedes conducir";

    document.getElementById("ageMessage").innerHTML= message;

}

function descubreElMayor(){
    let num1 = parseInt(document.getElementById("numTernario1").value);
    let num2 = parseInt(document.getElementById("numTernario2").value);
    let message = ""

    if (isNaN(num1) || isNaN(num2)) {
        message = "Por favor, introduce dos números válidos.";
    } else if (num1 === num2){
        message = "Los dos valores son iguales";
    } else {
        message = num1>num2 ? "El primer número es mayor que el segundo" : "El segundo número es mayor que el primero";
    }

    document.getElementById("numberMessage").innerHTML= message;
} 

function positivoNegativo (){
    let numero = parseInt(document.getElementById("numeroOperadorTernario").value);

    let respuesta = numero > 0 ? "Es positivo":
                    numero < 0 ? "Es negativo":
                                 "Es igual a 0";  
    
    document.getElementById("resultadoPositivoNegativo").innerHTML=respuesta;
} 


function numeroMayor(num1,num2,num3){
    num1 = 5;
    num2 = 10;
    num3 = 2;

    let resultado = num1 > num2 && num1 > num3? "El primer número es mayor":
                    num2 > num1 && num2 > num3? "El segundo número es mayor":
                                                "El tercer número es mayor";

    console.log(resultado);
}
 
function parOImpar(){
    const numbers = [1,2,3,4,5,6];

    for (let i = 0; i < numbers.length; i++) {
        let resultado = (numbers[i] % 2 == 0)? "Es par": "Es impar";
        console.log(`${numbers[i]}: ${resultado}`)
    }
}