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


function promesa1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promesa 1 resuelta después de 2 segundos");
        }, 2000);
    });
}

function promesa2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promesa 2 resuelta después de 3 segundos");
        }, 3000);
    });
}

Promise.all([promesa1(), promesa2()])
    .then((resultados) => {
        console.log("Todas las promesas se resolvieron:");
        resultados.forEach((resultado, index) => {
            console.log(`Resultado ${index + 1}:`, resultado);
        });
    })
    .catch((error) => {
        console.error("Una de las promesas falló:", error);
    });


