// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  /*****************************
   * * * * * *  MAIN * * * * * *
   ****************************/
  function polybius(input, encode = true) {
    const output = input
      .split(" ")
      .map((word) => _iterateWord(word, encode))
      .join(" ");
    //if any of our words resolved to boolean false, we need to return only false
    return output.includes(false) ? false : output;
  }

  /*********************************
   * * * *  HELPER FUNCTIONS * * * *
   ********************************/
  //Helper function to handle iteration differences between encoding and decoding
  function _iterateWord(word, encode) {
    alphaKey = _createAlphaGrid();
    coordKey = _createCoordGrid();
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

  //Finds the coordinate on fromKey that matches the inputted character, and returns the value of toKey at the same coordinate
  function _mapMatrixTo(input, fromKey, toKey) {
    const coordinate = _findCoordinate(input, fromKey); //finds the matching coordinate in the fromKey
    if (!coordinate) return false; //if we don't find a match in our fromKey, then return false for invalid input
    const row = coordinate[0]; //row is first element
    const col = coordinate[1]; //col is second element
    return toKey[row][col]; //map it out baybee
  }
  //essentially a 2D indexAt method that returns an array of the coordinates that match the input
  function _findCoordinate(input, key) {
    if (input === "i" || input === "j") input = "(i/j)"; //if input is i or j, then we treat it as (i/j)
    for (let row = 0; row < 5; row++)
      for (let col = 0; col < 5; col++) {
        if (key[row][col] === input) return [row, col]; //
      }
    return false; //if we don't find a match, return false
  }

  /********************************************************************
   * * * DEVELOPER FUNCTIONS TO CREATE ENCRYPTION/DECRYPTION KEYS * * *
   ********************************************************************/
  // Creates an index matrix of specified size
  function _createCoordGrid(size = 5) {
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
  //creates an alpha matrix of the specified size
  function _createAlphaGrid(size = 5) {
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
