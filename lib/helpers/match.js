const { isValidType } = require("./types");
const { isValidOperator, isPassedByOperators } = require("./operators");

/**
 * @param {Object} query
 * @param {object} entry
 * @returns {boolean}
 */
const isMatched = (query = {}, entry = {}) => {
  let decision = true;
  const keys = Object.keys(query);
  for (key of keys) {
    const queryValue = query[key];
    const entryValue = entry[key];
    const operator = queryValue && Object.keys(queryValue)[0];
    decision = isValidOperator(operator)
      ? isPassedByOperators(operator, queryValue, entryValue)
      : isValidType(entryValue) && queryValue === entryValue;
    if (!decision) {
      break;
    }
  }
  return decision;
};

module.exports = { isMatched };
