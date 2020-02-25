const inquirer = require("inquirer");
//   * Create a random number between 1 and 100. Call it the hidden number
const hiddenNumber = Math.floor(Math.random() * 101) + 1;
// printing from 1 to 5

const promptUser = message => {
  return inquirer
    .prompt([
      {
        type: "number",
        message,
        name: "guess"
      }
    ])
    .then(answer => {
      if (isNaN(answer.guess)) {
        return;
      }
      if (answer.guess === hiddenNumber) {
        console.log("Yay! You're rigth! The right number is", hiddenNumber);
        return;
      } else {
        answer.guess > hiddenNumber
          ? promptUser("Try again! Go for a lower number!")
          : promptUser("Try again! Go for a higher number!");
      }
    });
};

promptUser("Enter a number from 1 to 100. Hit enter to give up");
