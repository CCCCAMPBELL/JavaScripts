/*
Gradually Adding Parameters

This kata is all about adding numbers.

You will create a function named add. This function will return the sum of all the arguments. Sounds easy, doesn't it??

Well here's the twist. The inputs will gradually increase with their index as parameter to the function.

  add(3,4,5); 
  
  returns ( 3 * 1 ) + ( 4 * 2 ) + ( 5 * 3 ) = 26
  
Remember the function will return 0 if no arguments are passed.

Example

  add(); //=> 0
  add(1,2,3); //=> 14
  add(1,4,-5,5); //=> 14
*/


function add() {
  for (var i = 0, sum = 0; i < arguments.length; i++) {
      sum += (arguments[i] * (i+1));
  }
  return sum;  
}


/*
Time: 313ms Passed: 5 Failed: 0
Test Results:
Test Passed: Value == 0
Test Passed: Value == 1400
Test Passed: Value == 2
Test Passed: Value == -8
Test Passed: Value == -30
You have passed all of the tests! :)
*/
