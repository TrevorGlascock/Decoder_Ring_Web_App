// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  /*****************************
   * * * * * *  MAIN * * * * * *
   ****************************/
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!validAlphabet(alphabet)) return false;
    const codeKey = alphabet.split("");
    const alphaKey = "abcdeghijklmnopqrstuvwxyz".split("");
    return input;
  }

  /*********************************
   * * * *  HELPER FUNCTIONS * * * *
   ********************************/
  //Helper function to ensure provided alphabet is valid
  function validAlphabet(alphabet) {
    //Alphabet must be a string, and be exactly 26 characters long
    if (typeof alphabet !== "string" || alphabet.length !== 26) return false;

    //check for reused characters
    let isUnique = true;
    alphabet.split("").reduce((checkStr, char) => {
      if (checkStr.includes(char)) isUnique = false;
      return char;
    }, "");
    return isUnique;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
