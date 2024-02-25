// Assignment code here
   let includeLowerCase = "acbdefghijklmnopqrstuvwxyz";
   let includeUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   let includeSpecialChar = "!@#$%^&*()_+{}[];':,.<>/?";
   let includeNumeric = "0123456789";
   
   


//Added function //
function generatePassword() {
  let includeLowerCase = confirm("Do you want to include lowercase?");
  let includeUpperCase = confirm("Do you want to include uppercase?");
  let includeNumeric = confirm("Do you want to include numerical numbers?");
  let includeSpecialChar = confirm("Do you want to include special characters?");
  let lengthString = prompt("Enter the length of the password (between 8 and 128 characters):");
  

//Added Alerts w/strings for length//
// Added booleans for alert statements 
  if(lengthString < 8) {
    alert("Password must be at least 8 digits long");
    return;
  }
  if(lengthString > 128) {
    alert("Password must be no longer than 128 digits");
    return;
  }
if (includeLowerCase || includeUpperCase ||includeNumeric ||includeSpecialChar) {
  alert("Password has succesfully been generated!");

} else {
  alert("Password must meet at least one requirement: Must include a lowercase, uppercase, numerical number, or special characters.");
}
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
console.log("THIS IS MY BUTTON" + generateBtn)

// Write password to the #password input
// Added console log to see where the variables were tied to
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
   alert('Generated Password: ' , password);
console.log("THIS IS MY PW" + password);
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
