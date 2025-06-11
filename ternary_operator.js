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

// const descubreElMayor2 = (num1, num2) => num1 > num2 ? "Son dos valores son iguales" : "El numero mayor es: ${}"
