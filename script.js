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
  var passwordUppercase = confirm("add uppercase letter")
  var passwordLowercase = confirm("add lowercase letter")
  var passwordNumber = confirm("add number")
  var passwordSpecialcharacter = confirm("add special character")
  if (!passwordLowercase && !passwordUppercase && !passwordNumber && !passwordSpecialcharacter) {
    return "choose atleast one option"
  }
  var validCharacters = ""
  if (passwordLowercase) {
    validCharacters += passwordLowercase
  }
  if (passwordUppercase) {
    validCharacters += passwordUppercase
  }
  if (passwordSpecialcharacter) {
    validCharacters += passwordSpecialcharacter
  }
  if (passwordNumber) {
    validCharacters += passwordNumber
  }
  var newPassword = ""
  for(let i=1;i<=passwordLength; i++){
    var y = Math.floor(Math.random() * validCharacters.length)
   newPassword += validCharacters[y] 
  }
  console.log(newPassword)
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