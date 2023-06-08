const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert" ); // valor em real
  const currencyValueConverted = document.querySelector(".currency-value"); // outras moedas

  console.log(currencySelect.value);
  const dolarToday = 5.2;
  const euroToday = 6.2;
  const bitcoinToday = 133.888;
  const francoSuiçoToday = 5.4;

  

if(currencySelect.value == "dolar") {  // se o select estiver selecionado o valor de dolar, entre aqui
  currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
    style: "currency",
    currency:"USD"
  }).format(inputCurrencyValue / dolarToday);
}

if(currencySelect.value == "euro") {  // se o select estiver selecionado o valor de euro, entre aqui
  currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR"
  }).format(inputCurrencyValue/euroToday);

}

if(currencySelect.value == "bitcoin") {  // se o select estiver selecionado o valor de dolar, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
      style: "currency",
      currency:"BTC"
    }).format(inputCurrencyValue /bitcoinToday );
  }
  
  if(currencySelect.value == "franco suíço ") {  // se o select estiver selecionado o valor de dolar, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-CH",{
      style: "currency",
      currency:"CHF"
    }).format(inputCurrencyValue /francoSuiçoToday);
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}
  



function changeCurrency(){
  const currencyname = document.getElementById("currency-name");
  const currencyImage = document.querySelector(".currency-img");

  if(currencySelect.value == "dolar") {
    currencyname.innerHTML = "Dòlar americano"
    currencyImage.src = "./assets/dolar.png"
  }

  if(currencySelect.value == "euro") {
    currencyname.innerHTML = "EURO"
    currencyImage.src = "./assets/euro.png"
  }

  if(currencySelect.value == "bitcoin") {
    currencyname.innerHTML = "Bitcoin"
    currencyImage.src = "./assets/bitcoin.png"
  }

  if(currencySelect.value == "franco-suiço") {
    currencyname.innerHTML = "franco-suiço"
    currencyImage.src = "./assets/img-franco-suiço.png"
  }

  convertValues()
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);


