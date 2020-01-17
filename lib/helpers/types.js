const validTypes = ["string", "number", "boolean"];

const isValidType = entryValue => {
  return validTypes.includes(typeof entryValue);
};

module.exports = { isValidType };
