// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Function to generate password by length
function generatePassword(){
 
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

  var hasSpecialChar =  confirm('Click Ok if you want special characters');
  var hasUppercase =    confirm('Click Ok if you want Uppercase characters');
  var hasLowercase =    confirm('Click Ok if you want Lowercase characters');

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
