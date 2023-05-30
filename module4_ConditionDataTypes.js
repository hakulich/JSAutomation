let strValue = "Test2";
let boolValue = true;
let numValue = 2;

// 1. Perform addition of various types (string + boolean, string + number, number + boolean)
console.log("Addition:");

let sumStrBool = strValue + boolValue;
console.log("string + boolean: " + sumStrBool); //Test2true

let sumStrNum = strValue + numValue;
console.log("string + number: " + sumStrNum); //Test22

let sumNumBool = numValue + boolValue;
console.log("number + boolean: " + sumNumBool); //3

// 2. Perform multiplication of various types (string * boolean, string * number, number * boolean)
console.log("Multiplication:");

let multStrBool = strValue * boolValue;
console.log("string * boolean: " + multStrBool); //NaN

let multStrNum = strValue * numValue;
console.log("string * number: " + multStrNum); //NaN

let multNumBool = numValue * boolValue;
console.log("number * boolean: " + multNumBool); //2

// 3. Divide different types (string / boolean, string / number, number / Boolean)
console.log("Divide:");

let divStrBool = strValue / boolValue;
console.log("string * boolean: " + divStrBool);

let divStrNum = strValue / numValue;
console.log("string * number: " + divStrNum);

let divNumBool = numValue / boolValue;
console.log("number * boolean: " + divNumBool);

// 4. Perform explicit conversion (number, string, boolean)
console.log("Explicit conversion:");

console.log("string to number: " + Number(strValue)); //NaN
console.log("string to boolean: " + Boolean(strValue)); //true
console.log("number to string: " + String(numValue)); // "2"
console.log("number to boolean: " + Boolean(numValue)); //true
console.log("boolean to string: " + String(boolValue)); //"true"
console.log("boolean to number: " + Number(boolValue)); //1
