const $in = "$in";
const operatorList = [$in];

/**
 * @param {string} operator
 * @returns {boolean}
 */
const isValidOperator = operator => {
  return operatorList.includes(operator);
};

/**
 * @param {string} operator
 * @param {Object} queryValue
 * @param {string|number|boolean} entryValue
 * @returns {boolean}
 */
const isPassedByOperators = (operator, queryValue, entryValue) => {
  if (operator === $in) {
    return queryValue[operator].includes(entryValue);
  }
  return false;
};

module.exports = {
  $in,
  isValidOperator,
  isPassedByOperators
};
