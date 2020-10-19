//Assigned code
var generatePasswordButton = document.getElementById("generate");
var copyToClipBoardButton = document.getElementById("copytoclipboard");

//Possible characters
var onlyUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var onlyLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var onlySpecial = ['#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','['];
var onlyNumeric = [0,1,2,3,4,5,6,7,8,9];

//Options
function generateOptions() {
     //prompt user for number restriction
  var length = parseInt(prompt("How many characters would you like your password to contain?"));
    if(isNaN(length) === true){
      alert('Numeric only')
      return;
    }
    //prompt user for length restriction
    if (length < 8) {
        alert('The password must be at least 8 characters!');
        return;
    }
    if (length > 128) {
        alert('The password must be less than 128 characters!');
        return;
    }

    //prompt user for special character
    var hasSpecialCharacter = confirm("Click Ok if you want a special character.");

    //prompt user for numeric character
    var hasNumeric = confirm("Click Ok if you want a number.");

     //prompt user for lowercase character
    var hasLowercase = confirm("Click Ok if you want a lowercase.");

    //prompt user for uppercase character
    var hasUppercase = confirm("Click Ok if you want an uppercase.");

  
    //Password must contain at least one special, numeric, lowercase, and uppercase character
    if (!hasLowercase && !hasUppercase && !hasNumeric && !hasSpecialCharacter) {
        alert("Your password must contain at least one special, numeric, lowercase, or uppercase character");
        return
    }
  
//Variable question options
    var questionOptions = {
        length: length,
        specialCharacters: hasSpecialCharacter,
        numeric: hasNumeric,
        lowerCase: hasLowercase,
        upperCase: hasUppercase
    }

    return questionOptions;

}
//Function generator password
function generatePassword() {

    var options = generateOptions();
    console.log(options)

    var passwordPool = [];
    console.log(passwordPool)

    if (options.specialCharacters) {
        for (i = 0; i < onlySpecial.length; ++i) {
            passwordPool.push(onlySpecial[i]);
        }
    } 
    if (options.numeric) {
        for (i = 0; i < onlyNumeric.length; ++i) {
        passwordPool.push(onlyNumeric[i]);
        }
    }
    if (options.lowerCase) {
        for (i = 0; i < onlyLower.length; ++i) {
        passwordPool.push(onlyLower[i]);
        }
    }
    if (options.upperCase) {
        for (i = 0; i < onlyUpper.length; ++i) {
        passwordPool.push(onlyUpper[i]);

      }
    }
//Final password
    var finalPassword = [];

    for (let i = 0; i < options.length; ++i) {
        var randomPicker = Math.floor(Math.random() * Math.floor(passwordPool.length));
         finalPassword.push(passwordPool[randomPicker])
    }

    console.log(finalPassword)

    var superFinal = finalPassword.join('');
    console.log(superFinal)

    document.getElementById("display").textContent = superFinal;
}


    var password = "";


function copytoClipboard() {

    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Your password has now been copied to the clipboard");

}
//Password generated
generatePasswordButton.addEventListener('click', generatePassword);


