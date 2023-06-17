{

    const calculateResult = (amount, currency) => {

        const rateEUR = 4.5915;
        const rateAUD = 2.7498;
        const rateCAD = 3.0483;
        const rateCZK = 0.1954;
        const rateGBP = 5.1805;
        const rateRUB = 0.0510;
        const rateUSD = 4.1541;

        switch (currency) {
            case "EUR":
            return amount / rateEUR;
            

            case "AUD":
            return amount / rateAUD;
            

            case "CAD":
            return amount / rateCAD;
           

            case "CZK":
            return amount / rateCZK;
            

            case "GBP":
            return amount / rateGBP;
            

            case "RUB":
            return amount / rateRUB;
           

            case "USD":
            return amount / rateUSD;
            
        }
    };  
    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML=`${amount.toFixed(2)} PLN = <strong> ${result.toFixed(2)} ${currency} </strong>`;}
        

    const onFormSumbit = (event) => {
        event.preventDefault();


        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        

        const amount = +amountElement.value;
        const currency = currencyElement.value;


        const result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);

        }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSumbit);



    };

    init();


}
