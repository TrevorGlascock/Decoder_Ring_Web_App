// Write your tests here!
const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("Caesar Shifts", () => {
  describe("encryptions work for all input cases: ", () => {
    it("works with single word using only lowercase letters", () => {
      const input = "word";
      const shift = 1;
      const expected = "word";
      const actual = caesar(input, shift);
      expect(actual).to.be.equal(expected);
    });
  });

  describe("return false when given invalid shifts: ", () => {
    it("returns false when shift is 0", () => {
      const input = "This message won't be seen.";
      const shift = 0;
      const actual = caesar(input, shift);
      expect(actual).to.be.false;
    });

    it("returns false when shift is less than -25", () => {
      const input = "This message won't be seen.";
      const shift = -6969;
      const actual = caesar(input, shift);
      expect(actual).to.be.false;
    });

    it("returns false when shift is greater than 25", () => {
      const input = "This message won't be seen.";
      const shift = 52;
      const actual = caesar(input, shift);
      expect(actual).to.be.false;
    });
  });
});
