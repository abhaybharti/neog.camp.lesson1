import readLineSync from "readline-sync";
import chalk from "chalk";
// ReadLine Sync

// Synchronous ReadLine is for interactively running to have a conversation with the user via a console, even when the input/output
// stream is redirected like your-Script.js > foo.dat

// Simple
var userName = readLineSync.question("May I have your name : ");
console.log("Hi " + chalk.blue(userName) + "!");

//Handle Password or SecretText

var userPassword = readLineSync.question("Enter your password : ", {
  hideEchoBack: true,
});
console.log(userPassword);

//Get Response by a single key without the Enter key
if (readLineSync.keyInYN("Do you want this module")) {
  console.log("Installing module ...");
} else {
  console.log("Searching another ...");
}

//Choose from List
var animals = ["Tiger", "Dog"];
var index = readLineSync.keyInSelect(animals, "Which animal");
console.log(animals[index]);

//Handle the command repeatedly, like Shell interface
readLineSync.promptCLLoop({
  add: function (target, into) {
    console.log(target + " is added into " + into + ".");
  },
  remove: function (target) {
    console.log(target + " is removed");
  },
  bye: function () {
    return true;
  },
});
console.log("Exited");
