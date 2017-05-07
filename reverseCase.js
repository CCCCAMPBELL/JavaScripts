function reverseCase(str) {
  return str.replace(/[a-z]/gi, s => (s.toLowerCase() === s) ? s.toUpperCase() : s.toLowerCase())
}

console.log('Test "bAhAmA": ' + (reverseCase("bAhAmA") === "BaHaMa"));
console.log('Test "aSdFgHjKl": ' + (reverseCase("aSdFgHjKl") === "AsDfGhJkL"));
console.log('Test "AsDfGhJkL": ' + (reverseCase("AsDfGhJkL") === "aSdFgHjKl"));
console.log('Test "raceCar": ' + (reverseCase("raceCar") === "RACEcAR"));
