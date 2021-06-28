// Calcular Média

const calcularmedia = () => {
    var nota1, nota2, media

    nota1 = parseInt(window.prompt('Digite a nota 1:'))
    nota2 = parseInt(window.prompt('Digite a nota 2:'))

    console.log(nota1)
    console.log(nota2);

    media = (nota1 + nota2)/2

    console.log("A media vale = " + media + "\n");

    if (media >= 6) {
        console.log("Parabéns você foi aprovado(a)!\n");
    } else {
        console.log("Obaa nos vemos ano que vem!\n");
    }

    console.log("Fim do programa \n")
}

calcularmedia()