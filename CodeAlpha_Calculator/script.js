const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    if (value === "C") {
      currentInput = "";
      display.value = "";
    } else if (value === "=") {
      try {
        currentInput = eval(currentInput);
        display.value = currentInput;
      } catch {
        display.value = "Error";
        currentInput = "";
      }
    } else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});

// Keyboard support
document.addEventListener("keydown", (e) => {
  const key = e.key;

  if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.'].includes(key)) {
    currentInput += key;
    display.value = currentInput;
  }

  if (key === 'Enter') {
    try {
      currentInput = eval(currentInput);
      display.value = currentInput;
    } catch {
      display.value = "Error";
      currentInput = "";
    }
  }

  if (key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
  }

  if (key === 'Escape') {
    currentInput = "";
    display.value = "";
  }
});