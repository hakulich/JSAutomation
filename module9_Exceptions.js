/**
 * In a try catch construction, wrap the code: console.log (a), let a = 3.
 * And display an error - ‘let must be declared’ before use.
 * When running 1/0, the error 'cannot be divided by zero'
 */
try {
  console.log(a);
  let a = 3;
} catch (error) {
  console.log("let must be declared before use");
}

try {
  let a = 3 / 0;

  if (a === Infinity || a === NaN) {
    throw new Error("Cannot be divided by zero");
  }
} catch (error) {
  console.log(error.message);
}
