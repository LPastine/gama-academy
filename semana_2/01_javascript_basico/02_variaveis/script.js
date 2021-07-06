// As variáveis podem ser var, let ou const. Exemplos...

var myName = 'Luciano'

let language = 'JavaScript'

const pattern = 'ECMAScript'

// Escopo local

// Let
{
    let age = 32
}

// Não reconhece a variável fora do escopo onde foi declarada
console.log(age)

// Escopo global

// Var
{
    var age = 32
}

// Vai logar o valor, inclusive fora do escopo onde foi declarada
console.log(age)

// "Debaixo dos panos" está acontecendo "hoisting". Implicitamente o var age é declarado fora do escopo local.
// Ou seja o JavaScript está fazendo o seguinte:

var age = 32
{
    age = 32
}