// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var lowercase, uppercase, numbers, special, generatedPassword;
var lowercaseLetters = ['a', 'b', 'c', 'd','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['!', '@', '#', '%', '^', '&','*',];
var mergedArray = [];
var character = "";
var passwordLength = 0; // resets password back to zero so irrelevant information isn't saved
var confirmed = false
var lowercaseConfirm
var uppercaseConfirm
var numbersConfirm
var specialConfirm
var password
// --------------------------------------------------------------------------------

// need to add a cancel function to prompt
// Add event listener to generate button
generateBtn.addEventListener("click", inquireUser);
cancelBtn.addEventListener("click", prompt);

function inquireUser () {
  passwordLength = prompt('how long would you like your password? between 8-128 characters');

  if (passwordLength < 8 || passwordLength > 128) {
    alert('the password is outside constraints, requires between 8-128 characters') //promt instead of alert
    inquireUser ()
  } else {confirmConditions()
  }
}

function confirmConditions() { 
  while (confirmed === false){
     lowercaseConfirm = confirm('would you like to include lowercase letters?')
     uppercaseConfirm = confirm('would you like to include uppercase letters?')
     numbersConfirm = confirm('would you like to include numbers?')
     specialConfirm = confirm('would you like to include special characters?')
   
    
    if (lowercaseConfirm === true || uppercaseConfirm === true || numericConfirm === true || specialConfirm === true) {
      confirmed = true
      writePassword()
    } else {
      console.log ("not met") 
      alert('please select atleast one condition')
      confirmConditions()
    }
  }
}
// ------------------------------------------------------------------------------------------------------------------------
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// changed from concat to push. merged array or password?
function generatePassword() {
  console.log(lowercaseLetters)
  if (lowercaseConfirm === true) {
    mergedArray = lowercaseLetters.concat(mergedArray);
    console.log("lowercaseLetters are added " + mergedArray);
  }
  if (uppercaseConfirm === true) {
   mergedArray = uppercaseLetters.concat(mergedArray);
    console.log("uppercase are added " + mergedArray);
  }
  if (numbersConfirm === true) {
    mergedArray = numbers.concat(mergedArray);
    console.log("numbers are added " + mergedArray)
  }
  if (specialConfirm === true) {
    mergedArray = special.concat(mergedArray);
    console.log("special characters are added " + mergedArray)
  }


  console.log(mergedArray)
  const password = []
  for (let i=0; i < passwordLength; i++) {
  const character = mergedArray[Math.floor(Math.random() * mergedArray.length)]
  password.push(character)
  }
  return password.join("")
}

