/*
I watched a video on youtube about interview questions and processes at Google.
The videos is:
How to: Work at Google — Example Coding/Engineering Interview 
by Life at Google https://www.youtube.com/watch?v=XKu_SEDAykw

I wanted to recreate the solution using JavaScript
*/

function hasPairWithSum(arr, num) {
    for (let i = 0, comp = []; i < arr.length; i++) {
        if (comp.includes(num - arr[i])) {
            return true;
        } else {
            comp.push((num - arr[i]));
        }
    }
    return false;
}


// Refactored my code to:


function hasPairWithSum (arr, num) {
   let comp = [];
   return arr.some(function (x) {
      if (comp.includes(num - x)) return true;
      else comp.push((num - x));
   });  
}


console.log(hasPairWithSum([1,2,3,9], 8)); // false
console.log(hasPairWithSum([1,2,4,4], 8)); // true
