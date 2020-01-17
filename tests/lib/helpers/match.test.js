jest.mock("../../../lib/helpers/operators");
jest.mock("../../../lib/helpers/types");
const { isMatched } = require("../../../lib/helpers/match");
const operatorsHelper = require("../../../lib/helpers/operators");
const typesHelper = require("../../../lib/helpers/types");

describe("isMatched", () => {
  it("should return true if an entry is matched to a query - without operator", () => {
    const query = {
      fake: "key"
    };
    const entry = {
      fake: "key"
    };
    const spyOnIsValidType = jest
      .spyOn(typesHelper, "isValidType")
      .mockImplementation(() => true);
    const spyOnIsValidOperator = jest
      .spyOn(operatorsHelper, "isValidOperator")
      .mockImplementation(() => false);
    const spyOnIsPassedByOperators = jest
      .spyOn(operatorsHelper, "isPassedByOperators")
      .mockImplementation();
    const result = isMatched(query, entry);
    expect(result).toBe(true);
    expect(spyOnIsValidOperator).toHaveBeenCalled();
    expect(spyOnIsPassedByOperators).not.toHaveBeenCalled();
  });
  it("should return false if an entry is not matched to a query - without operator", () => {
    const query = {
      fake: "key"
    };
    const entry = {
      fake: "key1"
    };
    const spyOnIsValidType = jest
      .spyOn(typesHelper, "isValidType")
      .mockImplementation(() => true);
    const spyOnIsValidOperator = jest
      .spyOn(operatorsHelper, "isValidOperator")
      .mockImplementation(() => false);
    const spyOnIsPassedByOperators = jest
      .spyOn(operatorsHelper, "isPassedByOperators")
      .mockImplementation();
    const result = isMatched(query, entry);
    expect(result).toBe(false);
    expect(spyOnIsValidOperator).toHaveBeenCalled();
    expect(spyOnIsPassedByOperators).not.toHaveBeenCalled();
  });
  it("should return false if an entry is in invalid type - without operator", () => {
    const query = {
      fake: null
    };
    const entry = {
      fake: null
    };
    const spyOnIsValidType = jest
      .spyOn(typesHelper, "isValidType")
      .mockImplementation(() => false);
    const spyOnIsValidOperator = jest
      .spyOn(operatorsHelper, "isValidOperator")
      .mockImplementation(() => false);
    const spyOnIsPassedByOperators = jest
      .spyOn(operatorsHelper, "isPassedByOperators")
      .mockImplementation();
    const result = isMatched(query, entry);
    expect(result).toBe(false);
    expect(spyOnIsValidOperator).toHaveBeenCalled();
    expect(spyOnIsPassedByOperators).not.toHaveBeenCalled();
  });
  it("should return true if an entry is matched to a query", () => {
    const query = {
      fake: "key"
    };
    const entry = {
      fake: "key"
    };
    const spyOnIsValidOperator = jest
      .spyOn(operatorsHelper, "isValidOperator")
      .mockImplementation(() => true);
    const spyOnIsPassedByOperators = jest
      .spyOn(operatorsHelper, "isPassedByOperators")
      .mockImplementation(() => true);
    const result = isMatched(query, entry);
    expect(result).toBe(true);
    expect(spyOnIsValidOperator).toHaveBeenCalled();
    expect(spyOnIsPassedByOperators).toHaveBeenCalled();
  });
  it("should return false if an entry is not matched to a query", () => {
    const query = {
      fake: "key"
    };
    const entry = {
      fake: "key"
    };
    const spyOnIsValidOperator = jest
      .spyOn(operatorsHelper, "isValidOperator")
      .mockImplementation(() => true);
    const spyOnIsPassedByOperators = jest
      .spyOn(operatorsHelper, "isPassedByOperators")
      .mockImplementation(() => false);
    const result = isMatched(query, entry);
    expect(result).toBe(false);
    expect(spyOnIsValidOperator).toHaveBeenCalled();
    expect(spyOnIsPassedByOperators).toHaveBeenCalled();
  });
});
