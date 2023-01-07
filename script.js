// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  //Initial options object
  const options = {
    passwordLen: 0,
    lowerCase: false,
    numeric: false,
    upperCase: false,
    specialCharacters: false,
  };

  promptPwdLength();
  promptPwdOptions();

  return options;

  //Ask for the options
  function promptPwdOptions() {
    //If clicked not to generate password
    if (!options.passwordLen) return;

    let flag = false;
    while (!flag) {
      options.lowerCase = confirm("Do you want to include lowercase?");
      options.upperCase = confirm("Do you want to include uppercase?");
      options.numeric = confirm("Do you want to include numeric characters?");
      options.specialCharacters = confirm(
        "Do you want to include special characters?"
      );
      //check if at least one option selected
      flag =
        options.lowerCase ||
        options.upperCase ||
        options.numeric ||
        options.specialCharacters;
      if (!flag) alert("Please choose at least 1 security option.");
    }
  }

  //Ask user for password length.
  function promptPwdLength() {
    let flag = false;
    while (!flag) {
      const userInput = prompt("Please enter the length of the password(between 10 and 64): ");
      options.passwordLen = parseInt(userInput);

      //If clicked not to generate password
      if (options.passwordLen === null) flag = true;

      // Validate user input and stop the loop/asking if okay.
      if (options.passwordLen.toString().length < userInput?.length) {
        alert("It must be a number!");
      } else if (options.passwordLen < 10 || options.passwordLen > 64) {
        alert("Please enter the number between 10 and 64");
      } else {
        flag = true;
      }
    }
  }
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);