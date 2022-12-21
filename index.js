const fs = require("fs");
const inquirer = require("inquirer");

inquirer
    .prompt([
    {
        // Decided to add a pre-question prompt, explaining the process to the user
        type: "input",
        message: "I will ask you a series of questions that will allow me to auto-generate a README.md file that is customized for your project.\n\nNOTE: The ENTER key will immediately submit your answers or entries.\n\nPlease hit the ENTER key to begin",
        name: "confirmStart",
    },
    {
        type: "input",
        message: "Please enter the name of your project:",
        name: "name",
    },
    {
        type: "input",
        message: "Please enter your GitHub name:",
        name: "gitHub",
    },
    {
        type: "input",
        message: "Please enter an email address that contributors can contact you with:",
        name: "email",
    },
    {
        type: "input",
        message: "Please provide a detailed description of your project:",
        name: "description",
    },
    {
        type: "input",
        message: "Please provide instructions for installation of your project:",
        name: "installation",
    },
    {
        type: "input",
        message: "Please explain the usage for your project:",
        name: "usage",
      },
      {
        type: "input",
        message: "Please provide guidelines for future contributions:",
        name: "contribute",
      },
      {
        type: "input",
        message: "Please provide testing instructions for your project:",
        name: "testing",
      },
      {
        // This is a list of all GitHub licenses that are in the drop-down at time of new project creation
        type: 'list',
        message: 'Please use up/down arrow keys to choose an appropriate license:',
        name: 'license',
        choices: ["GNU AGPLv3",
        "GNU GPLv3","GNU LGPLv3",
        "Mozilla Public License 2.0",
        "Apache License 2.0",
        "MIT License",
        "Boost Software License 1.0",
        "The Unlicense"],
      }
    ])
    .then((data) => {
    
// This will create a ".md" file with the user's project name as its name
const filename = `${data.name.toLowerCase().replace(/\s/g, '')}.md`;

    // This populates the entirety of the readme file
    fs.writeFile(filename,`
# ${data.name}
![badge](https://img.shields.io/badge/License-${data.license.replace(/\s/g, '')}-blue)

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [License](#License)
- [Questions](#Questions)

# Description
${data.description}

# Installation
${data.description}

# Usage
${data.description}

# Contributing
${data.contribute}

# Tests
${data.testing}

# License
You can find the ${data.license} license details as well as all others [HERE](https://choosealicense.com/licenses/)

# Questions
- My GitHub Profile: [${data.gitHub}](https://www.github.com/${data.gitHub})
- Please email me at ${data.email} with any additional questions
`
    
        // This will message the user, stating that the file creation is completed, as well as the name of the resulting file.
        , (err) => {
        err ? console.log(err) : console.log(
            "\nThank you!\n\nYour auto-generated readme file ("+`${data.name.toLowerCase().replace(/\s/g, '')}.md`+") has been created.  Please add it to the root of "+`${data.name}`+"'s repository."
            );
    });
});
