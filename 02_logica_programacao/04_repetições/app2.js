const quadradopar = (numero) => {
    var par = 2
    var quadrado = 2
    if (numero %2 == 0 && numero > 5 && numero < 2000){
        console.log(`Calculando os quadrados dos números pares até ${numero}`);
        while (par != numero + 2) {
            resultado  = par ** quadrado
            console.log(`${par} ^ ${quadrado} = ${resultado}` )
            par += 2
        } 
    } 
    if (numero %2 != 0 && numero > 5 && numero < 2000) {
        console.log(`Calculando os quadrados dos números pares até ${numero}`);
        while (par != numero + 1) {
            resultado  = par ** quadrado
            console.log(`${par} ^ ${quadrado} = ${resultado}` )
            par += 2
        } 
    } 
    if (numero <= 5 || numero >= 2000) {
        console.log(numero);
        console.log('O número deve estar entre 5 e 2000...');
    }
}
quadradopar(6)
quadradopar(21)