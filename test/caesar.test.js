// Write your tests here!
const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("Caesar Shifts", () => {
  describe("encryptions work for all input cases: ", () => {
    it("returns correct encryption when input is one word", () => {
      const input = "thinkful";
      const shift = 3;
      const expected = "wklqnixo";
      const actual = caesar(input, shift);
      expect(actual).to.be.equal(expected);
    });

    it("returns correct encryption even when input is multiple words", () => {
      const input = "trevor is the name";
      const shift = 2;
      const expected = "vtgxqt ku vjg pcog";
      const actual = caesar(input, shift);
      expect(actual).to.be.equal(expected);
    });

    it("returns correct encryption even when it needs to wrap around the alphabet", () => {
      const input = "xylophone has lots of letters near z";
      const shift = 13;
      const expected = "klybcubar unf ybgf bs yrggref arne m";
      const actual = caesar(input, shift);
      expect(actual).to.be.equal(expected);
    });

    it("returns a lowercase encryption, regardless of input case", () => {
      const input = "TReVoR Is ThE NaME";
      const shift = 2;
      const expected = "vtgxqt ku vjg pcog";
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
