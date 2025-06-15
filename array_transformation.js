function mapFunction (){
    const array1 = [1,2,3,4];
    const array2 = array1.map(Math.pow);

    console.log(array2);

}

function numerosPares(){
    const numeros = [1, 2, 3, 4];

    const pares = numeros.filter(num => num % 2 === 0);

    console.log(pares);
}

function mayorDe10 (){
    const numeros = [1,10,8,11];
    const resultado = numeros.find(num => num > 10);
    console.log(resultado);
}

function reduceFunction(){
    const numeros = [13,7,8,21];

    let suma = numeros.reduce((acumulador, actual) => {
       return acumulador + actual; 
    }, 0);

    console.log(suma);
}


function calcular(){
     const nums = [1,3,7,10,15,17,11,5,8,12,9];

     const procesar = nums => nums.filter(n => n >= 10).map(n => n * 2).reduce((a, b) => a + b, 0);

     console.log(procesar(nums))
}

function detectarMayor(){
    const nums = [11,12,13,14];

    const hayMayor = nums.some(n => n > 10);
    const todosMayores = nums.every(n => n > 10);

    console.log(hayMayor);
    console.log(todosMayores);
}