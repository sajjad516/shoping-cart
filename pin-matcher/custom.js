function getPin() {
  const pin = Math.round(Math.random() * 1000000);
  const pinString = pin + "";
  if (pinString.length == 6) {
    return pin;
  } else {
    // console.log("got 6 digit pin and calling again : ", pin);
    return getPin();
  }
}
function generatePin() {
  const pin = getPin();
  document.getElementById("pin-display").value = pin;
}

document.getElementById("key-pad").addEventListener("click", function (event) {
  const number = event.target.innerText;
  const numberInput = document.getElementById("typed-numbers");
  if (isNaN(number)) {
    if (number == "C") {
      numberInput.value = "";
    }
  } else {
    const previousNumber = numberInput.value;
    const newNumber = previousNumber + number;
    numberInput.value = newNumber;
  }
});

function verifypin() {
  const pin = document.getElementById("pin-display").value;
  const typedPin = document.getElementById("typed-numbers").value;
  const successMessage = document.getElementById("successMsg");
  const failMessage = document.getElementById("failMsg");
  if (pin == typedPin) {
    successMessage.style.display = "block";
    failMessage.style.display = "none";
  } else {
    failMessage.style.display = "block";
    successMessage.style.display = "none";
  }
}
