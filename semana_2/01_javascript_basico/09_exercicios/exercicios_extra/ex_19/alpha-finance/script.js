const buyRate = 5.05

// UI Variables
const submitButton = document.getElementById('submit-button')
const localCurrencyAmountInput = document.getElementById('local-currency-amount')
const internationalCurrencyAmountInput = document.getElementById('international-currency-amount')


// Listen form submit
submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('click on submit button');
    // Receive the local currency amount
    let localCurrencyAmount = localCurrencyAmountInput.value
    console.log(`O montante recebido foi de ${localCurrencyAmount} com uma taxa de ${buyRate}`);
    // Assign the converted value to the form input tag
    internationalCurrencyAmountInput.value = currencyConvertor(buyRate, localCurrencyAmount)
    console.log(`O total convertido a dólares é USD ${internationalCurrencyAmountInput.value}`);
})

// Calculate the Sell Rate of Convertion
const calculateSellRate = (buyRate) => {
    let sellRate = 1 / buyRate
    sellRate = parseFloat(sellRate)
    console.log(`The sell rate is ${sellRate}`);
    return sellRate
}

// Convert Local Currency Amount to US Dollars
const currencyConvertor = (buyRate, localCurrencyAmount) => {
    let sellRate = calculateSellRate(buyRate)
    let internationalCurrencyAmount = localCurrencyAmount * sellRate
    internationalCurrencyAmount = parseFloat(internationalCurrencyAmount).toFixed(2)
    console.log(`The result is ${internationalCurrencyAmount}`);
    return internationalCurrencyAmount
}