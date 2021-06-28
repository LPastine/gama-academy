// Conceitos

const calcularconceitos = (nota1, nota2) => {
    var media

    console.log(nota1)
    console.log(nota2);

    media = (nota1 + nota2)/2

    if (media >= 9 && media <= 10) {
        console.log("Conceito A");
    } else {
        if (media >= 8 && media < 9) {
            console.log('Conceito B');
        } else {
            if (media >=7 && media < 8) {
                console.log('Conceito C');
            } else {
                if (media >=6 && media < 7) {
                    console.log('Conceito D');
                } else {
                    console.log('Reprovado');
                }
            }
        }
    }
}

calcularconceitos(10,10)