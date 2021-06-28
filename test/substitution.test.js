// Write your tests here!
const expect = require("chai").expect;
const { substitution } = require("../src/substitution");

describe("Substitution Cypher", () => {
  /*************************************************
   * *  * * * * * * * ENCRYPTING * * * * * * * * * *
   *************************************************/
  describe("Encryption", () => {
    it("when alphabet is normal, output is identical to input", () => {
      const input = "This message is unencrypted";
      const alphabet = "abcdefghijklmnopqrstuvwxyz";
      const actual = substitution(input, alphabet);
      expect(actual).to.be.equal(input);
    });
  });
  /*************************************************
   * *  * * * * * * * DECRYPTING * * * * * * * * * *
   *************************************************/
  describe("Decryption", () => {
    it("when alphabet is normal, output is identical to input", () => {
      const input = "This message is unencrypted";
      const alphabet = "abcdefghijklmnopqrstuvwxyz";
      const actual = substitution(input, alphabet, false);
      expect(actual).to.be.equal(input);
    });
  });
  /**************************************************
   * *  * * * * * * * ERROR CASES * * * * * * * * * *
   **************************************************/
  describe("Invalid Alphabet Errors", () => {
    it("should return false when alphabet is not provided", () => {
      const input = "This message shouldn't be seen.";
      const actual = substitution(input);
      expect(actual).to.be.false;
    });

    it("should return false when alphabet length is less than 26", () => {
      const input = "This message shouldn't be seen.";
      const alphabet = "abc";
      const actual = substitution(input, alphabet);
      expect(actual).to.be.false;
    });

    it("should return false when alphabet length is more than 26", () => {
      const input = "This message shouldn't be seen.";
      const alphabet = "abcdefghijklmnopqrstuvwxyz123456789";
      const actual = substitution(input, alphabet);
      expect(actual).to.be.false;
    });

    it("should return false when correct length alphabet contains a repeated character", () => {
      const input = "This message shouldn't be seen.";
      const alphabet = "aacdefghijklmnopqrstuvwxyz";
      const actual = substitution(input, alphabet);
      expect(actual).to.be.false;
    });
  });
});
