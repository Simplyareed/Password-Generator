// Assignment code here
//Added function //
function generatePassword() {
  let lengthString = prompt("Enter the length of the password (between 8 and 128 characters):");
  let includeLowercase = confirm("Do you want to include lowercase?");

//Added Alerts w/strings for length//
  if(lengthString < 8 ) {
    alert("Password must be at least 8 digits long")
    return
  }
  if(lengthString > 128) {
    alert("Password must be no longer than 128 digits")
    return
  }
}


  //  // String lower_cases = "acbdefghijklmnopqrstuvwxyz";
  //   String upper_cases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //   String special_characters = "!@#$%^&*()_+{}[];':,.<>/?\";
  //   String Digits = "0123456789";//



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
