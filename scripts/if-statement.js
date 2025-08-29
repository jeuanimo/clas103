//console.log("Hello, World!");
//if-statemen (condition y/n)
// if (condition)
//

//let result = 50;
//if (result > 40) {
//  console.log("You passed the exam!");
//}
//let result1 = 45;
//let result2 = 45;
//if (result1 == result2) {
// console.log("Both results are equal");
//re}

//if else statement
//let result = 50;
//if (result > 40) {
// console.log("You passed the exam!");
//} else {
//console.log("You failed the exam!");////
//}
//let waterTemp = 105;
//if (waterTemp > 100) {
//  console.log("Water is boiling!");
//} else {
//  console.log("Water is not boiling.");
//}

// function  age calculation
//function ageCalculator() {
//   let age = prompt("Please enter your age:");
// if (age < 13) {
//   console.log("You are a child.");
//} else if (age < 21) {
//        console.log("You are a teenager.");
//    } else if (age < 64) {
//        console.log("You are an adult.");
//    } else {
//        console.log("You are a senior citizen.");
//        }
//}

//function trafficLight() {
//    let color = prompt("Please enter the traffic light color (red, yellow, green):");
//  if (color === "red") {

//    console.log("Stop!");
//  } else if (color === "yellow") {
//    console.log("Slow down!");
//  } else if (color === "green") {
//    console.log("Go!");
//  } else {
//    console.log("Invalid color.");
//  }
//}
//function ticketPrice() {
//    let age = prompt("Please enter your age:");
//    let ticketPrice = 0;
//
//    if (age < 12) {
//        ticketPrice = 5;
//        console.log("Your ticket price is: $5");
//    } else if (age < 18) {
//        ticketPrice = 8;
//        console.log("Your ticket price is: $8");
//    } else {
//        ticketPrice = 10;
//        console.log("Your ticket price is: $10");
//    }
//}
function temperature() {
    let temperature = prompt("Please enter the temperature in Celsius:");
    let outfit = "";
    const p = document.getElementById("results");
    p.classList.remove("hot", "normal", "cold");

    if (temperature < 15) {
        p.classList.add("cold");
        outfit = "Jacket"
    } else if (temperature < 25) {
        p.classList.add("normal");
        outfit = "Wear a sweater.";
    } else {
        outfit = "Wear a t-shirt.";
    }
    p.innerHTML = "You should wear a " + outfit;
}
// Switch-case
// use it for checking one single variable or expression

let action = prompt("Choose and action: Jump of Run")
switch (action) {
    case "J":
        console.log("You Jumped over an object!");
        break;
        
    case "R":
        console.log("You are Running!");
        break;

    default:
        console.log("Unknown action.");
}
