/*Exercise 1*/

function sumarValores(){

    let a = parseInt(document.getElementById("number1").value);
    let b = parseInt(document.getElementById("number2").value);
    
    let add = (a, b) => a + b;
    
    document.getElementById("result").innerHTML = "La Suma de " + a + " y " + b + " es: " + add(a, b);
}

/*Exercise 2*/

function randomNumber(){

  let getNumber = () =>  Math.floor((Math.random() * 100) + 1);

  let number = getNumber();

  document.getElementById("randomResult").innerHTML = "Tu número es el : " + number;

}

/*Excercise 3*/

function saludos(){

class Person{
  constructor(name){
    this._name = name;
  }
  set name(name){
    this._name = name;
  }
  get name(){
    return this._name;
  }

  greet = (username) => {
    return `Hola ${username}, mi nombre es Alexa.`;
  } 
}

  let username = document.getElementById("name1").value;
  let newName = new Person(name);
  let finalMessage = newName.greet(username);

  document.getElementById("greetMessage").innerHTML = finalMessage; 
  
}





