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
    const alphaKey = "abcdefghijklmnopqrstuvwxyz".split("");
    const codeKey = alphabet.toLowerCase().split("");
    const output = input
      .toLowerCase() //ignore case
      .split(" ") //seperate the input string into an array of words
      .map(
        (word) =>
          encode
            ? iterateWord(word, alphaKey, codeKey) // if encoding, we're going from base alphabet to coded alphabet
            : iterateWord(word, codeKey, alphaKey) // else, we're going from coded to base
      )
      .join(" "); //join the array of words back into an output string
    return output.includes(Boolean(false)) ? false : output; //if any of our letters threw an error, return false
  }

  /*********************************
   * * * *  HELPER FUNCTIONS * * * *
   ********************************/
  //Helper function to iterate by word, ensuring spaces are preserved
  function iterateWord(word, fromKey, toKey) {
    return word
      .split("") //seperate the word string into an array of latters
      .map((letter) => _mapTo(letter, fromKey, toKey)) //** This is where the magic happens baybee **//
      .join(""); //join the array of letters back into a word string
  }

  //Helper function that finds a provided character on the fromKey array, and maps the input to the same index on the toKey array
  function _mapTo(input, fromKey, toKey) {
    const index = fromKey.indexOf(input); //finds the index of the matching character in the fromKey
    if (index === -1) return false; //if our alphabet doesn't contain that character, return false
    return toKey[index]; //map it out baybee
  }

  //Helper function to ensure provided alphabet is valid
  function _validAlphabet(alphabet) {
    //Alphabet must be a string, and be exactly 26 characters long
    if (typeof alphabet !== "string" || alphabet.length !== 26) return false;

    //check for reused characters
    for (let char of alphabet)
      if (alphabet.indexOf(char) !== alphabet.lastIndexOf(char)) return false;

    return true;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
