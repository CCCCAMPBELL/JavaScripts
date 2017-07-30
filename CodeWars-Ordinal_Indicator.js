// https://www.codewars.com/kata/adding-ordinal-indicator-suffixes-to-numbers/

function numberToOrdinal(n) {
  // Finish me
  var str = (n + "");
  if (n === 0) return str;
  if (parseInt(str.substr(-2)) >= 11 && parseInt(str.substr(-2)) <= 20) {
      return n + "th";
  }
  if (str.substr(-1) === "1") {
      return n + "st";
  }
  if (str.substr(-1) === "2") {
      return n + "nd";
  }
  if (str.substr(-1) === "3") {
      return n + "rd";
  }
  return n + "th";
}
