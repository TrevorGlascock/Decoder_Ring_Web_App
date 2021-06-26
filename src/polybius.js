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
    const output = input
      .split(" ")
      .map((word) => (encode ? encodeWord(word) : decodeWord(word)))
      .join(" ");
    //if any of our words resolved to boolean false, we need to return only false
    return output.includes(false) ? false : output;

    //return encode ? encode(input) : decode(input);
  }

  /*****************************************
   * * * * * * * *  ENCODING * * * * * * * *
   *****************************************/
  //Map each word into a coded word
  function encodeWord(word) {
    return word
      .split("")
      .map((letter) => encodeLetter(letter))
      .join("");
  }
  //Encode a letter into a polybius code
  function encodeLetter(char) {
    char = char.toLowerCase(); //convert to lowercase
    if (!char.match(/[a-z]/)) return false; //error catch for anything other than letters
    char = char.charCodeAt(char); //grab the ascii code
    if (char === 105) return "42"; //if our char code is 105 ("i"), then just return "42"
    //const shift = char > 104 ? 1 : 0; //if our char code is in between i and z, we need to shift +1 to account for i and j being merged
    return parseLetter(char - 96); //"a" would be 1, so we subtract 96
  }
  //Helper function that transforms sequential numbers into "{col}{row}" matrix format of specified size
  function parseLetter(number, size = 5) {
    //(number,size) => "col#row#"
    //(8,5)=> "32" (aka "h") || Need to figure out the row, and the column
    if (number > 8) number--; //if we're at a letter after i, we need to shift left 1
    const row = convertRow(number);
    const col = convertCollumn(number);
    return `${col}${row}`;
  }

  //converts a number into a corresponding row
  function convertRow(number, size = 5) {
    // number divided by matrix size rounded up is the row number
    number = Math.ceil(number / size);
    return number;
  }

  //converts a number into a corresponding column
  function convertCollumn(number, size = 5) {
    //while number is greater than matrix size, subtract matrix size from the number
    while (number > size) number -= size;
    return number;
  }

  /*****************************************
   * * * * * * * *  DECODING * * * * * * * *
   *****************************************/
  //Maps each coded word into a decoded word
  function decodeWord(word) {
    let output = "";
    //if our word isn't even in length we need to return false
    if (word.length % 2) return false;
    //iterate by 2 through the coded string
    for (let i = 0; i < word.length; i += 2) {
      //[i]is collumn, [i+1] is row
      const colrow = `${word.charAt(i)}${word.charAt(i + 1)}`;
      //parse the col#row# String into a char code Number
      const char = _parseCode(colrow);
      if (!char) return false; //if parseCode returns false on any letter then the whole word is false
      output += _decodeLetter(char);
    }
    return output;
  }

  //Helper function that transforms "{col}{row}" into the ascii char code it represents
  function _parseCode(code, size = 5) {
    //("col#row#",size) => col# + (row# - 1) * size = parsedChar
    //("32",5) => 3 + (2-1)*5 = 3 + 1*5  = 3 + 5 = 8
    const col = code.charAt(0) - 0;
    const row = code.charAt(1) - 1;
    if (col > size || row > size) return false;
    let char = col + row * size;
    //code "11" starts at "a"
    //"a" code is 97, so if we parse to 1, we add 96 to start at 97
    char += 96;
    return char;
  }

  //Maps each coded letter into a decoded letter
  function _decodeLetter(char) {
    if (char < 97 || char > 122) return String.fromCharCode(char); //ignores anything that isn't a loewercase letter
    //if our char code is 105 ("i"), then just return "(i/j)"
    if (char === 105) return "(i/j)";
    //if our char code is in between i and z, we need to shift +1 to account for i and j being merged
    const shift = char > 105 && char < 123 ? 1 : 0;
    return String.fromCharCode(char + shift);
  }

  /*********************************************
   * * * UNCALLED DEVELOPER TEST FUNCTIONS * * *
   *********************************************/
  // Creates an index matrix of specified size
  function createIndexGrid(size = 5) {
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
  //maps each index in a matrix to a decoded letter -- used this to decode a matrix of coordinates
  function mapIndexToLetter(matrix) {
    return matrix.map((rows) => rows.map((index) => decodeLetter(index)));
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
