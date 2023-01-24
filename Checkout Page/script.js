"use script";

const container = document.querySelector(".container");
const add = document.querySelector(".add");
const rem = document.querySelector(".rem");
// const taxRate = 0.18;
// const shippingPrice = 15;
// const shippingFreePrice = 300;

// once we put them in the local storage, we could comment them. but if it doesnt work in another browser, we can uncomment them.

window.addEventListener("load", () => {
  // localStorage.setItem("taxRate", taxRate);
  // localStorage.setItem("shippingPrice", shippingPrice);
  // localStorage.setItem("shippingFreePrice", shippingFreePrice);
  accountTotal();
});

container.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("minus")) {
    if (e.target.nextElementSibling.innerText > 1) {
      e.target.nextElementSibling.innerText--;
      account(e.target.closest(".info"));

      rem.classList.remove("hidden");
      setTimeout(() => {
        rem.classList.add("hidden");
      }, 500);
    } else {
      if (
        confirm(
          `${
            e.target.closest(".info").querySelector("h3").innerText
          } will be removed!`
        )
      ) {
        e.target.closest(".product").remove();
      }
    }
    accountTotal();
  } else if (e.target.classList.contains("plus")) {
    e.target.previousElementSibling.innerText++;
    account(e.target.closest(".info"));

    add.classList.remove("hidden");
    setTimeout(() => {
      add.classList.add("hidden");
    }, 500);
  } else if (e.target.classList.contains("remove")) {
    if (
      confirm(
        `${
          e.target.closest(".info").querySelector("h3").innerText
        } will be removed!`
      )
    ) {
      e.target.closest(".product").remove();
    }
    accountTotal();
  }
});

const account = (a) => {
  const price = a.querySelector(".span1").innerText;
  const quantity = a.querySelector("#quantity").innerText;
  const result = +(price * quantity).toFixed(2);
  a.querySelector(".stotal").innerText = result;
  accountTotal();
};

const accountTotal = () => {
  const allStotal = document.querySelectorAll(".stotal");
  let sumOfSubTotal = 0;
  allStotal.forEach((sttls) => {
    sumOfSubTotal += +sttls.innerText;
  });

  const taxCost = sumOfSubTotal * localStorage.getItem("taxRate");
  const shippingCost = parseFloat(
    sumOfSubTotal > 0 &&
      sumOfSubTotal < localStorage.getItem("shippingFreePrice")
      ? localStorage.getItem("shippingPrice")
      : 0
  );
  // here we could have used Number instead of parseFloat. they are the same.

  document.querySelector(".subt").innerText = sumOfSubTotal.toFixed(2);
  document.querySelector(".tax").innerText = taxCost.toFixed(2);
  document.querySelector(".ship").innerText = shippingCost.toFixed(2);
  document.querySelector(".total").innerText = (
    sumOfSubTotal +
    taxCost +
    shippingCost
  ).toFixed(2);
};
