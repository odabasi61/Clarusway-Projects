const lengthSlider = document.querySelector(".pass-length input");
const generateBtn = document.querySelector(".generate-btn");
const passwordInput = document.querySelector(".input-box input");
const passIndicator = document.querySelector(".pass-indicator");
const copyIcon = document.querySelector(".input-box span");
const options = document.querySelectorAll(".option input");

// generate password
const characters = {
  // object of all characters
  lowercase: "abcdefghijklmnopqrstuvxwyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "^!$%&|[](){}:;.,*+-#@<>~",
};
const generatePassword = () => {
  let staticPassword = "";
  randomPassword = "";
  excludeDuplicate = false;
  passLength = lengthSlider.value;

  options.forEach((option) => {
    // loop through each option's checkbox
    if (option.checked) {
      // if checkbox is checked
      // if checkbox id isnt ecx-duplicate && spaces
      if (option.id !== "exc-duplicate" && option.id !== "spaces") {
        // adding particular key value from character object to static password
        staticPassword += characters[option.id];
      } else if (option.id === "spaces") {
        // adding space at the beginning and end of staticpassword
        staticPassword += `  ${staticPassword}  `;
      } else {
        excludeDuplicate = true;
      }
    }
  });
  for (let i = 0; i < passLength; i++) {
    // getting random character from the static password
    let randomChar =
      staticPassword[Math.floor(Math.random() * staticPassword.length)];
    if (excludeDuplicate) {
      // if excludeduplicate is true
      // id randompassword doens not contain the current random character or randomchar is equal to space ' ' then add random character to randompassword else decrement i by -1
      !randomPassword.includes(randomChar) || randomChar == " "
        ? (randomPassword += randomChar)
        : i--;
    } else {
      // else add random character to randompassword
      randomPassword += randomChar;
    }
  }
  passwordInput.value = randomPassword; // passing randompassword to password input value
};

// update pass indicator
const updatePassIndicator = () => {
  passIndicator.id =
    lengthSlider.value <= 8
      ? "weak"
      : lengthSlider.value <= 16
      ? "medium"
      : "strong";
};

// slider bar value
const updateSlider = () => {
  document.querySelector(".pass-length span").innerText = lengthSlider.value;
  generatePassword();
  updatePassIndicator();
};
updateSlider(); // by adding this function here, everytimes page renewed, value of the slider is 15

// copy the generated password
const copyPassword = () => {
  navigator.clipboard.writeText(passwordInput.value); // copy the password
  copyIcon.innerText = "check"; // copy icon changes to thick
  setTimeout(() => {
    // after 1.5 seconds thick icon changes to copy icon
    copyIcon.innerText = "copy_all";
  }, 1500);
};

lengthSlider.addEventListener("input", updateSlider);
generateBtn.addEventListener("click", generatePassword);
copyIcon.addEventListener("click", copyPassword);
