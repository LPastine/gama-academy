var colors = ["black", "white", "yellow", "green", "blue"]

// For Loop - 3 parâmetros (contador, condição para continuar iteração, o que fazer com o contador 
// com cada iteração)
for(var i=0; i < colors.length; i++) {
    console.log(i);
    console.log(colors[i])
}

// While Loop - Primeiro verifica a condição, depois o algoritmo é executado
var i = 0

while (i < 10) {
    console.log(i)
    i++
}

// Do While - O algoritmo é executado, depois verifica se repete ou não
var i = 0
do {
    console.log(i)
    i++
} while (i < 10)
