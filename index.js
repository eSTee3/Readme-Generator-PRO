const fs = require("fs");
const inquirer = require("inquirer");

inquirer
    .prompt([
    {
        type: "input",
        message: "I will ask you a series of questions that will allow me to auto-generate a README.md file that is customized for your project.\n\nNOTE: The ENTER key will immediately submit your answers or entries.\n\nPlease hit the ENTER key to begin",
        name: "confirmStart",
    },
    {
        type: "input",
        message: "Please enter your project's name:",
        name: "name",
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
        type: 'list',
        message: 'Please use up/down arrow keys to choose an appropriate license:',
        name: 'license',
        choices: ["Apache 2.0","GNU General Public v3.0","MIT ","BSD 2-Clause","BSD 3-Clause","Boost Software 1.0","Creative Commons Zero v1.0 Universal","Eclipse Public 2.0","GNU Affero General Public v3.0","GNU General Public v2.0","GNU Lesser General Public v2.1","Mozilla Public 2.0","The Unlicense"],
      },
    ])
    .then((data) => {
    
const filename = `${data.name.toLowerCase().replace(/\s/g, '')}_README.md`;
    fs.writeFile(filename, `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./assets/style.css">
        <title>Document</title>

    </head>
    <body>
        <h1 class="header">${data.name}</h1>
            <p>${data.bio}</p>
        <ul>
            <li>Location: ${data.location}</li>
            <li>LinkedIn: <a href="${data.linkedIn}">${data.linkedIn}</a></li>
            <li>My GitHub Profile: <a href="https://www.github.com/${data.gitHub}">${data.gitHub}</a></li>
        </ul>
    </body>
    </html>`
        , (err) => {
        err ? console.log(err) : console.log(
            "Thank you!  Your auto-generated readme file ("+`${data.name.toLowerCase().replace(/\s/g, '')}_README.md`+") has been created.  Please feel free to rename the file and place it into the root of your project's repository:"
            );
    });
});
