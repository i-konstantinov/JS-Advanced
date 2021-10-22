const {expect} = require('chai');
const {lookupChar} = require('../03CharLookup');


describe('Test character lookup', () => {
    it('happy case', () => {
        expect(lookupChar('example', 1)).to.equal('x');
        expect(lookupChar('e', 0)).to.equal('e');
    })
    it('first arg != String => undefined', () => {
        expect(lookupChar(3, 3)).to.be.undefined;
        expect(lookupChar(['example'], 3)).to.be.undefined;
    })
    it('second arg != Integer => undefined', () => {
        expect(lookupChar('example', '1')).to.be.undefined;
        expect(lookupChar('example', 1.5)).to.be.undefined;
        expect(lookupChar('example', [1])).to.be.undefined;
    })
    it('passed Integer out of String.length range => Incorrect index', () => {
        expect(lookupChar('example', -1)).to.equal('Incorrect index');
        expect(lookupChar('example', 7)).to.equal('Incorrect index');
        expect(lookupChar('', 0)).to.equal('Incorrect index');
    })
})