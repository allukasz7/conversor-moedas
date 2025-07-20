const convertButton = document.querySelector(".convert-button")
const selectCurrency = document.querySelector(".select-currency")

function convertCurrency() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    console.log(selectCurrency.value)
    const dolarToday = 5.58
    const euroToday = 6.49

    // Atualiza o valor em Real (moeda de origem)
    if (inputCurrencyValue) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    } else {
        currencyValueToConvert.innerHTML = "R$ 0,00"
    }

    // Converte para a moeda selecionada
    if (selectCurrency.value == "dolar") { //se o valor selecionado for dolar
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (selectCurrency.value == "euro") { //se o valor selecionado for euro
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
}

function changeCurrency(){
  const currencyName = document.getElementById("currency-name")
  const currencyImage = document.querySelector(".currency-img")
if (selectCurrency.value == "dolar") { //se o valor selecionado for dolar
    currencyName.innerHTML = "Dólar americano"
    currencyImage.src = "./assets/dolar.png"
  } 

if (selectCurrency.value == "euro") { //se o valor selecionado for euro
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/euro.png"
  } 

convertCurrency() //chama a função para atualizar o valor convertido
 
}


selectCurrency.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertCurrency)







