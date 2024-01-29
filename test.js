const { sum } = require('./app.js');

test('adds 7 + 3 to equal 10', () => {
    let total = sum(14, 9)
    
    expect(total).toBe(23)
})

const { fromEuroToDollar } = require('./app.js')
test("One euro should be 1.07 dollars", function() {

    const dollars = fromEuroToDollar(3.5)

    const expected = 3.5 * 1.07;

    expect(fromEuroToDollar(3.5)).toBe(3.745)
})  

const { fromDollarToYen } = require('./app.js')
test("One dollar should be 148.19 yen", function() {

    const yen = fromDollarToYen(1)

    const expected = 148.19 * 1;

    expect(fromDollarToYen(1)).toBe(148.19)

})

const { fromYenToPound } = require('./app.js')
test("1 yen should be 0.0053GBP", function() {

    const yen = fromYenToPound(1)

    const expected = 0.0053 * 1;

    expect(fromYenToPound(1)).toBe(0.0053)

})