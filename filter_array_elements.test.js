const checkLength = require('./filter_array_elements');
const filterLongNumbers = require('./filter_array_elements');
// const filter = require('./filter_array_elements');

describe('checkLength', () => {
    it('returns true if phoneNum contains 10 characters or less', () => {
        expect(checkLength('5')).toBe(true);
    });
});

describe('filterLongNumbers', () => {
    it('returns the elements of the phoneNumArray which contain 10 characters or less', () => {
        expect(filterLongNumbers(['5999999987776', '65836836486854856484848', '55', '67865367'])).toEqual(['55', '67865367']);
    });
});


