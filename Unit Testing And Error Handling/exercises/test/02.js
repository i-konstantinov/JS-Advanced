const {expect} = require('chai');
const {isOddOrEven} = require('../02evenOrOdd');


describe('Test evenOrOdd', () => {
    it('"hello" => odd', () => {
        expect(isOddOrEven('hello')).to.equal('odd');
    });
    it('"haha" => even', () => {
        expect(isOddOrEven('haha')).to.equal('even');
    });
    it('!str => undefined', () => {
        expect(isOddOrEven(5)).equals(undefined);
        expect(isOddOrEven(5.1)).equals(undefined);
        expect(isOddOrEven(['hello'])).equals(undefined);
        expect(isOddOrEven({})).equals(undefined);
    });
});