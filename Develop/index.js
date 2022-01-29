// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a description of the project'
    },
    {
       type: 'list',
       name: 'table of content',
       message: ['Language', 'Installation', 'Usage', 'Contrib', 'License']
    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
        type: ' input',
        name: 'installation',
        message: 'What is the installation process?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of this project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for this project:',
        choice: ['Apache', 'Boost', 'GNU', 'IBM', 'MIT', 'Mozilla', 'Open Database', 'None']
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'What are the guidelins for contribution to this project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'what are the test instructions?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'what is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email addess?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
