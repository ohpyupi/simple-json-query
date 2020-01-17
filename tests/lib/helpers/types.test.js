const { isValidType } = require('../../../lib/helpers/types');

describe('isValidType', () => {
  it('should return true if valid type is passed', () => {
    const result = isValidType(3);
    expect(result).toBe(true);
  });
  it('should return false if invalid type is passed', () => {
    const result = isValidType(null);
    expect(result).toBe(false);
  });
});
