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

// Parte do código que usa a pilha
push(10)
push(20)
push(30)

console.log(elementos);