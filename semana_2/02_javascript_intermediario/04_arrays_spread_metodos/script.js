const alunasGama = ['Paula', 'Maria', 'Estela', 'Clara']

// Acessar informações num array
console.log(alunasGama[3]) // Clara

// Operador spread (...) - Pega os valores da array e adiciona os novos valores
const alunasXp = [...alunasGama, 'Sara']

console.log(alunasXp)

// Métodos de iteração

// Map - Recebe no primeiro parâmetro uma função callback que vai ser executada
// em cada iteração
alunasXp.map(aluna => console.log(aluna))

// Filter
const numeros = [34, 45, 67, 90, 55, 76]

const numerosImpares = numeros.filter(numero => numero % 2 != 0)
console.log(numerosImpares)

const numerosPares = numeros.filter(numero => numero % 2 == 0)
console.log(numerosPares)

// Find
const produtos = ["geladeira", "fogao", "cama", "mesa"]

const encontraCama = produtos.find(produto => produto === "cama")
console.log(encontraCama)

const encontraMesa = produtos.find(produto => produto === "mesa")
console.log(encontraMesa)

// Sort - ordenação 
const numerosOrdenadosCrescente = numeros.sort()
console.log(numerosOrdenadosCrescente)

const numerosOrdenadosDecrescente = numeros.sort((a,b)=> b-a)
console.log(numerosOrdenadosDecrescente)

// Reduce - reduz nosso array a um resultado de uma operação matemática
const numbers = [1,34,35]

const soma = numbers.reduce((valorAnterior, valorAtual)=> {
    return valorAnterior + valorAtual
})

console.log(soma) //75