// Write your tests here!
const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("Caesar Shift", () => {
  /****************************
   * POSITIVE SHIFTING TESTS
   ****************************/
  describe("encryptions work for all positive shift input cases: ", () => {
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
  });

  /****************************
   * NEGATIVE SHIFTING TESTS
   ****************************/
  describe("encryptions work for all negative shift input cases: ", () => {
    it("returns correct encryption when input is one word", () => {
      const input = "thinkful";
      const shift = -3;
      const expected = "qefkhcri";
      const actual = caesar(input, shift);
      expect(actual).to.be.equal(expected);
    });

    it("returns correct encryption even when input is multiple words", () => {
      const input = "trevor is the name";
      const shift = -1;
      const expected = "sqdunq hr sgd mzld";
      const actual = caesar(input, shift);
      expect(actual).to.be.equal(expected);
    });

    it("returns correct encryption even when it needs to wrap around the alphabet", () => {
      const input = "granny smith apples has lots of letters near a";
      const shift = -8;
      const expected = "yjsffq kealz shhdwk zsk dglk gx dwllwjk fwsj s";
      const actual = caesar(input, shift);
      expect(actual).to.be.equal(expected);
    });
  });

  /****************************
   * FRINGE CASE INPUT TESTS
   ****************************/
  describe("encryptions aren't broken with fringe cases:", () => {
    it("returns a lowercase encryption, regardless of input case", () => {
      const input = "TReVoR Is ThE NaME";
      const shift = 2;
      const expected = "vtgxqt ku vjg pcog";
      const actual = caesar(input, shift);
      expect(actual).to.be.equal(expected);
    });

    it("returns a correct encryption even when provided with non-letters", () => {
      const input = "i'd rate carl's sandwich: 8/10";
      const shift = 7;
      const expected = "p'k yhal jhys'z zhukdpjo: 8/10";
      const actual = caesar(input, shift);
      expect(actual).to.be.equal(expected);
    });

    it("returns an unencrypted message when all of the input is non-letters", () => {
      const input = "'23 '/>? 6 87 / - -";
      const shift = 7;
      const expected = input;
      const actual = caesar(input, shift);
      expect(actual).to.be.equal(expected);
    });
    it("returns an unencrypted message when all of the input is extended ASCII", () => {
      const input = "これはａｓｃｉｉじゃない";
      const shift = 7;
      const expected = input;
      const actual = caesar(input, shift);
      expect(actual).to.be.equal(expected);
    });
  });

  /**************************************
   * FALSE RETURN ON INVALID SHIFT TESTS
   **************************************/
  describe("returns false when given invalid shifts: ", () => {
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
