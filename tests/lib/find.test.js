jest.mock("../../lib/helpers/match");
const matchHelper = require("../../lib/helpers/match");
const { find, findAll } = require("../../lib/find");

describe("findAll", () => {
  it("should return an empty array if nothing is matched from a list", () => {
    const list = [
      {
        hello: "world"
      },
      {
        foo: "boo"
      }
    ];
    const spyOnIsMatched = jest
      .spyOn(matchHelper, "isMatched")
      .mockImplementation((query, entry) => {
        return false;
      });
    const result = findAll({}, list);
    expect(result.length).toBe(0);
  });
  it("should return matched entries from a list", () => {
    const list = [
      {
        hello: "world"
      },
      {
        foo: "boo"
      }
    ];
    const spyOnIsMatched = jest
      .spyOn(matchHelper, "isMatched")
      .mockImplementation((query, entry) => {
        if (entry.hello) {
          return true;
        }
        return false;
      });
    const result = findAll({}, list);
    expect(result.length).toBe(1);
    expect(result[0].hello).toBe("world");
    expect(result[0].foo).not.toBe("boo");
  });
});
