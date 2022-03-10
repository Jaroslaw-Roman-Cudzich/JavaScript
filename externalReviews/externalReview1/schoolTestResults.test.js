const createReport = require('./schoolTestResults');

// describe('testing the jest infrastructure', () => {
//     it('returns "Hello"', () => {
//     expect(test()).toBe("Hello");
//     });
// });

describe('testing the "createReport" function', () => {
    it('should return grade "green: 1" for a single green', () => {
    expect(createReport("green")).toBe("green: 1");
    });

    it('should return grade "amber: 1" for a single amber', () => {
    expect(createReport("amber")).toBe("amber: 1");
    });
});