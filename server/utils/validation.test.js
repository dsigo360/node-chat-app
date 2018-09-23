const expect = require('expect');

const { isRealString } = require('./validation.js');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    const res = 5;

    expect(isRealString(res)).toBe(false);
  });

  it('should reject string with only spaces', () => {
    const res = '';

    expect(isRealString(res)).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    const res = 'Ayyyy I am person';

    expect(isRealString(res)).toBe(true);
  });
});
