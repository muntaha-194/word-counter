import inquirer from "inquirer";
import chalk from "chalk";
// printing message
console.log(chalk.bold.cyanBright("\n\t\t\tWELCOME TO MUNTAHA'S WORD CONVERTOR"));
console.log("=".repeat(90));
// asking the user to enter a sentence
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "\nENTER A SENTENCE HERE:"
    }
]);
// triming the sentence and spliting it into sentence based on spaces
let words = answer.sentence.trim().split(" ");
// analysis of user's input sentence
console.log("=".repeat(90));
console.log(chalk.bold("\n- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - word Count: ${chalk.green(words.length)}`));
console.log("=".repeat(90));
