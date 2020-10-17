// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Possible password values
var SPECIALCHAR_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126))
var UPPERCASE_CHAR_CODES =   arrayFromLowToHigh(65, 90)
var LOWERCASE_CHAR_CODES =   arrayFromLowToHigh(97, 122)
var NUMBER_CHAR_CODES =      arrayFromLowToHigh(48, 57)


//Function to generate password by length
//Length restrictions
//Length is no less than 8 and no greater than 128
function generatePassword(length, hasSpecialChar, hasUppercase, hasLowercase, hasNumber) {
   let charCodes = LOWERCASE_CHAR_CODES
   if (hasUppercase)charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
   if (hasSpecialChar)charCodes = charCodes.concat(SPECIALCHAR_CHAR_CODES)
   if (hasNumber)charCodes = charCodes.concat(NUMBER_CHAR_CODES)

  var length = parseInt(prompt('how many characters would you like for your password to contain?'));
  if(isNaN(length) === true){
    alert('Numeric only')
    return;
  }
  if(length < 8){
    alert ('Password length > 8')
    return
  }
  if(length > 128){
    alert ('Password length < 128')
    return
  }
//Confirm Special, Uppercase, Lowercase, Number Characters
  var hasSpecialChar =  confirm('Click Ok if you want special characters');
  var hasUppercase =    confirm('Click Ok if you want Uppercase characters');
  var hasLowercase =    confirm('Click Ok if you want Lowercase characters');
  var hasNumber   =     confirm ('Click Ok if you want numbers');

}

function arrayFromLowToHigh(low, high){
  var array = []
  for (let i = low; i <= high; i++){
    array.push(i)
  }
  return array
}


//Conditional statements for Special Character, Uppercase, Lowercase



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
