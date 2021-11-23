const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Welcome to the password validator. Please enter your password!", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);
  var userPassword = tokens[0]
  var upperCase = ('A')
  var lowerCase = ('a')
  var specialParam = ('!,@,#,$,*,')

  if (userPassword === (upperCase)){
    console.log("Your password must contain at least 1 lower case letter! Please try again");
} else {
  console.log("Your password meets the lower case requirements!");
}
//refer to notes below
if (userPassword === (lowerCase)){
  console.log("Your password must contain at least 1 capitol letter! Please try again");
} else {
  console.log("Your password meets the capitol letter requirement!")
}
// I keep running into this problem where when I tell my code to look for something exaclty its not working as expected. (refering to ===)
//I have searched the internet and ever resource I can find on this and I cant find a answer.
//I would like more help understanding what I am doing run with this specific part of this

if (userPassword.length <= 9){
  console.log("Your password must be at least 10 characters long! Please try again");
} else {
  console.log("Your password meets the character length requirement!");
}
//Tested and working
if (userPassword === (specialParam)) {
  console.log("Your password must contain a special character! Please try again");
} else {
  console.log("Your password meets the special character requirement!");
}
// at this point I can only get the code to work one I have one capitol letter, when I add an additional one it stops working.
//spent hours on this, wanted to attempt the ascII art but havent had the chance



	// This line closes the connection to the command line interface.
	reader.close()

});