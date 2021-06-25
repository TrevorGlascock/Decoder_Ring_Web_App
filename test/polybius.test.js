// Write your tests here!
const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("Polybius Square", () => {
  /**************************************************
   * *  * * * * * * * ENCRYPTING!  * * * * * * * * * *
   **************************************************/
  describe("Encryption", () => {
    it("Encrypts correctly", () => {
      const input = "thinkful";
      const expected = "4432423352125413";
      const actual = polybius(input);
      expect(actual).to.be.equal(expected);
    });
  });
  /**************************************************
   * *  * * * * * * * DECRYPTING!  * * * * * * * * * *
   **************************************************/
  describe("Decryption", () => {
    it("Decrypts correctly", () => {
      const input = "4432423352125413";
      const expected = "th(i/j)nkful";
      const actual = polybius(input, false);
      expect(actual).to.be.equal(expected);
      console.log(actual);
    });
  });
});
