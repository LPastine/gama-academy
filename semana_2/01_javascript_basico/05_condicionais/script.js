// Condicionais

var num = 5

if (num === 1) {
    console.log('num é igual a 1')
} else if (num === 2) {
    console.log('num é igual a 2')
} else {
    console.log('num é igual a 5')
}

// Switch case

var mes = 'janeiro'

switch (mes) {
    case 'fevereiro':
        console.log('mes 2')
        break // palavra reservada para interromper esse tipo de código, caso ele foi atendido,
        // senão continua executando o resto do código embaixo
    case 'março':
        console.log('mes 3')
        break
    case 'janeiro':
        console.log('mes 1')
        break 
    case 'janeiro':
    console.log('mes 1')
    break
    default:
        console.log('nenhum dos caso acima atendidos')
}