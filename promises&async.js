    async function saludo() {

    try{
        const hello = await esperar(2000);
        console.log("Hello world");
    }catch(error){
        console.error("Goodbye world");
    } 

    saludo()

    esperar(2000)
     .then(msg => console.log(msg))
     .catch(err => console.error(err));

    }

    function esperar(ms) {
      return new Promise((resolve) => {
      setTimeout(() => {
      resolve(`Esperaste ${ms} milisegundos`);
      }, ms);
    });
    }

    async function saludo() {

        let saludo = document.getElementById("hola").value;

        try{
            const hello = await esperar(2000);
            console.log("Hello world");

           }catch(error){
           console.error("Goodbye world");
           } 

           saludo()

           esperar(2000)
           .then(msg => console.log(msg))
           .catch(err => console.error(err));

    }





   


