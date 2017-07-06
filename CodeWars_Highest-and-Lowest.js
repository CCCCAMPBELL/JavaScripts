/*
Highest and Lowest
https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes:

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/


function highAndLow(numbers){
  var numArr = numbers.split(" ").map(x => parseFloat(x));
  var high = Math.max(...numArr);
  var low = Math.min(...numArr);
  return high + " " + low;
}


/*
Test.assertEquals(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");
Test.assertEquals(highAndLow("1 -1"), "1 -1");
Test.assertEquals(highAndLow("1 1"), "1 1");
*/

/*
Test Results:
Test Passed: Value == '542 -214'
Test Passed: Value == '1 -1'
Test Passed: Value == '1 1'
Test Passed: Value == '-1 -1'
Test Passed: Value == '1 -1'
Test Passed: Value == '1 0'
Test Passed: Value == '0 -1'
Test Passed: Value == '42 42'
*/
