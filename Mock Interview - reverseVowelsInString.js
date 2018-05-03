function reverseVowelsInString (str) {
     function isVowel (s) {
        return s == "A" || s == "E" || s == "I" || s == "O" || s == "U" || s == "a" || s == "e" || s == "i"|| s == "o"|| s == "u";
     }
     var vowels = [];
     var indexes = [];
     var newStr = str.split('');
     for (let i = 0; i < str.length; i++) {
       if (isVowel(str[i])) {
         vowels.push(str[i]);
         indexes.push(i);
       }
     }
     vowels.reverse();
     for (let i = 0; i < vowels.length; i++){
        newStr[indexes[i]] = vowels[i];
     }
     return newStr.join('');
}

reverseVowelsInString('Acknowledgement');

/*
I was looking at a course that was having a preview for a mock interview.
The interviewer asked the interviewee to reverse all of the vowels in a string.
I wanted to work through a solution prior watching the complete mock interview.
This also works as a good practive for expanding my knowledge.
*/

// refactored solution:
function reverseVowels(str) {
   str = str.split('');
   let i = 0;
   let j = str.length - 1;
   do {
     if ( (/[aeiou]/i.test(str[i]) ) && ( /[aeiou]/i.test(str[j]) ) ) {
       [ str[i] , str[j] ] = [ str[j] , str[i] ];
       i++;
       j--;
     }
     else if (/[aeiou]/i.test(str[i])) j--;
     else i++;
   } while (i < j);
   return str.join('');
}
reverseVowels('Acknowledgement')
