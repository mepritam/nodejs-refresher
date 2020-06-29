//basic JS objects

let demoObj = {
  name: "Pritam",
  age: 25,
  graduate: true,
};

console.log(demoObj.name);

// array examples

let demoArray = ["Kolkata", "Mumbai", "Chennai", "Pune"];

for (let city of demoArray) {
  console.log(city);
}

console.log(demoArray.map((cityName) => "City:" + cityName));
console.log(demoArray);
