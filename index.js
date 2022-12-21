const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "Where are you located?",
      name: "location",
    },
    {
      type: "input",
      message: "Tell me a few things about yourself:",
      name: "bio",
    },
    {
        type: "input",
        message: "Please provide your LinkedIn URL:",
        name: "linkedIn",
      },
      {
        type: "input",
        message: "Please provide your GitHub name:",
        name: "gitHub",
      },
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().replace(/\s/g, '')}.html`;
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
      err ? console.log(err) : console.log("Completed writing to file");
    });
  });
