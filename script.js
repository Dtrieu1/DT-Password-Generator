// Assignment Code
var generateBtn = document.querySelector("#generate");

//function generatepassword
//Updated Array
function generatePassword() {
  let password = "";
  let uppercase = [
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
  let lowercase = [
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
  let numerical = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let symbol = [
    "!",
    "#",
    "$",
    "%",
    "&",
    "(",
    ")",
    "*",
    "+",
    "-",
    ".",
    "'",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "]",
    "^",
    "_",
    "'",
    "{",
    "|",
    "}",
    "~",
  ];
  let chars = [];
  let character_count = prompt(
    "Hello - Please select a length of between 8 to 128 characters"
  );
  let lowercase_check = confirm(
    "Do you want any lowercase letters? (Yes or No)"
  );
  let uppercase_check = confirm(
    "What about any uppercase letters? (Yes or No)"
  );
  let number_check = confirm(
    "Another follow up - Any numeric values you would like in your password? (Yes or No)"
  );
  let special_character_check = confirm(
    "Lastly, any special characters? (Ok for Yes or Cancel for No)"
  );

  if (parseInt(character_count) < 8 || parseInt(character_count) > 128) {
    character_count = prompt(
      "Please try again - Please select a length of between 8 to 128 characters"
    );
  }
  if (
    !lowercase_check &&
    !uppercase_check &&
    !number_check &&
    !special_character_check
  ) {
    alert("Unable to make password with no options selected");
    return;
  }
  if (lowercase_check) {
    chars.push(lowercase);
  }
  if (uppercase_check) {
    chars.push(uppercase);
  }
  if (number_check) {
    chars.push(numerical);
  }
  if (special_character_check) {
    chars.push(symbol);
  }
  chars = chars.flat();

  for (var i = 0; i < character_count; i++) {
    let randomChar = getRandomIndex(chars);
    password = password.concat(randomChar);
  }

  //returns password
  return password;
}

function getRandomIndex(arr = []) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Write password to the #password input
function writePassword(event) {
  event.preventDefault();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.textContent = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
