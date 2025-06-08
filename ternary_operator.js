function puedeConducir(){
    let age = parseInt(document.getElementById("age").value);
    let message = age >= 18 ? "Puedes conducir" : "No puedes conducir";

    document.getElementById("ageMessage").innerHTML= message;

}

function descubreElMayor(){
    let number1 = parseInt(document.getElementById("number1").value);
    let number2 = parseInt(document.getElementById("number2").value);
    let message = ""

    number1 > number2 ? "El primer número es mayor que el segundo" : "El segundo número es mayor que el primero";

    document.getElementById("numberMessage").innerHTML= message;
}