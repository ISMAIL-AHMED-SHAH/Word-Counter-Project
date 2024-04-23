#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.cyanBright("\n\tWelcome to Shahi's Word Counter"));

console.log("=".repeat(50));

let ans = await inquirer.prompt(
    [
        {
            name: "sentence",
            type: "input",
            message: chalk.blue("Enter a Sentence: ")
        }
    ]
);
// Triming the sentence and splitting it into words based on "spaces"

let words = ans.sentence.trim().split(" ");

// analize of user input

console.log("=".repeat(50));
console.log(chalk.bold.magenta("- Sentence words: "));
console.log(words);

console.log(chalk.bold.blue(`\n - Word Count: ${chalk.bold.red(words.length)}`));
console.log("=".repeat(50));











