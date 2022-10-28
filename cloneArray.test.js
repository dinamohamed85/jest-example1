const cloneArray = require('./cloneArray');

test('adds two numbers', () => {
    expect(cloneArray([1,2,3])).toEqual([1,2,3]);
})