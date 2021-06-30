// Declarar um vetor
var elementos = []
// Declaramos -1 porque as possições começam em 0
var topo = -1
// Declaramos o tamanho do vetor
const MAX = 10

// Exemplo de função push
function push(num){
    if (topo < MAX) {
        topo += 1
        elementos[topo] = num
    } else {
        console.log('Pilha está cheia');
    }
}

// Exemplo de função pop
function pop() {
    if (topo != -1){
        let num = elementos[topo]
        topo -= 1
        return num
    } else {
        console.log('Pilha está vazia');
    }
}

function estaVazia() {
    return topo == -1
}

// Parte do código que usa a pilha

// push(10)
// push(20)
// push(30)

// console.log(elementos)
// console.log(pop())
// console.log(pop())
// console.log(pop())

// Exercício de transformar número decimal em binário

var numDecimal = 10
var resto

while (numDecimal != 0) {
    resto = parseInt(numDecimal % 2)
    push(resto)
    numDecimal = parseInt(numDecimal / 2)
}

while (!estaVazia()){
    console.log(pop());
}
