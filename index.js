#! /usr/bin/env node
import inquirer from "inquirer";
let guessedNumber = Math.floor(Math.random() * 10 + 1);
let userAnswer = await inquirer.prompt([
    {
        message: "Please guess your Number",
        type: "number",
        name: "userguessednumber",
    },
]);
if (userAnswer.userguessednumber === guessedNumber) {
    console.log("Congratulations !!! You Have Entered Correct Number");
}
else {
    console.log("your Entered number is incorrect");
}
