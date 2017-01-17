/* This challenge came across the FreeCodeCamp / HelpJavaScript Room. I wanted to try it out.
I later found out that it was a challenge for Hack Reactor.

Write a function called "transformEmployeeData" that transforms some employee data from one format to another.

The argument will look something like this:
[
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
]

Given that input, the return value should look like this:
[
    {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
    {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]

Note that the input may have a different number of rows or different keys than the given sample. 

For example, let's say the HR department adds a "tshirtSize" field to each employee record. Your code should flexibly accommodate that.

Starter Code :
function transformEmployeeData(array) {
  // your code here
}
*/


function transformEmployeeData (array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
     result.push(array[i].reduce(function(acc, cur) { acc[cur[0]] = cur[1]; return acc; }, {}));
  }
  return result;
}
var data1 = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
];
var data2 = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk'], ["tshirtSize", "L"]
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager'], ["tshirtSize", "M"]
    ]
];

transformEmployeeData(data1);
