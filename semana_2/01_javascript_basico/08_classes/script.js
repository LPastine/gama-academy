class Book {
    // Definir construtor com parâmetros
    constructor(title, author, pages) {
        // Atribuir os valores dos atributos da classe ao ser instanciada
        this.title = title
        this.author = author
        this.pages = pages
    }

    // Definir um método
    read() {
        return `Estou lendo ${this.title}`
    }
}

// Instanciar objeto
let book = new Book('Algoritmos para viver', 'Brian', 500)
let otherBook = new Book('Um Exu em Nova York', 'Cidinha da Silva', 100)

console.log(book)
console.log(book.read())

console.log(otherBook)
console.log(otherBook.read())

// Herança

class ITBook extends Book {
    // Podemos adicionar mais parâmetros aos da superclasse
    constructor(title, author, pages, technology) {
        // Para herdar os atributos da classe anterior precisamos usar o método super()
        super(title, author, pages)
        // Atribuir os valores dos atributos da subclasse
        this.technology = technology 
    }
}

let itBook = new ITBook('Algoritmos para viver', 'Brian', 500, 'Algoritmos')

console.log(itbook, itbook.read(), itbook.technology)

// Encapsulamento - Getters & Setters

class Person {
    constructor(name) {
        // Quando colocamos um _ antes do nome do atributo, lhe damos uma característica de privado
        // ainda que não seja exatamente privado...
        this._name = name
    }

    // Declaramos o método getter que vai disponibilizar as informações encapsuladas
    get name() {
        return this._name
    }

    // Declaramos o método setter que permite atribuir valores novos aos parámetros encapsulados
    set name(value) {
        this._name = value
    }
}

let person = new Person('Luciano')
console.log(person.name);
person.name = 'Lucho'
console.log(person.name);