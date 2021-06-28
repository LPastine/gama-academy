const calcularAnos = () => {
    var idade, qtMeses, qtDias, sobra

    // Entrada
    idade = window.prompt('Digite a idade em dias:')
    console.log(idade);

    // Processamento
    let qtAnos = parseInt(idade / 365);

    sobra = parseInt(idade % 365)

    qtMeses = parseInt(sobra / 30)

    qtDias = parseInt(sobra % 30)

    // Saída
    console.log(qtAnos + " ano(s)\n");
    console.log("Sobraram " + sobra + " dias\n");
    console.log(qtMeses + " meses\n");
    console.log(qtDias + " dia(s)\n");
}

calcularAnos()