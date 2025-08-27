console.log("Hello, World!");
// 1. Function Declaration(creating a function)
function sayHello() {
  // body of the function
  console.log("Hello Cohort 61!");
}
//2 call/trigger.execute the function
sayHello();
sayHello();
// Example 2 with 1 input parameter (input)
function greet(name) {
  console.log("Hello " + name + "!");
}
greet("Jeuan");
greet("Pam");
greet("Brant");

//Example 3 with 2 parameters
function greet2(fname, lname = "") {
  console.log("Welcome to the system " + fname + " " + lname + "!");
}
greet2("Eric", "Dorsey");

// Double the number
function doubleNumber(num) {
  let total = num * 2;

  console.log(total);
}
doubleNumber(10);
//prompt90
function welcome() {
  let name = prompt("Enter your name:");
  console.log("Welcome " + name + "!");
}

// Example 5 default parameters
function add(num1 = 0, num2 = 0) {
  let total = num1 + num2;
  console.log("The total is: " + total);
}

// combine names
function combineNames(firstName = "unknown", lastName = "unknown") {
  console.log(`Combined Name: ${firstName} ${lastName}`);
}
combineNames("John", "Doe");
combineNames("Jane", "Smith");
combineNames();
// Convert Minutes to seconds
// function convertMinutesToSeconds(minutes = 0) {
//  let seconds = minutes * 60;
// console.log(`${minutes} minutes is equal to ${seconds} seconds.`);
//}//
//convertMinutesToSeconds(5);
function convertMinutesToSeconds() {
  let minutes = Number(prompt("Enter the number of minutes:"));
  let seconds = minutes * 60;
  document.getElementById(
    "results"
  ).innerHTML += `<li class="conv">${minutes} minutes is equal to ${seconds} seconds.</li>`;
}
