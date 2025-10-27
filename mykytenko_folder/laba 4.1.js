let arr = [];

document.getElementById("generateBtn").addEventListener("click", generateArray);
document.getElementById("sortBtn").addEventListener("click", sortArray);
document.getElementById("shuffleBtn").addEventListener("click", shuffleArray);

function generateArray() {
  const n = parseInt(document.getElementById("nValue").value);
  if (isNaN(n) || n <= 0) {
    alert("Введіть коректне число N!");
    return;
  }
  arr = Array.from({ length: n }, () => Math.floor(Math.random() * 100) + 1);
  displayArray(arr);
  document.getElementById("time").innerText = "";
}

function displayArray(array) {
  const container = document.getElementById("array");
  container.innerHTML = "";
  array.forEach(num => {
    const span = document.createElement("span");
    span.textContent = num + " ";
    span.className = num % 2 === 0 ? "even" : "odd";
    container.appendChild(span);
  });
}

function sortArray() {
  if (arr.length === 0) {
    alert("Спочатку згенеруйте масив!");
    return;
  }
  arr.sort((a, b) => a - b);
  displayArray(arr);
}

function shuffleArray() {
  if (arr.length === 0) {
    alert("Спочатку згенеруйте масив!");
    return;
  }
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  displayArray(arr);
  document.getElementById("time").innerText = "Масив перемішано.";
}
