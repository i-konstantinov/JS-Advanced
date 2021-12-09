const testNumbers = require("./testNumbers");
const { expect } = require('chai');
const { describe, it} = require('mocha');



describe('Test Numbers', () => {
    describe('sumNumbers', () => {
        it('works with valid nums', () => {
            expect(testNumbers.sumNumbers(3, 5)).to.equal('8.00')
        });
        it('works with negative nums', () => {
            expect(testNumbers.sumNumbers(3, -5)).to.equal('-2.00')
            expect(testNumbers.sumNumbers(-3, -5)).to.equal('-8.00')
        });
        it('works with float nums', () => {
            expect(testNumbers.sumNumbers(3.668, 5)).to.equal('8.67')
            expect(testNumbers.sumNumbers(3.6, 5.6)).to.equal('9.20')
        });
        it('not working with missing params or not nums', () => {
            expect(testNumbers.sumNumbers(5)).to.equal(undefined)
            expect(testNumbers.sumNumbers(null, 5)).to.equal(undefined)
            expect(testNumbers.sumNumbers(3, '5')).to.equal(undefined)
        });
    });

    describe('numberChecker', () => {
        it('works with odd or even Number', () => {
            expect(testNumbers.numberChecker(5)).to.contains('odd');
            expect(testNumbers.numberChecker(4)).to.contains('even');
        });
        it('works with float and negative', () => {
            expect(testNumbers.numberChecker(5.5)).to.contains('odd');
            expect(testNumbers.numberChecker(-6)).to.contains('even');
        });
        it('can parse from string', () => {
            expect(testNumbers.numberChecker('5.5')).to.contains('odd');
            expect(testNumbers.numberChecker('6')).to.contains('even');
        });
        it('detect invalid params', () => {
            expect(() => testNumbers.numberChecker('a')).to.throw("The input is not a number!");
            expect(() => testNumbers.numberChecker(null)).to.throw("The input is not a number!");
        });
    });

    describe('averageSumArray', () => {
        it('works with a valid array', () => {
            expect(testNumbers.averageSumArray([2, 5, 8])).to.equal(5);
            expect(testNumbers.averageSumArray([1, 7, 13, 11])).to.equal(8);
            expect(testNumbers.averageSumArray([0])).to.equal(0);
            expect(testNumbers.averageSumArray([2])).to.equal(2);
        })
    });
})