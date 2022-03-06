const searchCandies = require('./searchCandies')

describe('searchCandies function', () => {
    it('returns the candies beginning with "Ma" and prices less than or equal to 10', () => {
        expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);
    });

    it('returns the candies beginning with "Ma" and prices less than or equal to 2', () => {
        expect(searchCandies('Ma', 2)).toEqual([ 'Mars' ]);
    });

    it('returns the candies beginning with "S" and prices less than or equal to 10', () => {
        expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ]);
    });

    it('returns the candies beginning with "S" and prices less than or equal to 4', () => {
        expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ]);
    });
});