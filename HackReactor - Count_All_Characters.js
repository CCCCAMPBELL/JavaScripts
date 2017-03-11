/* 
Direction: Given a string, "countAllCharacters" returns an object where each key is a character in the given string. 
The value of each key should be how many times each character appeared in the given string.
*/

/* I hashed this code out in under 3 minutes:

function countAllCharacters(str) {
    var result = { };
    for (let i = 0; i < str.length; i++) {
      if (result.hasOwnProperty(str[i])) {
        result[str[i]]++;
      } else {
        result[str[i]] = 1;
      }
    }
    return result;
}
countAllCharacters("banana");

*/

// Refactored to this code:

function countAllCharacters(str) {
    var result = { };
    str.replace(/[\s\S]/g, function(i) {
        result[i] = (result.hasOwnProperty(i)) ? result[i]+1 : 1; });
    return result;
}
countAllCharacters("banana");
// test output: { b: 1, a: 3, n: 2 }








