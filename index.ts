import inquirer from "inquirer";

const answers = await inquirer.prompt([
    {
        type: "input",
        name: "Sentence",
        message: "Enter your sentence to count the words: "
    }
])

const words = answers.sentence.trim().split(" ");
console.log(`Your sentence word count is ${words.length}`);