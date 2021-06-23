// Write your tests here!
const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("Caesar Shifts", () => {
  describe("should return false when given invalid shifts", () => {
    it("should return false when shift is 0", () => {
      const input = "This message won't be seen.";
      const shift = 0;
      const actual = caesar(input, shift);
      expect(actual).to.be.false;
    });

    it("should return false when shift is less than -25", () => {
      const input = "This message won't be seen.";
      const shift = -6969;
      const actual = caesar(input, shift);
      expect(actual).to.be.false;
    });

    it("should return false when shift is greater than 25", () => {
      const input = "This message won't be seen.";
      const shift = 52;
      const actual = caesar(input, shift);
      expect(actual).to.be.false;
    });
  });
});
