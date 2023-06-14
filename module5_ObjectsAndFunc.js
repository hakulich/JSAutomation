/**  1
 * Create a car object, add a color property to it with the value equals 'black'
 * Change the color property of the car object to 'green'
 * Add the power property to the car object, which is a function and displays the engine power to the console
 */

let car = {
  color: "black",
  power: 3,
  printPower: () => {
    console.log(`Car power is ${car.power}`);
  },
};

car.color = "green";

car.printPower();

/**  2
 * Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples
 */

let warehouse = {
  pearsQuantity: 0,
  applesQuantity: 0,

  addPears(count) {
    this.pearsQuantity += count;
  },

  addApples(count) {
    this.applesQuantity += count;
  },

  getNumberOfItems() {
    return this.pearsQuantity + this.applesQuantity;
  },
};

warehouse.addPears(3);
warehouse.addApples(1);

console.log(`Number of items in warehouse is ${warehouse.getNumberOfItems()}`);

/** 3
 * Your name is saved in the payment terminal, write a function to define the name in the terminal
 * (if you entered your name, then hello + name, if not, then there is no such name)
 */

function isNameExist(value, terminals) {
  let lowerCaseTerminals = terminals.map((elm) => elm.toLowerCase());

  if (lowerCaseTerminals.includes(value.toLowerCase())) {
    console.log(`Hello ${value}`);
  } else console.log(`There is no such name`);
}

let terminal = ["Hanna", "Genna", "Rick"];

isNameExist("Hanna", terminal);
isNameExist("genna", terminal);
isNameExist("Pavel", terminal);

/** 4
 * Write a function for calculating the type of argument and type output to the console
 */

function printType(value) {
  console.log(`Type is ${typeof value}`);
}

printType(23);
printType("stringValue");
printType(true);
printType(car);

/** 5
 * Write a function that determines whether a number is prime or not
 */

function isPrime(value) {
  let isPrime = true;

  if (typeof value !== "number") return `Argument is NOT a number.`;

  if (value === 1 || value < 1) isPrime = false;

  if (value > 1) {
    for (let i = 2; i < value; i++) {
      if (value % i == 0) {
        isPrime = false;
        break;
      }
    }
  }

  return isPrime;
}

console.log(`Is 1 prime: ${isPrime(1)}`);
console.log(`Is 3 prime: ${isPrime(3)}`);
console.log(`Is -3 prime: ${isPrime(-3)}`);
console.log(`Is 4 prime: ${isPrime(4)}`);
console.log(`Is "MyString" prime: ${isPrime("MyString")}`);
