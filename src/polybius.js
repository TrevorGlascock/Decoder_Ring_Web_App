// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  /**************************************
   * * * * * * * *  MAIN * * * * * * * *
   **************************************/

  function polybius(input, encode = true) {
    //console.log(createAlphaGrid(), createCoordGrid());
    const output = input
      .split(" ")
      .map((word) => _iterateWord(word, encode))
      .join(" ");
    //if any of our words resolved to boolean false, we need to return only false
    return output.includes(false) ? false : output;

    //return encode ? encode(input) : decode(input);
  }

  function _iterateWord(word, encode) {
    alphaKey = createAlphaGrid();
    coordKey = createCoordGrid();
    /***********
     * ENCODING
     ***********/
    if (encode)
      return word
        .toLowerCase()
        .split("")
        .map((letter) => _mapMatrixTo(letter, alphaKey, coordKey))
        .join("");

    /***********
     * DECODING
     ***********/
    if (word.length % 2 !== 0) return false; //if we're decoding an odd-length word, the output is false
    //iterate by each code, which is composed of 2 characters
    let output = "";
    for (let char = 0; char < word.length; char += 2) {
      const col = word[char];
      const row = word[char + 1];
      const code = `${col}${row}`;
      output += _mapMatrixTo(code, coordKey, alphaKey);
    }
    return output;
  }

  function _mapMatrixTo(input, fromKey, toKey) {
    const coordinate = _findCoordinate(input, fromKey);
    if (!coordinate) return false; //if we don't find the input in our From key, then return false for invalid input
    const row = coordinate[0];
    const col = coordinate[1];
    return toKey[row][col];
  }

  function _findCoordinate(input, key) {
    if (input === "i" || input === "j") input = "(i/j)"; //if input is i or j, then we treat it as (i/j)
    for (let row = 0; row < 5; row++)
      for (let col = 0; col < 5; col++) {
        if (key[row][col] === input) return [row, col]; //
      }
    return false; //if we don't find a match, return false
  }

  function _decrypt(code, key) {
    return "a";
  }
  /********************************************************************
   * * * DEVELOPER FUNCTIONS TO CREATE ENCRYPTION/DECRYPTION KEYS * * *
   ********************************************************************/
  // Creates an index matrix of specified size
  function createCoordGrid(size = 5) {
    //used this to print a number grid to help me understand the conversion and counting rows and columns
    const grid = [];
    for (let row = 0; row < size; row++) {
      const thisRow = [];
      //correct format is `${col}${row} where both start from 1 and end at 5
      for (let col = 0; col < size; col++) thisRow.push(`${col + 1}${row + 1}`);
      grid.push(thisRow);
    }
    return grid;
  }

  function createAlphaGrid(size = 5) {
    const grid = [];
    for (let row = 0; row < size; row++) {
      const thisRow = [];
      for (let col = 0; col < size; col++) {
        let char = row * size + col + 97;
        if (char === 105) thisRow.push("(i/j)");
        else {
          char += char > 105 ? 1 : 0;
          thisRow.push(String.fromCharCode(char));
        }
      }
      grid.push(thisRow);
    }
    return grid;
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
