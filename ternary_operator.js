function puedeConducir(){
    let age = parseInt(document.getElementById("age").value);
    let message = age >= 18 ? "Puedes conducir" : "No puedes conducir";

    document.getElementById("ageMessage").innerHTML= message;

}

function descubreElMayor(){
    let num1 = parseFloat(document.getElementById("number1").value);
    let num2 = parseFloat(document.getElementById("number2").value);
    let message = ""

    if (num1 === num2){
        message = "Son dos valores son iguales";
    } else {
        message = num1>num2 ? "El primer número es mayor que el segundo" : "El segundo número es mayor que el primero";
    }

    document.getElementById("numberMessage").innerHTML= message;
}