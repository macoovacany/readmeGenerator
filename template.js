const licenseRef = require('./licensesReference.js')


const readme = (answers) =>{

return `
# ${answers.title}
${licenseRef[answers.license].badgeURL}

## Description
${answers.description}

## Table of Contents
1. [Description](#description)
2. [Dependencies](#dependencies)
3. [Installation](#installation)
4. [Usage](#Usage)
5. [Contributing](#contributing)
6. [Testing](#testing)
7. [License](#License)
8. [Contact](#Contact)s

## Dependencies
${answers.dependencies}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}

## Contributing
${answers.contributing}

## Testing
${answers.testing}

## Questions
Created by ${answers.githubUserName}, contact me directly ${answers.email} with any questions.

`;
};

module.exports = readme;
