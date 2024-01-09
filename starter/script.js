// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = prompt("What is the password characters length?:");   //This line displays a prompt in the browser, asking the user to enter the desired password length. The response is stored in the passwordLength variable.
  passwordLength = parseInt(passwordLength);   //Converts the value of the passwordLength variable to an integer[negative numbers and positive numbers, but they don't have a comma] using parseInt(). This ensures that user input is treated as a number.

  var includeUppercase = confirm("Include uppercase characters?"); //Displays a confirm box asking the user to decide whether to include uppercase characters in the password. The result (true or false) is stored in the includeUppercase variable.
  var includeLowercase = confirm("Include lowercase characters?"); //Similar to the previous line, this asks the user if they want to include lowercase characters in the password. The result is stored in includeLowercase.
  var includeNumbers = confirm("Include numeric characters?"); //It asks the user if they want to include numeric characters in the password, and the result is stored in includeNumbers.
  var includeSpecialCharacters = confirm("Include special characters?"); //It asks the user if they want to include special characters in the password, and the result is stored in includeSpecialCharacters.

  return {                                                   //Returns an object that contains the options chosen by the user. This object has the properties:
    passwordLength: passwordLength,                          
    includeUppercase: includeUppercase,
    includeLowercase: includeLowercase,
    includeNumbers: includeNumbers,
    includeSpecialCharacters: includeSpecialCharacters
  };                                                         //This function is essential for providing user preferences to the generatePassword() function
}

// Function for getting a random element from an array
function getRandom(arr) { 
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  var passwordOptions = getPasswordOptions();
  if (!passwordOptions) {
    return; // Handle the case where the user cancels the prompt or enters invalid data
  }

  let allChars = [];
  if (passwordOptions.includeUppercase) {
    allChars = allChars.concat(upperCasedCharacters);
  }
  if (passwordOptions.includeLowercase) {
    allChars = allChars.concat(lowerCasedCharacters);
  }
  if (passwordOptions.includeNumbers) {
    allChars = allChars.concat(numericCharacters);
  }
  if (passwordOptions.includeSpecialCharacters) {
    allChars = allChars.concat(specialCharacters);
  }

  let password = "";
  password += getRandom(upperCasedCharacters);
  password += getRandom(lowerCasedCharacters);
  password += getRandom(numericCharacters);
  password += getRandom(specialCharacters);

  while (passwordOptions.passwordLength > password.length) {
    password += getRandom(allChars);
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);