const cinema = require('./cinema');
const { expect } = require('chai');
const { describe, it } = require('mocha');


describe('Cinema functionality', () => {
    describe('showMovies', () => {
        it('detects an empty array', () => {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        });
        it('displays correct output with movie names', () => {
            expect(cinema.showMovies(['Avatar', 'Titanik', 'It'])).to.equal('Avatar, Titanik, It');
            expect(cinema.showMovies(['Avatar'])).to.equal('Avatar');
            expect(cinema.showMovies([10])).to.equal('10');
        });
    })

    describe('ticketPrice', () => {
        it('throws error on invalid projection type', () => {
            expect(() => cinema.ticketPrice('Average')).to.throw('Invalid projection type.');
            expect(() => cinema.ticketPrice('Normall')).to.throw('Invalid projection type.');
            expect(() => cinema.ticketPrice('premiere')).to.throw('Invalid projection type.');
        });
        it('return the corresponding price with valid projectoon type', () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);
        });
    })

    describe('swapSeatsInHall', () => {
        it('detects missing input', () => {
            expect(cinema.swapSeatsInHall(10)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall()).to.equal("Unsuccessful change of seats in the hall.");
        });
        it('detects string input', () => {
            expect(cinema.swapSeatsInHall('10', 11)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(11, '12')).to.equal("Unsuccessful change of seats in the hall.");
        });
        it('detects float input', () => {
            expect(cinema.swapSeatsInHall(10.1, 11)).to.equal("Unsuccessful change of seats in the hall.");
        });
        it('detects matching seat numbers', () => {
            expect(cinema.swapSeatsInHall(10, 10)).to.equal("Unsuccessful change of seats in the hall.");
        });
        it('detects nonexistent seat numbers', () => {
            expect(cinema.swapSeatsInHall(0, 11)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(-5, 11)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(10, 22)).to.equal("Unsuccessful change of seats in the hall.");
        });
        it('works with a pair of valid seat numbers as integers', () => {
            expect(cinema.swapSeatsInHall(10, 11)).to.equal("Successful change of seats in the hall.");
        });
    })
})
