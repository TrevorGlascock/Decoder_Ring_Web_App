// Write your tests here!
const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("Polybius Square", () => {
  /**************************************************
   * *  * * * * * * * GRIDMAN!  * * * * * * * * * *
   **************************************************/
  describe("Trying to get the key right", () => {
    /*******************
     * ENCRYPTING
     ********************/
    it("the key is literally correct", () => {
      const input = "";
      const actual = polybius(input);
      expect(actual).to.be.eql([
        ["a", "b", "c", "d", "e"],
        ["f", "g", "h", "(i/j)", "k"],
        ["l", "m", "n", "o", "p"],
        ["q", "r", "s", "t", "u"],
        ["v", "w", "x", "y", "z"],
      ]);
    });
    /*
    it("the key is the correct number", () => {
      const input = "";
      const actual = polybius(input);
      expect(actual).to.be.eql([
        ["11", "21", "31", "41", "51"],
        ["12", "22", "32", "42", "52"],
        ["13", "23", "33", "43", "53"],
        ["14", "24", "34", "44", "54"],
        ["15", "25", "35", "45", "55"],
      ]);
    });
    */
    // it("The encryption works!", () => {
    //   const input = "thinkful";
    //   const expected = "4432423352125413";
    //   const actual = polybius(input);
    //   expect(actual).to.be.equal(expected);
    // });
  });
});
