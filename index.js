// Variables assignment
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");

// Array of questions for user
const questions = [
    // Name of Repository
    {
        type: 'input',
        name: 'repository',
        message: 'What is the name of your repository?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter your project title.' }
        },
    },
    // Name of Repository
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your repository?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter your project title.' }
        },
    },
]
