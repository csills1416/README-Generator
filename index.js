// This will be where the README Generator javascript will be.

const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user 



const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"

        },
        {
            type: "input",
            name: "description",
            message: "What is the description of your project?"
            },
            {
                type: "input",
                name: "installation",
                message: "What are the steps required to install your project?"
                },
                {
                    type: "input",
                    name: "usage",
                    message: "What are the steps required to use your project?"
                    },
                    {
                        type: "input",
                        name: "contribution",
                        message: "What are the steps required to contribute to your project?"
                        },
                        {
                            type: "input",
                            name: "test",
                            message: "What are the steps required to test your project?"
                            },
                            {
                                type: "list",
                                name: "license",
                                message: "Which license would you like to use?",
                                choices: [
                                    "Apache",
                                    "GNU",
                                    "ISC",
                                    "MIT",
                                    "Mozilla",]
                            }
                            {
                                type: "input",
                                name: "email",
                                message: "What is your email address?"
                              }
];

// function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });
}