// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs =require('fs');
const { title } = require('process');
const filename = `NEWREADME.md`;

// TODO: Create an array of questions for user input
var questions = ['What is the Title?', 'Please provide a description','Please provide installation instructions', 'Please provide usage information', 'Please provide contribution guidelines', 'Please provide test instructions','What is your email address','What is your Github link', 'Which license would you like to include?'];
yessir = 'Hello'

// console.log(questions);
// TODO: Create a function to write README file

function writeToFile(data) {
    fs.writeFile(filename, data, (err) =>
      err ? console.log(err) : console.log(null)
    );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt([
  {
      type: 'input',
      name: 'title',
      message: questions[0],
  },
  {
    type: 'input',
    name: 'description',
    message: questions[1],
  },
  {
  type: 'input',
  name: 'installation',
  message: questions[2],
  },
  {
  type: 'input',
  name: 'usage',
  message: questions[3],
  },
  {
    type: 'input',
    name: 'contribution',
    message: questions[4],
  },
  {
  type: 'input',
  name: 'test',
  message: questions[5],
  },
  {
  type: 'input',
  name: 'email',
  message: questions[6],
  },
  {
  type: 'input',
  name: 'github',
  message: questions[7],
  },
  {
  type: 'checkbox',
  message: questions[8],
  name: 'license',
  choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
  },
  ])

  .then((data) => {
    console.log(data.title);

    var licenseSelection = '';
    if(data.license == 'MIT'){
      licenseBadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
    }
    else if(data.license == 'APACHE 2.0'){
      licenseBadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
    }
    else if(data.license == 'GPL 3.0'){
      licenseBadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
    }
    else if(data.license == 'BSD 3'){
      licenseBadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
    }
    else{
      licenseBadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
    }

    var skel = 
`${licenseBadge}
# ${data.title}
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
${data.contribution}
## Tests
${data.test}

## Questions
For any questions, please contact me at the email provided below:
Email:  ${data.email}
Github:  ${data.github}

## License
This README is under the following license:  ${data.license}


`
    writeToFile(skel);
  });
}

// Function call to initialize app
init();

// What kind of license should your project have?
// MIT
// APACHE 2.0
// GPL 3.0
// BSD 3
// None