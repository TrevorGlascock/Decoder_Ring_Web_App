// Write your tests here!
const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("Polybius Square", () => {
  /**************************************************
   * *  * * * * * * * ENCRYPTING!  * * * * * * * * * *
   **************************************************/
  describe("Encryption", () => {
    it("encrypts letters before i correctly", () => {
      const input = "abcdefgh";
      const expected = "1121314151122232";
      const actual = polybius(input);
      expect(actual).to.be.equal(expected);
    });
    it("encrypts any word correctly", () => {
      const input = "abcdefghijklmnopqrstuvwxyz";
      const expected = "1121314151122232424252132333435314243444541525354555";
      const actual = polybius(input);
      expect(actual).to.be.equal(expected);
    });
    it("encrypts any number of words correctly", () => {
      const input = "abcde fghij klmno pqrst uvwxy z";
      const expected =
        "1121314151 1222324242 5213233343 5314243444 5415253545 55";
      const actual = polybius(input);
      expect(actual).to.be.equal(expected);
    });
    it("encrypts correctly regardless of input case", () => {
      const input = "aBcDefGHijKLmnOpqRstUVWxYz";
      const expected = "1121314151122232424252132333435314243444541525354555";
      const actual = polybius(input);
      expect(actual).to.be.equal(expected);
    });
  });
  /**************************************************
   * *  * * * * * * * DECRYPTING!  * * * * * * * * * *
   **************************************************/
  describe("Decryption", () => {
    it("decrypts correctly", () => {
      const input = "4432423352125413";
      const expected = "th(i/j)nkful";
      const actual = polybius(input, false);
      expect(actual).to.be.equal(expected);
    });
    it("decrypts codes seperated by spaces correctly", () => {
      const input = "3251131343 2543241341";
      const expected = "hello world";
      const actual = polybius(input, false);
      expect(actual).to.be.equal(expected);
    });
    it("returns false when decrypting a message of odd length", () => {
      const input = "443242335212541";
      const actual = polybius(input, false);
      expect(actual).to.be.false;
    });
    it("returns false when decrypting multiple words with at least one being of an odd length", () => {
      const input = "3251131343 443242335212541 2543241341 ";
      const actual = polybius(input, false);
      expect(actual).to.be.false;
    });
  });
});
