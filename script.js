// Assignment code here
function generatePassword() {
  var upperCaseLetters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCaseLetters ="abcdefhijklmnopqrstuvwxyz";
  var numbers = "1234567890";
  var specialCharacters = "!@#$%^&*()";
  var passwordLength = parseInt(prompt("Enter Password Length (8-128)?"))
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    return "invalid password length please try again"
  }
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