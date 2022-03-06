const fizzBuzz = require('./fizzbuzz');

describe('fizzBuzz', () => {
    it('returns FizzBuzz if num is divisible by 3 and 5', () => {
        expect(fizzBuzz(15)).toBe("FizzBuzz");
    });

    it('returns Fizz if num is divisible by 3', () => {
        expect(fizzBuzz(3)).toBe("Fizz");
    });

    it('returns Buzz if num is divisible by 5', () => {
        expect(fizzBuzz(5)).toBe("Buzz");
    });

    it('returns the number when otherwise', () => {
        expect(fizzBuzz(1)).toBe(1);
    });
});
