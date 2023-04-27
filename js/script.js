console.log("Hello!");

let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.6898;
let rateAUD = 2.9430;
let rateCAD = 3.2014;
let rateCZK = 0.1937;
let rateGBP = 5.3523;
let rateRUB = 0.0562;
let rateUSD = 4.4015;

formElement.addEventListener("submit", (event) => {
event.preventDefault();


let amount = +amountElement.value;
let currency = currencyElement.value;
let result;

switch (currency) {
    case "EUR":
        result = amount / rateEUR;
        break;
    case "AUD":
        result = amount / rateAUD;
        break;
    case "CAD":
        result = amount / rateCAD;
        break;
    case "CZK":
        result = amount / rateCZK;
        break;
    case "GBP":
        result = amount / rateGBP;
        break;
    case "RUB":
        result = amount / rateRUB;
        break;
    case "USD":
        result = amount / rateUSD;
        break;
}
resultElement.innerHTML=`${amount.toFixed(2)} PLN = <strong> ${result.toFixed(2)}${currency} </strong>`;


}

)