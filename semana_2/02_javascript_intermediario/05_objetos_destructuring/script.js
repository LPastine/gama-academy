const pessoa = {
    nome: "Simara",
    idade: 32,
    cidade: "São Paulo"
}

//Notação de ponto
console.log(pessoa.nome) //"Simara"

//Notação de colchetes
console.log(pessoa['idade']) //32

//Como desestruturar Objetos 
const { nome, idade, cidade } = pessoa

console.log(nome) //"Simara"
console.log(idade) //32
console.log(cidade) //São Paulo

// Desestruturar um array de Objetos
const filmes = [
    { 
        id: 1,
        titulo: "Dilema das Redes",
        descricao: "Um documentario sobre tecnologia.",
        duracao: 120
    },
    { 
        id: 2,
        titulo: "Us",
        descricao: "Um filme de terror legal demais.",
        duracao: 120
    },
    { 
        id: 3,
        titulo: "Corra",
        descricao: "Um filme de suspense bem legal.",
        duracao: 120
    },
]

const [{id, titulo, descricao, duracao}]  = filmes

filmes.map(filme => console.log(filme.descricao))