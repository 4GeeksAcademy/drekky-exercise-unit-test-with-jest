let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}


const fromEuroToDollar = function(valueInEuro) {
    
    let valueInDollar = valueInEuro * 1.07;
    
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    
    let valueInYen = valueInDollar * 148.19;

    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    
    let valueInPound = valueInYen * 0.0053;

    return valueInPound;
}

const sum = (a,b) => {
    return a + b
}

console.log(sum(7, 3))

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }