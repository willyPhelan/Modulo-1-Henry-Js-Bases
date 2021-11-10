const { checkSeatStatus } = require('../homework');

it('checkSeatStatus is a function', () => {
  expect(typeof checkSeatStatus).toBe('function');
});

it('should throw a TypeError if first parameter is not a string', () => {
  expect(() => checkSeatStatus(4)).toThrow(new TypeError('First parameter is not a string'));
});

it('should throw a TypeError if second parameter is not a number', () => {
  expect(() => checkSeatStatus('A', '2')).toThrow(new TypeError('Second parameter is not a number'));
});