// Declared global variables
let input;
let randomNumber;
let randomCharacter;
let RandomUppercase;
let randomLowercase;

// declared arrays with characters, number and letters
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "=", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// made a empty array to not repeat myself and use a function to make this to uppercase
ABC = [];
let makeUpperCase = function (toUp) {
  return toUp.toUpperCase();
};
abc2 = abc.map(makeUpperCase);
//gives our button a function when we click on it
let $generateBtn = document.querySelector("#generate");
$generateBtn.addEventListener("click", function () {
  let password;
  password = generatePassword();
  document.getElementById("password").placeholder = password;
});
//declare let choices outside the function to make it accessible
let choices;
function generatePassword() {
  // Asks user to input how many characters
  input = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  // sets a alert if the users input is no validated.
  if (!input) {
    alert("Choose a NUMBER between 8 a 128!!!!!");
  } else if (input < 8 || input > 128) {
  //gives the user a chance to try again if the input was not validated.
    input = parseInt(prompt("Re enter your number\nYour number must be between 8 and 128"));

  } else {
    // if the input is valid, the user will choose the parameter for the password.
    randomNumber = confirm("Will you password contain numbers? press ok if yes, if not, press cancel");
    randomCharacter = confirm("Will you password contain special characters? press ok if yes, if not, press cancel");
    RandomUppercase = confirm("Will you password contain Uppercase letters? press ok if yes, if not, press cancel");
    randomLowercase = confirm("Will you password contain Lowercase letters? press ok if yes, if not, press cancel");
  }

  // if nothing was validated it will give you a chance to try again, and reset the function. it will also change the
  // text inside the text area to "try again".
  if (!randomCharacter && !randomNumber && !RandomUppercase && !randomLowercase) {
    choices = confirm(`Try Again!`);
    if (choices === true){
      return generatePassword();
    } else  if (choices === false){
      return input = "Try again";
    }
  }
  //it will give a password with all the parameters
  else if (randomCharacter && randomNumber && RandomUppercase && randomLowercase) {

    choices = character.concat(number, abc, abc2);
  }
  // it will give a password with only 3 parameters
  else if (randomCharacter && randomNumber && RandomUppercase) {
    choices = character.concat(number, abc2);
  }
  else if (randomCharacter && randomNumber && randomLowercase) {
    choices = character.concat(number, abc);
  }
  else if (randomCharacter && randomLowercase && RandomUppercase) {
    choices = character.concat(abc, abc2);
  }
  else if (randomNumber && randomLowercase && RandomUppercase) {
    choices = number.concat(abc, abc2);
  }
  // it will give a password with only 2 parameters
  else if (randomCharacter && randomNumber) {
    choices = character.concat(number);

  } else if (randomCharacter && randomLowercase) {
    choices = character.concat(abc);

  } else if (randomCharacter && RandomUppercase) {
    choices = character.concat(abc2);
  }
  else if (randomLowercase && randomNumber) {
    choices = abc.concat(number);

  } else if (randomLowercase && RandomUppercase) {
    choices = abc.concat(abc2);

  } else if (randomNumber && RandomUppercase) {
    choices = number.concat(abc2);
  }
  // it will give a password with only 1 parameters
  else if (randomCharacter) {
    choices = character;
  }
  else if (randomNumber) {
    choices = number;
  }
  else if (randomLowercase) {
    choices = abc;
  }
  else if (RandomUppercase) {
    choices = ABC.concat(abc2);
  }

  // declare the variable with an array where out result will output with te amount of length in choices
  let password = [];

//will make a random selection with the parameters that the user choose.
  for (let i = 0; i < input; i++) {
    let pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }
  // makes the array in to a string
  let arrayToString = password.join("");
  UserInput(arrayToString);
  return arrayToString;
}
//change the text content of my text box into the result of what the user selected before.
function UserInput(password) {
  document.getElementById("password").textContent = password;

}
