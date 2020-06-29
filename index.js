// spread and rest opeartor

// spread operator

let obj = {
  name: "Pritam",
  age: 25,
};

let objectSpread = { ...obj };
console.log(objectSpread);

let arrayDemo = ["Pritam", "James", "Rupam", "Sayan"];
let arraySpread = [...arrayDemo];
console.log(arraySpread);

// rest operator

let sum = (...args) => {
  return args;
};

console.log(sum(1, 2, 3));

// destructuring

// array destructuring

const [cc, dd] = arrayDemo;
console.log(cc);

// object destructuring
const { name } = obj;
console.log("My name is " + name);
