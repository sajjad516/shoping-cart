function updateProductNumber(product, price, isIncresing) {
  const productInput = document.getElementById(product + "-number");
  let productNumber = productInput.value;
  if (isIncresing == true) {
    productNumber = parseInt(productNumber) + 1;
  } else if (productNumber > 0) {
    productNumber = parseInt(productNumber) - 1;
  }
  productInput.value = productNumber;
  // update amount of product with product number
  const productTotal = document.getElementById(product + "-total");
  productTotal.innerText = productNumber * price;

  //calculate total
  calculateTotal();
}

// subtotal count

function getInputValue(product) {
  const productInput = document.getElementById(product + "-number");
  const productNumber = parseInt(productInput.value);
  return productNumber;
}
function calculateTotal() {
  const phoneTotal = getInputValue("phone") * 1219;
  const caseTotal = getInputValue("case") * 59;
  const subTotal = phoneTotal + caseTotal;
  const tax = subTotal / 10;
  const total = subTotal + tax;
  //update on the HTML

  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax-amount").innerText = tax;
  document.getElementById("total-price").innerText = total;
}

// increase decrease phone

document.getElementById("phone-plus").addEventListener("click", function () {
  updateProductNumber("phone", 1219, true);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  updateProductNumber("phone", 1219, false);
});

// increase decrease caseing
// increase product value
document.getElementById("case-plus").addEventListener("click", function () {
  updateProductNumber("case", 59, true);
});

// decrease product value

document.getElementById("case-minus").addEventListener("click", function () {
  updateProductNumber("case", 59, false);
});
