const { $in, isValidOperator, isPassedByOperators } = require('../../../lib/helpers/operators');

describe('isValidOperator', () => {
  it('should return true if valid operator is passed', () => {
    const result = isValidOperator($in);
    expect(result).toBe(true);
  });
  it('should return false if invalid operator is passed', () => {
    const result = isValidOperator('$unknown');
    expect(result).toBe(false);
  });
});

describe('isPassedByOperators', () => {
  it('should return true if the entry value is passed by the $in operator', () => {
    const entry = 'entry';
    const queryValue = {};
    queryValue[$in] = [entry];
    const result = isPassedByOperators($in, queryValue, entry);
    expect(result).toBe(true);
  });
  it('should return true if the entry value is not passed by the $in operator', () => {
    const entry = 'entry';
    const queryValue = {};
    queryValue[$in] = ['not-entry'];
    const result = isPassedByOperators($in, queryValue, entry);
    expect(result).toBe(false);
  });
  it('should return false if unkown opeator is not passed', () => {
    const result = isPassedByOperators('$unknown');
    expect(result).toBe(false);
  });
});
