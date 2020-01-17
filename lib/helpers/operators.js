const $in = '$in';
const $lt = '$lt';
const $gt = '$gt';
const $lte = '$lte';
const $gte = '$gte';
const $ne = '$ne';
const operatorList = [$in, $lt, $gt, $lte, $gte, $ne];

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
  let isPassed = false;
  const operatorValue = queryValue && queryValue[operator];
  if (operator === $in) {
    isPassed = operatorValue.includes(entryValue);
  } else if (operator === $lt) {
    isPassed = entryValue < operatorValue;
  } else if (operator === $lte) {
    isPassed = entryValue <= operatorValue;
  } else if (operator === $gt) {
    isPassed = entryValue > operatorValue;
  } else if (operator === $gte) {
    isPassed = entryValue >= operatorValue;
  } else if (operator === $ne) {
    isPassed = entryValue !== operatorValue;
  }
  return isPassed;
};

module.exports = {
  $in,
  $lt,
  $lte,
  $gt,
  $gte,
  $ne,
  isValidOperator,
  isPassedByOperators,
};
