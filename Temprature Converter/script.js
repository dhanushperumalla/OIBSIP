function convertTemperature() {
  const temperature = document.getElementById("temperature").value;
  const unit = document.getElementById("unit").value;
  let result;

  if (unit === "celsius") {
    result = (temperature * 9) / 5 + 32;
    document.getElementById(
      "result"
    ).innerText = `${temperature}° Celsius is ${result.toFixed(2)}° Fahrenheit`;
  } else {
    result = ((temperature - 32) * 5) / 9;
    document.getElementById(
      "result"
    ).innerText = `${temperature}° Fahrenheit is ${result.toFixed(2)}° Celsius`;
  }
}
