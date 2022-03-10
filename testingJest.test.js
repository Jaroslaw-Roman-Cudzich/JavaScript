const test = require('./testingJest');

describe('test', () => {
    it('returns hello', () => {
    expect(test()).toBe("hello");
  });
});