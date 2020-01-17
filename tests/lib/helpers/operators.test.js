jest.mock('../../../lib/helpers/types');
const {
  $in,
  $lt,
  $gt,
  $lte,
  $gte,
  $ne,
  isValidOperator,
  isPassedByOperators,
} = require('../../../lib/helpers/operators');

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

describe('isPassedByOperators - $in', () => {
  const operator = $in;
  it('should return true if the entry value is passed', () => {
    const entryValue = 'entry';
    const queryValue = {};
    queryValue[operator] = [entryValue];
    const result = isPassedByOperators(operator, queryValue, entryValue);
    expect(result).toBe(true);
  });
  it('should return true if the entry value is not passed', () => {
    const entryValue = 'entry';
    const queryValue = {};
    queryValue[operator] = ['not-entry'];
    const result = isPassedByOperators(operator, queryValue, entryValue);
    expect(result).toBe(false);
  });
  it('should return false if unkown opeator is not passed', () => {
    const result = isPassedByOperators('$unknown');
    expect(result).toBe(false);
  });
});

describe('isPassedByOperators - $lt', () => {
  const operator = $lt;
  it('should return false if the entry value is equal to the query operator value', () => {
    const entryValue = 13;
    const queryValue = {};
    queryValue[operator] = 13;
    const result = isPassedByOperators(operator, queryValue, entryValue);
    expect(result).toBe(false);
  });
  it('should return false if the entry value is greater than the query operator value', () => {
    const entryValue = 15;
    const queryValue = {};
    queryValue[operator] = 13;
    const result = isPassedByOperators(operator, queryValue, entryValue);
    expect(result).toBe(false);
  });
  it('should return true if the entry value is less than the query operator value', () => {
    const entryValue = 11;
    const queryValue = {};
    queryValue[operator] = 13;
    const result = isPassedByOperators(operator, queryValue, entryValue);
    expect(result).toBe(true);
  });
});

describe('isPassedByOperators - $gt', () => {
  const operator = $gt;
  it('should return false if the entry value is equal to the query operator value', () => {
    const entryValue = 13;
    const queryValue = {};
    queryValue[operator] = 13;
    const result = isPassedByOperators(operator, queryValue, entryValue);
    expect(result).toBe(false);
  });
  it('should return false if the entry value is less than the query operator value', () => {
    const entryValue = 11;
    const queryValue = {};
    queryValue[operator] = 13;
    const result = isPassedByOperators(operator, queryValue, entryValue);
    expect(result).toBe(false);
  });
  it('should return true if the entry value is greater than the query operator value', () => {
    const entryValue = 15;
    const queryValue = {};
    queryValue[operator] = 13;
    const result = isPassedByOperators(operator, queryValue, entryValue);
    expect(result).toBe(true);
  });
});

describe('isPassedByOperators - $lte', () => {
  const operator = $lte;
  it('should return true if the entry value is equal to the query operator value', () => {
    const entryValue = 13;
    const queryValue = {};
    queryValue[operator] = 13;
    const result = isPassedByOperators(operator, queryValue, entryValue);
    expect(result).toBe(true);
  });
  it('should return false if the entry value is greater than the query operator value', () => {
    const entryValue = 15;
    const queryValue = {};
    queryValue[operator] = 13;
    const result = isPassedByOperators(operator, queryValue, entryValue);
    expect(result).toBe(false);
  });
  it('should return true if the entry value is less than the query operator value', () => {
    const entryValue = 11;
    const queryValue = {};
    queryValue[operator] = 13;
    const result = isPassedByOperators(operator, queryValue, entryValue);
    expect(result).toBe(true);
  });
});

describe('isPassedByOperators - $gte', () => {
  const operator = $gte;
  it('should return true if the entry value is equal to the query operator value', () => {
    const entryValue = 13;
    const queryValue = {};
    queryValue[operator] = 13;
    const result = isPassedByOperators(operator, queryValue, entryValue);
    expect(result).toBe(true);
  });
  it('should return true if the entry value is greater than the query operator value', () => {
    const entryValue = 15;
    const queryValue = {};
    queryValue[operator] = 13;
    const result = isPassedByOperators(operator, queryValue, entryValue);
    expect(result).toBe(true);
  });
  it('should return false if the entry value is less than the query operator value', () => {
    const entryValue = 11;
    const queryValue = {};
    queryValue[operator] = 13;
    const result = isPassedByOperators(operator, queryValue, entryValue);
    expect(result).toBe(false);
  });
});

describe('isPassedByOperators - $ne', () => {
  const operator = $ne;
  it('should return false if the entry value is equal to the query operator value', () => {
    const entryValue = 13;
    const queryValue = {};
    queryValue[operator] = 13;
    const result = isPassedByOperators(operator, queryValue, entryValue);
    expect(result).toBe(false);
  });
  it('should return true if the entry value is greater than the query operator value', () => {
    const entryValue = 15;
    const queryValue = {};
    queryValue[operator] = 13;
    const result = isPassedByOperators(operator, queryValue, entryValue);
    expect(result).toBe(true);
  });
  it('should return true if the entry value is less than the query operator value', () => {
    const entryValue = 11;
    const queryValue = {};
    queryValue[operator] = 13;
    const result = isPassedByOperators(operator, queryValue, entryValue);
    expect(result).toBe(true);
  });
});
