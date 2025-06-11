function mostrarArrays (){
    const array1 = ["azul", "verde", "rosa", "lila"];
    const array2 = ["magenta", "jade", "amarillo"];
    const array3 = [...array1,...array2];

    let texto1 = array1.join(" , ");
    let texto2 = array2.join(" , ");
    let texto3 = array3.join(" , ");

    document.getElementById("mostrar").innerHTML= "Array 1: " + texto1 + "<br> Array 2: " + texto2 + "<br> Array 3: " + texto3;

}


