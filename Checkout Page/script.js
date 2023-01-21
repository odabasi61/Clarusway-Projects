"use script";

const container = document.querySelector(".container");
const add = document.querySelector(".add");
const rem = document.querySelector(".rem");
const taxRate = 0.18;
let mltply;

window.addEventListener("load", () => {
  accountTotal();
});

container.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("minus")) {
    if (e.target.nextElementSibling.innerText > 0) {
      e.target.nextElementSibling.innerText--;
      account(e.target.closest(".info"));

      // rem.classList.remove("hidden");
      // setTimeout(() => {
      //   rem.classList.add("hidden");
      // }, 500);
    }
  } else if (e.target.classList.contains("plus")) {
    e.target.previousElementSibling.innerText++;
    account(e.target.closest(".info"));

    // add.classList.remove("hidden");
    // setTimeout(() => {
    //   add.classList.add("hidden");
    // }, 500);
  } else if (e.target.classList.contains("remove")) {
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
  let allStotal = document.querySelectorAll(".stotal");
  let sumOfSubTotal = 0;
  allStotal.forEach((sttls) => {
    sumOfSubTotal += +sttls.innerText;
  });

  let taxCost = sumOfSubTotal * taxRate;
  let shippingCost = sumOfSubTotal > 20 ? 15.0 : 0;

  document.querySelector(".subt").innerText = sumOfSubTotal.toFixed(2);
  document.querySelector(".tax").innerText = taxCost.toFixed(2);
  document.querySelector(".ship").innerText = shippingCost.toFixed(2);
  document.querySelector(".total").innerText = (
    sumOfSubTotal +
    taxCost +
    shippingCost
  ).toFixed(2);
};
