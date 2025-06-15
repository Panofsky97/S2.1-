function saludoPromesa(){
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello world");
        }, 2000);
    })

    promesa.then((mensaje) =>{
        console.log(mensaje)
    })
}

function saludoPromesa2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello world");
        }, 2000);
    })
}

async function mostrarSaludo(){
    console.log("Esperando respuesta...");

    let respuesta = await saludoPromesa2();

    console.log("Respuesta recibida: " + respuesta);

} 

mostrarSaludo();

async function saludoCondicional (){
    let nombre = document.getElementById("holaPromise").value;
    const saludo = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (nombre == "Hola"){
                resolve("Hello world");
            }else{

                reject("Error")
            }
        }, 2000);
    })

    saludo.then((mensaje) =>{
        console.log(mensaje)
    });

    try {
        let resultado = await saludo;
        console.log("Respuesta recibida: ");
    }

    catch(error) {
        console.log(error)
    };

}
   


