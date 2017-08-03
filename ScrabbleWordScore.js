var scrabbleLetterValues = {
      "A": 1,
      "B": 3,
      "C": 3,
      "D": 2,
      "E": 1,
      "F": 4,
      "G": 2,
      "H": 4,
      "I": 1,
      "J": 8,
      "K": 5,
      "L": 1,
      "M": 3,
      "N": 1,
      "O": 1,
      "P": 3,
      "Q": 10,
      "R": 1,
      "S": 1,
      "T": 1,
      "U": 1,
      "V": 4,
      "W": 4,
      "X": 8,
      "Y": 4,
      "Z": 10
   };

function scrabbleWordScore (str) {
      return str.toUpperCase().split('').reduce(function (a,c) { return (/[A-Z]/g.test(c) && scrabbleLetterValues[c] != undefined) ? a + scrabbleLetterValues[c] : a + 0; } , 0 );
}


scrabbleWordScore("HAPPY"); // 15
scrabbleWordScore("FEET"); // 7
scrabbleWordScore("H123A P456 P789 Y!@#$%^&*()"); // 15
