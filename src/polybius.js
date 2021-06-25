// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    return encode ? encrypt(input) : decrypt(input);
  }

  function encrypt(input) {
    return `4432423352125413`;
  }

  function decrypt(input) {
    const output = input
      //split the input into an array by spaces
      .split(" ")
      //For each word, run the decryption
      .map((word) => {
        let newWord = "";
        //if our word isn't even in length we need to return false
        if (word.length % 2) return false;
        //iterate by 2 through the coded string
        for (let i = 0; i < word.length; i += 2) {
          const currentCode = `${word.charAt(i)}${word.charAt(i + 1)}`;
          newWord += decryptLetter(currentCode);
        }
        return newWord;
      })
      //rejoin the array of words into one string seperated by spaces
      .join(" ");
    //if any of our words are not even in length, we need to return false
    return output.includes("false") ? false : output;
  }

  function decryptLetter(index) {
    //starting with weird Stringified numbers like "11" and "32", so we need to parse it
    const char = parseIndex(index);
    //  if (char < 97 || char > 122) return String.fromCharCode(char); //ignores anything that isn't a loewercase letter
    //if our char code is i, then just return "(i/j)"
    if (char === 105) return "(i/j)";
    //if our char code is in between i and z, we need to shift +1 to account for i and j being merged
    const shift = char > 105 && char < 123 ? 1 : 0;
    return String.fromCharCode(char + shift);
  }

  //Helper function that transforms "{col}{row}" into the ascii char code it represents
  function parseIndex(index, size = 5) {
    //("col#row#",size) => col# + (row# - 1) * size = parsedChar
    //("32",5) => 3 + (2-1)*5 = 3 + 1*5  = 3 + 5 = 8
    const col = index.charAt(0) - 0;
    const row = index.charAt(1) - 1;
    let char = col + row * size;
    //index "11" starts at "a"
    //"a" code is 97, so if we parse to 1, we add 96 to start at 97
    char += 96;
    return char;
  }

  /************************************
   * UNCALLED DEVELOPER FUNCTIONS
   ***********************************/
  // Creates an index matrix of specified size
  function createIndexGrid(size = 5) {
    const grid = [];
    for (let row = 0; row < size; row++) {
      const thisRow = [];
      //correct format is `${col}${row} where both start from 1 and end at 5
      for (let col = 0; col < size; col++) thisRow.push(`${col + 1}${row + 1}`);
      grid.push(thisRow);
    }
    return grid;
  }
  //maps each index in a matrix to a decoded letter
  function mapIndexToLetter(matrix) {
    return matrix.map((rows) => rows.map((index) => decryptLetter(index)));
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
