function mostrarArrays (){
    const array1 = ["azul", "verde", "rosa", "lila"];
    const array2 = ["magenta", "jade", "amarillo"];
    const array3 = [...array1,...array2];

    let texto1 = array1.join(" , ");
    let texto2 = array2.join(" , ");
    let texto3 = array3.join(" , ");

    document.getElementById("mostrar").innerHTML= "Array 1: " + texto1 + "<br> Array 2: " + texto2 + "<br> Array 3: " + texto3;

}

function restFunction (...finalNumbers){
    let numbers = document.getElementById("restNumbers").value;
    finalNumbers = numbers.split(",").map(num => parseFloat(num.trim()));

    let suma = finalNumbers.reduce((acumulador, actual) => {
       return acumulador + actual; 
    }, 0);

    document.getElementById("resultRest").innerHTML= "La suma de los valores introducidos es " + suma;
}

function modificarObjetos(){
    const objeto1 = {
        nombre : "David",
        edad: 32,
        altura: 182,
    }

    const objeto2 ={
        ...objeto1
    }

    objeto2.altura = 165;

    console.log(objeto1);
    console.log(objeto2);
}

function resultadosCompeticion(){
    const corredores = ["Luis" , "Jorge" , "Kike", "Oscar", "Roger"];
    const [primero, segundo, tercero, ...resto] = corredores;

    console.log(primero);
    console.log(segundo);
    console.log(tercero);
    console.log(resto);
}

function fusionObjetos (){

    const objeto1 = {
        Nombre: "Alicia",
        Edad: 25,
        Nacionalidad: "peruana",
    }

    const objeto2 = {
        Apellido: "Retamozo",
        Hobbie: "Cantar",
        Profesión: "Profesora",
    }

    const objeto3 = {...objeto1,...objeto2};

    console.log(objeto1);
    console.log(objeto2);
    console.log(objeto3);
}



