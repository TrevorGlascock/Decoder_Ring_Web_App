// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // valid shift checking
    if (!shift || shift < -25 || shift > 25) return false;

    //if we are decoding, we need to shift in the opposite direction
    shift = encode ? shift : -1 * shift;

    //iterate through the input string and map our shifted characters
    return String(Array(input).map((character) => shifter(character, shift)));
  }

  //Helper function to actually encrypt the a given character
  function shifter(input, shift) {
    if (typeof input !== "string") return input;
    let output = input.toLowerCase(); //since our output is expected to be lower case
    return output;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
