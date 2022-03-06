const test = require('./testing_jest');

describe('test', () => {
    it('returns hello', () => {
    expect(test()).toBe("hello");
  });
});