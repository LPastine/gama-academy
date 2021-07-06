// Exemplos de tipos de dados

var myName = 'Luciano' // string

var age = 25 // number

var height = 1.70 // float

// null => objeto vazio, que não possui dados
// undefined => valor que não foi definido

var isStudent = true // boolean

// Objeto, array e função

// Objeto
var person = {
    "name": "Luciano",
    "age": 25,
    "height": 1.70
}

// Array
var students = ['Luciano', 'Maria', 'João']

// Função
function sum(a, b) {
    return a + b
}

// Operador typeof serve para saber o tipo de dado que estamos lidando

var age = 25
console.log(typeof age); // number

var isStudent = true
console.log(typeof isStudent); // boolean

var object = null
console.log(typeof object); // object

function sum(a, b) {
    return a + b
}
console.log(typeof sum); // function
