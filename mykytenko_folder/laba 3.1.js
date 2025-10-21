function checkNumber(num) {
  const number = Number(num);

  
  if (number > 0) {
    return "Додатнє";
  } else if (number < 0) {
    return "Від'ємне";
  } else if (number === 0) {
    return "Нуль";
  } else {
    return "Не є числом";
  }
}

const numberInput = document.getElementById('numberInput');
const checkButton = document.getElementById('checkButton');
const resultSpan = document.getElementById('resultSpan');

checkButton.addEventListener('click', () => {
  const inputValue = numberInput.value;
  const result = checkNumber(inputValue);
  resultSpan.textContent = result;
});