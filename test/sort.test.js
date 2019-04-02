const expect = require('chai').expect;

const sort = require('../index');

describe('Sort function', () => {
    it('should sort the array in ascending order', () => {
        expect(sort([3, 4, 2, 5, 1])).to.deep.equal([1,2, 3, 4, 5]);
    });

    it ('should throw an error if the input is not an array', () => {
        expect(() => {sort('string')}).to.throw();
        
        // const fn = () => { sort('string') };
        // expect(fn).to.throw();
    });
});