function convertCelsiusToFahrenheit() {
  let celsius = Number(prompt("Enter the temperature in Celsius:"));
  let fahrenheit = (celsius * 9) / 5 + 32;
  document.getElementById(
    "results"
  ).innerHTML += `<li class="conv">${celsius} Degrees Celsius is equal to ${fahrenheit}  Degrees Fahrenheit. </li>`;
}
