// Boolean
const contaPaga: boolean = false

// Number
const idade: number = 23
const avaliacao: number = 4.5

// String
const nome: string = 'Luciano Pastine'

// Array
const idades: number[] = [23, 28, 45, 32, 45]
const idades2: Array<number> = [23, 28, 45, 32, 45]

// Tuple
let jogadores: [string, number, boolean]
jogadores = ['Luciano', 3, true]

// Enum
enum StatusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado

// Any
const retornoDaApi: any[] = [123, 'Luciano', false]
const retornoDaApi2: any = {
    // .......
}

// Void
function printarNaTela(msg: string): void {
    console.log(msg)
}

// Null e Undefined
const u: undefined = undefined
const n: null = null

// Object
function criar(objeto: object) {
    // ......
}
criar({
    propriedade: 1,
})
// criar('Luciano') // Dá erro

// Never
function loopInfinito(): never {
    while(true) { }
}

function erro(mensagem: string): never {
    throw new Error(mensagem)
}

function falha() {
    return erro('Algo falhou')
}

// Union Types | Poder ter um tipo ou outro
const nota: string | number = 5
function exibirNota(nota: number | string) {
    console.log(`A nota é ${nota}`)
}

exibirNota('10')
exibirNota(10)

// Alias | Declaro um alias para um tipo de dado
type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}

// type Funcionarios = Array<Funcionario>
const funcionarios: Funcionario[] = [{
    nome: 'Luciano',
    sobrenome: 'Pastine',
    dataNascimento: new Date()
}, {
    nome: 'Karla',
    sobrenome: 'Pastine',
    dataNascimento: new Date()
}]

function tratarFuncionarios(funcionarios: Funcionario[]) {
    for(let funcionario of funcionarios) {
        console.log('Nome do funcionário: ', funcionario.nome)
    }
}

// Nulos ou Opcionais
let altura: number | null = 1.6
altura = null

type Contato = {
    nome: string
    telefone1: string
    telefone2?: string
}
const contato: Contato = {
    nome: 'Luciano',
    telefone1: '123456'
}

// Type Assertion
const minhaIdade: any = 25;
(minhaIdade as number).toString();
// (<number>minhaIdade).toString()

// const input = document.getElementById('numero1') as HTMLInputElement
const input = <HTMLInputElement>document.getElementById('numero1')
console.log(input.value)

// Interfaces | interface > alias
interface Usuario {
    nome: string;
    email: string;
    address?: string;
}

function getUser(): Usuario {
    return {
        nome: 'Luciano',
        email: 'lucianopastine.tech@gmail.com'
    }
}

function setUser(usuario: Usuario) {
    // ...
}