function convertTemperature() {
  let temp = document.getElementById("temp").value;
  let scale = document.getElementById("scale").value;
  let resultElement = document.getElementById("result");
  let imageElement = document.getElementById("tempImage");

  // --- RESET FIRST ---
  resultElement.style.color = "black"; // reset color
  imageElement.style.display = "none"; // hide image
  imageElement.src = ""; // clear image path

  // --- CHECK INPUT ---
  if (temp === "") {
    resultElement.innerHTML = "Please enter a temperature!";
    return;
  }

  temp = parseFloat(temp);
  let convertedTemp = 0;
  let resultText = "";

  if (scale === "C") {
    convertedTemp = (temp * 9) / 5 + 32;
    resultText = `${temp}°C = ${convertedTemp.toFixed(2)}°F`;
  } else if (scale === "F") {
    convertedTemp = ((temp - 32) * 5) / 9;
    resultText = `${temp}°F = ${convertedTemp.toFixed(2)}°C`;
  }

  resultElement.innerHTML = resultText;

  // --- APPLY NEW COLOR + IMAGE ---
  if (convertedTemp <= 0) {
    resultElement.style.color = "blue";
    imageElement.src = "img/cold.png";
  } else if (convertedTemp > 0 && convertedTemp <= 20) {
    resultElement.style.color = "green";
    imageElement.src = "img/cool.png";
  } else if (convertedTemp > 20 && convertedTemp <= 30) {
    resultElement.style.color = "orange";
    imageElement.src = "img/warm.png";
  } else {
    resultElement.style.color = "red";
    imageElement.src = "img/hot.png";
  }

  // Show updated image
  imageElement.style.display = "block";
}
