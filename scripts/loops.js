console.log("loops");

//for
// for (start_point; end_point; increment) {
//     code block
// }

/*for(let i = 0; i < 10; i++) {
    document.write(`<p>${i}</p>`);
}*/

/*for(let i = 2; i < 21; i+=2) {
    document.write(`<p>${i}</p>`);
}*/

/*const num = 4;
let total = 0
document.write(`<h2>Multiplication Table of ${num}</h2>`);
for (let i = 1; i <= 10; i++) {
    total = num * i;
    document.write(`<p>${num} x ${i} = ${total}</p>`);
}*/
/*for (let i = 1; i <= 5; i++) {
    console.log(i);
    document.write(`<p>${i}</p>`);
}
console.log("end of script");*/

// WHILE LOOP
/*let i = 2018; //start point
while (i <= 2022) {
    console.log(i);
    document.write(`<p>${i}</p>`);
    i++; // increment
}*/

// DO WHILE LOOP
/*let j = 0; // start point
do {
    console.log(j);
    document.write(`<p>${j}</p>`);
    j++; // increment
} while (j <= 100);*/
/*for (let i = 1; i <= 10; i++) {
    if (i === 1) {
        console.log("Gold Medal");
        document.write(`<p>${"Gold Medal"}</p>`);
    } else if (i === 2) {
        console.log("Silver Medal");
        document.write(`<p>${"Silver Medal"}</p>`);
    } else if (i === 3) {
        console.log("Bronze Medal");
        document.write(`<p>${"Bronze Medal"}</p>`);
    } else {
        console.log(i);
        document.write(`<p>${i}</p>`);
    }
}*/

function fillThermo() {
  let thermo = document.getElementById("thermo");
  for (let i = 0; i < 10; i++) {
      let level = document.createElement("div");
    level.classList.add("level");
    console.log(level);
    if (i < 3) {
      level.style.backgroundColor = "blue";
    } else if (i < 7) {
      level.style.backgroundColor = "orange";
    } else {
      level.style.backgroundColor = "red";
    }
    thermo.appendChild(level);
  }
}
function generateTable() {
  let tbody = document.getElementById("tbody");
    for (let c = 1; c <= 10; c++) {
        let f = (c * 9 / 5) + 32;
        tbody.innerHTML += `<tr><td>${c}</td><td>${f}</td></tr>`;
  }
}
generateTable();

// ARRAY
let train1 = ["Engine", "Carriage 1", "Carriage 2", "Carriage 3"];
let train2 = ["Engine", "Carriage 1", "Carriage 2", "Carriage 3"];
let train3 = ["Engine", "Carriage 1", "Carriage 2", "Carriage 3"];
console.log(train1);
console.log(train2);
console.log(train3);
for (let i = 0; i < 4; i++) {
    document.write(`<li>${train1[i]}</li>`);
    document.write(`<li>${train2[i]}</li>`);
    document.write(`<li>${train3[i]}</li>`);
}


