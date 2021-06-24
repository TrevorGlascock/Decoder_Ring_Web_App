// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // valid shift checking
    if (!shift || shift < -25 || shift > 25) return false;
    // valid input checking
    if (typeof input !== "string") return false;

    //if we are decoding, we need to shift in the opposite direction
    shift *= encode ? 1 : -1;
    //iterate through the input string and map our shifted characters
    return input
      .split("") //split by character to cast as array for iteration
      .map((character) => shifter(character, shift)) //map through each character applying shifter()
      .join(""); //join up the shifted array to return it as a string again
  }

  //Helper function to actually encrypt the given character
  function shifter(input, shift) {
    let output = input.toLowerCase(); //since our output is expected to be lower case
    if (!output.match(/[a-z]/)) return output; //regexp; if char isn't between a-z, then no need to transform it

    const char = output.charCodeAt(); //charCodeAt to extract asci code, do math on it, then cast it back as a String
    const shifted =
      shift > 0
        ? ((char - 97 + shift) % 26) + 97 //if shift is positive, we need to be looping back to a (97)
        : ((char - 122 + shift) % 26) + 122; //if shift is negative, we need to be looping forward to z (122)
    output = String.fromCharCode(shifted);
    return output;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
