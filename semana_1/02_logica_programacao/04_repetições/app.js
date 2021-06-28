const tabuada = (tabuada) => {
    var contador = 0

    while (contador <= 10) {
        resultado = tabuada * contador
        console.log(tabuada + " x " + contador + " = " + resultado)
        contador += 1
    }
}

tabuada(5)