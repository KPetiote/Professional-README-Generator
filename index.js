// DEPENDENCIES
// ---------------------------------------------------------------------------

const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const emailValidator = require('email-validator');
const mdGenerator = require('./utils/mdGenerator');

// ARRAY OF QUESTIONS
// ---------------------------------------------------------------------------

const questions = [
    // Github Username
    {
        type: 'input',
        name: 'github',
        message: 'What is the name of your Github username?',
        validate: (value) => {
            if (value) { 
                return true 
            } else { 
                return 'Please enter your Github username.' }
        },
    },
    // Email Address
    {
        type: 'input',
        name: 'email',
        message: 'What is your preferred email address?',
        validate: (value) => {
            if (emailValidator.validate(value)) {
                return true
            } else { 
                return 'Please enter a valid email address' }
        },
    },
    // Name of Repository
    {
        type: 'input',
        name: 'repository',
        message: 'What is the name of your repository?',
        validate: (value) => {
            if (value) { 
                return true 
            } else { 
                return 'Please enter your repository name.' }
        },
    },
    // Title of Project
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: (value) => {
            if (value) { 
                return true 
            } else { 
                return 'Please enter your project title.' }
        },
    },
    // Description of Project
    {
        type: 'input',
        name: 'description',
        message: 'Please write the description of your project.',
        validate: (value) => {
            if (value) { 
                return true 
            } else { 
                return 'Please enter your project description.' }
        },
    },
    // Project Installation
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter instructions to install the program:',
        validate: (value) => {
            if (value) { 
                return true 
            } else { 
                return 'Please enter instructions to install the program.' }
        },
    },
    // Project Usage
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information of this project?',
        validate: (value) => {
            if (value) { 
                return true 
            } else { 
                return 'Please enter project usage information.' }
        },
    },
    // Technologies
    {
        type: 'checkbox',
        name: 'technologies',
        message: 'Please select the technologies that were used in this project:',
        choices:['Angular.js','Backbone.js','Bootstrap','CSS','Django','Ember.js',"Foundation",'HTML','Go','Java','Javascript','JQuery','MongoDb','MySQL','Node.js','PHP','Python','Ruby','Underscore'],
        validate: (value) => {
            if (value) { 
                return true 
            } else { 
                return 'Please enter project usage information.' }
        },
    }
    // Project Licenses
    {
        type: 'list',
        name: 'license',
        message: 'Please select the licenses for your project?',
        choices: ['Apache License 2.0','Boost Software License 1.0','GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'MIT License','Mozilla Public License 2.0'],
        validate: (value) => {
            if (value) { 
                return true 
            } else { 
                return 'Please choose a license.' }
        },
    },
    // Contributions
    {
        type: 'input',
        name: 'contribution',
        message: 'Did you have anyone contribute to your project?',
        validate: (value) => {
            if (value) { 
                return true 
            } else { 
                return 'Please enter any contributors to the project.' }
        },
    },
]

// FUNCTIONS
// ---------------------------------------------------------------------------

// Function to write the READ-ME file.
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('READ-ME file was successfully generated!');
        }
    })
};

// Function to initialize program.
function init() {
    inquirer.prompt(questions).then(function (answer) {
        writeToFile("READ-ME.md", mdGenerator(answer));
    })
};

// Function call to initialize program.
init();