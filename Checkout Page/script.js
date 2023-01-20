"use script";

// Buttons
const container = document.querySelector(".container");
// let plus = document.querySelectorAll(".plus");
// let minus = document.querySelectorAll(".minus");
// let remove = document.querySelectorAll(".remove");

// Amount
// let quantity = document.querySelectorAll("#quantity");
// let stotal = document.querySelectorAll(".stotal");

// Totals
// let subt = document.querySelector(".subt");
// let tax = document.querySelector(".tax");
// let ship = document.querySelector(".ship");
// let total = document.querySelector(".total");

const taxRate = 0.18;

let mltply;

window.addEventListener("load", () => {
  accountTotal();
});

// plus.forEach((p) => {
//   p.addEventListener("click", (e) => {
//     e.preventDefault();
//     ++p.previousElementSibling.innerText;
//     let price = +p.parentElement.previousElementSibling.children[1].textContent;
//     mltply = +p.parentElement.children[1].textContent * price;
//     stotal = mltply.toFixed(2);
//     p.parentElement.nextElementSibling.nextElementSibling.children[0].textContent = `${stotal}`;
//   });
// });

// minus.forEach((p) => {
//   p.addEventListener("click", (e) => {
//     if (p.nextElementSibling.innerText > 1) {
//       e.preventDefault();
//       --p.nextElementSibling.innerText;
//     }
//   });
// });

container.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("minus")) {
    if (e.target.nextElementSibling.innerText > 1) {
      e.target.nextElementSibling.innerText--;
      account(e.target.closest(".info"));
    }
  } else if (e.target.classList.contains("plus")) {
    e.target.previousElementSibling.innerText++;
    account(e.target.closest(".info"));
  }
  else if (e.target.classList.contains("remove")) {
    e.target.closest(".product").remove();
    accountTotal();
  }
});

let account = (a) => {
  let price = a.querySelector(".span1").innerText;
  let quantity = a.querySelector("#quantity").innerText;
  let result = +(price * quantity).toFixed(2);
  a.querySelector(".stotal").innerText = result;
  accountTotal();
};

let accountTotal = () => {
  let allStotal = document.querySelectorAll('.stotal');
  let sumOfSubTotal = 0;
  allStotal.forEach((sttls) => {
    sumOfSubTotal += +sttls.innerText;
  });

  let taxCost = sumOfSubTotal * tax;

  let shippingCost = sumOfSubTotal > 20 ? 15.00 : 0;

  document.querySelector('.subt').innerText = sumOfSubTotal.toFixed(2);
  document.querySelector('.tax').innerText = taxCost.toFixed(2);
  document.querySelector('.ship').innerText = shippingCost.toFixed(2);
  document.querySelector('.total').innerText = (sumOfSubTotal + taxCost + shippingCost).toFixed(2);
};
