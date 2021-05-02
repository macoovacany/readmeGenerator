const inquirer = require('inquirer');
const fs = require('fs');

const questions = require('./questions.js');
const makeReadme = require('./template.js');
const  logSuccess =  console.log;

inquirer
  .prompt(questions)
  .then((answers) => {
    const readme = makeReadme(answers);

    fs.writeFile('README.md', readme, (err) =>
      err ? console.log(err) : logSuccess('Successfully created readme!')
    );
  });
