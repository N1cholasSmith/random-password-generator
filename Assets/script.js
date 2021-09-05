// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var lowercase, uppercase, numbers, special, generatedPassword;
var lowercaseLetters = ['a', 'b', 'c', 'd','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ['!', '@', '#', '%', '^', '&','*',];
var mergedArray = [];
var passwordLength = 0; // resets password back to zero so irrelevant information isn't saved
var confirmed = false

// --------------------------------------------------------------------------------


// Add event listener to generate button
generateBtn.addEventListener("click", inquireUser);

function inquireUser () {
  passwordLength = prompt('how long would you like your password? between 8-128 characters');

  if (passwordLength < 8 || passwordLength > 128) {
    alert('the password is outside constraints, requires between 8-128 characters') //promt instead of alert
    inquireUser ()
  } else {confirmConditions()
  }
}

function confirmConditions () { 
  while (confirmed === false){
    lowercase = confirm('would you like to include lowercase letters?')
    uppercase = confirm('would you like to include uppercase letters?')
    numbers = confirm('would you like to include numbers?')
    special = confirm('would you like to include special characters?')
    
    if (lowercase === true || uppercase === true || numeric === true || special === true) {
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

function generatePassword () {
  if (lowercaseLetters) concat 
  if (uppercaseLetters) concat
  if (numbers) concat
  if (special) concat

  const password = []
  for (let i=0; i < passwordLength; i++) {
  const character = mergedArray[Math.floor(Math.random() * mergedArray.length)]
  password.push(character)
  password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
  return password  --- join
  }
}
