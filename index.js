// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
        validate: titleInput => {
            if (titleInput) {
                return true
            } else {
                console.log('Please provide title for your README.md.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a description of the project',
        validate: descriptionInput => {
            if (descriptionInput){
                return true 
            } else {
                console.log('Please provide a description for the project')
            }
        }
    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the installation process?',
        validate: installationInput => {
            if (installationInput){
                return true
            } else {
                console.log('Plese provide installations used')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of this project?',
        validate: usageInput => {
            if (usageInput){
                return true
            } else {
                console.log('Please enter the project usage')
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for this project:',
        choices: [
            "Apache",
            "Boost",
            "GNU",
            "IBM",
            "MIT",
            "Mozilla",
            "Open Database",
            "None"
        ]
    
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'What are the guidelines for contribution to this project?',
        validate: contributionsInput => {
            if (contributionsInput) {
                return true
            } else {
                console.log('Please enter contribution guidelines.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'what are the test instructions?',
        validate: testInput => {
            if (testInput){
                return true
            } else {
                console.log('Provide test intructions')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'username',
        message: 'what is your Github username?',
        validate: usernameInput => {
            if (usernameInput){
                return true;
            } else {
                console.log('Please provide a valid Github username.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: usernameInput => {
            if (usernameInput){
                return true;
            } else {
                console.log('Please provide a valid email address.')
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions)
    .then((res) => {
        writeToFile('README.md', generateMarkdown({...res}))
    })
    
}

// Function call to initialize app
init();
