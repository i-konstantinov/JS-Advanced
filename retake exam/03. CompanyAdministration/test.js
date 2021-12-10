const companyAdministration = require('./companyAdministration');
const { expect } = require('chai');
const { describe, it } = require('mocha');


describe('companyAdministration', () => {
    describe('hiringEmployee', () => {
        it('detects invalid position arg', () => {
            expect(() => companyAdministration.hiringEmployee('Peter', 'Chef', 3)).to.throw('We are not looking for workers for this position.');
            expect(() => companyAdministration.hiringEmployee('Peter', 'Doctor', 3)).to.throw('We are not looking for workers for this position.');
            expect(() => companyAdministration.hiringEmployee('Peter', 'Mechanik', 3)).to.throw('We are not looking for workers for this position.');
        });
        it('detects insufficient yearsExperience param', () => {
            expect(companyAdministration.hiringEmployee('Peter', 'Programmer', 2)).to.includes('not approved');
        })
        it('works with valid position and yearsExperience params', () => {
            expect(companyAdministration.hiringEmployee('Peter', 'Programmer', 3)).to.includes('successfully hired');
            expect(companyAdministration.hiringEmployee('Peter', 'Programmer', 5)).to.includes('successfully hired');
        })
    })

    describe('calculateSalary', () => {
        it('detects invalid input', () => {
            expect(() => companyAdministration.calculateSalary('10')).to.throw("Invalid hours");
            expect(() => companyAdministration.calculateSalary(-1)).to.throw("Invalid hours");
        })
        it('works with valid input bellow or equal to 160', () => {
            expect(companyAdministration.calculateSalary(10)).to.equal(150);
            expect(companyAdministration.calculateSalary(1.5)).to.equal(22.5);
            expect(companyAdministration.calculateSalary(160)).to.equal(2400);
            expect(companyAdministration.calculateSalary(0)).to.equal(0);
        })
        it('works with valid input above 160', () => {
            expect(companyAdministration.calculateSalary(161)).to.equal(3415);
            expect(companyAdministration.calculateSalary(200)).to.equal(4000);
        })
    })

    describe('firedEmployee', () => {
        it('detects invalid input for employees', () => {
            expect(() => companyAdministration.firedEmployee(1, 1)).to.throw("Invalid input");
            expect(() => companyAdministration.firedEmployee('Peter', 1)).to.throw("Invalid input");
            expect(() => companyAdministration.firedEmployee({}, 1)).to.throw("Invalid input");
        })
        it('detects invalid input for index', () => {
            expect(() => companyAdministration.firedEmployee([], 1)).to.throw("Invalid input");
            expect(() => companyAdministration.firedEmployee(['Peter', 'John', 'Marry'], '1')).to.throw("Invalid input");
            expect(() => companyAdministration.firedEmployee(['Peter', 'John', 'Marry'], -1)).to.throw("Invalid input");
            expect(() => companyAdministration.firedEmployee(['Peter', 'John', 'Marry'], 3)).to.throw("Invalid input");
            expect(() => companyAdministration.firedEmployee(['Peter', 'John', 'Marry'], 1.5)).to.throw("Invalid input");
        })
        it('works with valid array and valid index', () => {
            expect(companyAdministration.firedEmployee(['Peter', 'John', 'Marry'], 2)).to.equal('Peter, John');
            expect(companyAdministration.firedEmployee(['Peter', 'John', 'Marry'], 1)).to.equal('Peter, Marry');
        })
    })
})