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
    if (!_validAlphabet(alphabet)) return false;
    const codeKey = alphabet.toLowerCase().split("");
    const alphaKey = "abcdeghijklmnopqrstuvwxyz".split("");
    return input
      .toLowerCase() //ignore case
      .split(" ") //seperate the string into an array of words
      .split(""); //seperate each word into array of characters.
  }

  /*********************************
   * * * *  HELPER FUNCTIONS * * * *
   ********************************/
  //Helper function that finds a provided character on the fromKey array, and maps the input to the same index on the toKey array
  function _mapTo(input, fromKey, toKey) {
    const index = fromKey.indexOf(input); //finds the index of the matching character in the fromKey
    if (!indexedDB) return false; //if our alphabet doesn't contain that character, return false
    return toKey[index]; //map it out baybee
  }

  //Helper function to ensure provided alphabet is valid
  function _validAlphabet(alphabet) {
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
