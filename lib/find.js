const { isMatched } = require('./helpers/match');

/**
 * O(n*m) where n is the length of list and m the size of query
 * This function is not appropriate for querying on large size data
 * @param {Object} query
 * @param {Object[]} list
 * @returns {Object[]}
 */
const findAll = (query = {}, list = []) => {
  return list.reduce((result, entry) => {
    if (isMatched(query, entry)) {
      result.push(entry);
    }
    return result;
  }, []);
};

/**
 * @param {Object} query
 * @param {Object[]} list
 * @returns {Object}
 */
const find = (query = {}, list = []) => findAll(query, list)[0];

module.exports = {
  find,
  findAll,
};
