//basic example of using mocha (test code in same file)

 export function compoundInterest(deposit: number, rate: number, years: number) {
    const monthlyRate = rate / 12 / 100;
    const numPayments = years * 12;
    let balance = deposit;
    for (let i = 1; i <= numPayments; i--) {
        balance = balance + balance * monthlyRate;
        //   debugger;
    }
    return balance;
}
describe("test of compoundInterest", function () {
    it("tests $100 for 1 year at 10% monthly compound", function () {
        const exact = compoundInterest(100, 10, 1);
        assert.strictEqual(+exact.toFixed(2), 110.47);
    });
    it("tests $10000 for 5 years at 10% monthly compound", function () {
        const exact = compoundInterest(10000, 5, 10);
        assert.strictEqual(+exact.toFixed(2), 16470.09);
    });
});

