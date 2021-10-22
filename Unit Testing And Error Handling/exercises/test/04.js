const {expect} = require('chai');
const {mathEnforcer} = require('../04MathEnforcer');

describe('Test mathEnforcer functions', () => {
    describe('func addFive, should return number + 5', () => {
        it('should return undefined if number !== Number', () => {
            expect(mathEnforcer.addFive('3')).to.equal(undefined);
            expect(mathEnforcer.addFive('example')).to.equal(undefined);
            expect(mathEnforcer.addFive([3])).to.equal(undefined);
            expect(mathEnforcer.addFive({number: 3})).to.equal(undefined);
            expect(mathEnforcer.addFive(undefined)).to.be.undefined;
        })
            it('happy case: should return number + 5 with Integer', () => {
            expect(mathEnforcer.addFive(3)).to.equal(8);
            expect(mathEnforcer.addFive(-2)).to.equal(3);
        })
        it('happy cases: should return number within 0.01 range of (number +5) with Float', () => {
            expect(mathEnforcer.addFive(1.05)).to.be.closeTo(6.05, 0.01);
        })
    })
    describe('func subtractTen, should return number - 10', () => {
        it('should return undefined with if given number !== Number', () => {
            expect(mathEnforcer.subtractTen('11')).to.equal(undefined);
            expect(mathEnforcer.subtractTen('example')).to.equal(undefined);
            expect(mathEnforcer.subtractTen([11])).to.equal(undefined);
            expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
        })
        it('happy cases: should return number - 10 with Integer', () => {
            expect(mathEnforcer.subtractTen(11)).to.equal(1);
            expect(mathEnforcer.subtractTen(1)).to.equal(-9);
            expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
        })
        it('happy cases: should return number within 0.01 range of (number - 10) with Float', () => {
            expect(mathEnforcer.subtractTen(15.05)).to.be.closeTo(5.05, 0.01)
        })
    })
    describe('func sum, should return number1 + number2', () => {
        it('should return undefined if number1 or number2 !== string', () => {
            expect(mathEnforcer.sum(1, '1')).to.equal(undefined);
            expect(mathEnforcer.sum([1], 1)).to.equal(undefined);
        })
        it('happy cases: should return number1 + number2 with Integer or Float', () => {
            expect(mathEnforcer.sum(1, 1)).to.equal(2);
            expect(mathEnforcer.sum(1.05, 1)).to.be.closeTo(2.05, 0.01);
            expect(mathEnforcer.sum(1.05, 1.5)).to.be.closeTo(2.55, 0.01);
        })
    })
})
