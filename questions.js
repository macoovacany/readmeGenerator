const licenseData = require('./licensesReference.js');



questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project:',
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'What is required to be installed for your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install the project?',
    },
    {
        type: 'input',
        name: 'useage',
        message: 'How is this project going to be used?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can someone contribute to this project?',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'How is this project tested?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license is your project using?',
        choices: Object.keys(licenseData)
    },
    {
        type: 'input',
        name: 'githubUserName',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
]



module.exports = questions;
