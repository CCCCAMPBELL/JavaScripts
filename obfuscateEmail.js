function obfuscateEmail (str) {
  return str.replace(/[A-Za-z0-9@!#$%&'*+-/=?^_`{|}~ ]/g, function (s) {
    return "%" + s.charCodeAt(0).toString(16);
  })
}
