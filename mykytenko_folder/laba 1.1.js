let x = 0.03
let k = 4

let beta = Math.exp(k - 5.1) + Math.log10(Math.abs(k + x));
let z = Math.pow(Math.log(Math.abs(Math.pow(2, x) - 1)), 3) - 12.47;
let b = Math.pow(beta + Math.abs(z), -Math.E) + Math.cbrt(Math.abs(z) + 0.1);

console.log("Результат: " + b.toFixed(10))