// --- Conversion Functions ---
function cToF(c) {
  return (c * 9) / 5 + 32;
}
function fToC(f) {
  return ((f - 32) * 5) / 9;
}

// --- Display Result + Thermometer ---
function showResult(text, celsiusForThermometer = null) {
  const resultEl = document.getElementById("result");
  resultEl.textContent = text;
  if (
    typeof celsiusForThermometer === "number" &&
    !Number.isNaN(celsiusForThermometer)
  ) {
    updateThermometer(celsiusForThermometer);
  }
}

function updateThermometer(celsius) {
  const fill = document.getElementById("thermFill");
  const label = document.getElementById("thermLabel");
  const imageEl = document.getElementById("tempImage");

  let c = Number(celsius);
  if (Number.isNaN(c)) c = 0;
  const clamped = Math.max(0, Math.min(100, c));

  fill.style.height = clamped + "%";
  label.textContent = Math.round(c * 10) / 10 + " °C";

  if (c <= 10) {
      fill.style.backgroundColor = "#3b82f6";
      imageEl.src = "img/cold.png";
      imageEl.style.display = "block";
      // blue
  } else if (c <= 25) {
      fill.style.backgroundColor = "#fb923c";
      imageEl.src = "img/cool.png";
      imageEl.style.display = "block";
  // orange
  } else {
      fill.style.backgroundColor = "#ef4444";
      imageEl.src = "img/hot.png";
      imageEl.style.display = "block";
  // red
  }
}

// --- Table Generation ---
function generateTable() {
  const tbody = document.getElementById("tableBody");
  tbody.innerHTML = "";
  for (let c = 0; c <= 100; c += 10) {
    const f = cToF(c);
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${c}°C</td><td>${f.toFixed(1)}°F</td>`;
    tbody.appendChild(tr);
  }
}

// --- Event Listeners ---
document.getElementById("btnCtoF").addEventListener("click", () => {
  const input = prompt("Enter temperature in Celsius (e.g. 24):");
  if (input === null) return;
  const c = parseFloat(input.trim());
  if (Number.isNaN(c)) {
    alert("Please enter a valid number for Celsius.");
    return;
  }
  const f = cToF(c);
  showResult(`${c}°C = ${f.toFixed(1)}°F`, c);
});

document.getElementById("btnFtoC").addEventListener("click", () => {
  const input = prompt("Enter temperature in Fahrenheit (e.g. 75.2):");
  if (input === null) return;
  const f = parseFloat(input.trim());
  if (Number.isNaN(f)) {
    alert("Please enter a valid number for Fahrenheit.");
    return;
  }
  const c = fToC(f);
  showResult(`${f}°F = ${c.toFixed(1)}°C`, c);
});

document
  .getElementById("generateTable")
  .addEventListener("click", generateTable);

document.getElementById("clearTable").addEventListener("click", () => {
  document.getElementById("tableBody").innerHTML = "";
});

document.getElementById("resetTherm").addEventListener("click", () => {
  document.getElementById("thermFill").style.height = "0%";
  document.getElementById("thermFill").style.backgroundColor = "#e5e7eb";
  document.getElementById("thermLabel").textContent = "-- °C";
  document.getElementById("result").textContent = "No conversion yet.";
  document.getElementById("tempImage").style.display = "none"; // hide image
});
