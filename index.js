const fs = require("fs");
const inquirer = require("inquirer");

inquirer
    .prompt([
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
