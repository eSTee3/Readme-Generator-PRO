# Readme-Generator-PRO

## Description
This application will automatically generate a customized professional-grade readme file, based on the information that the end user provides.

# Table of Contents
- [Description](#description)
- [Prerequisites](#prerequisites)
- [Installation and Usage](#installation-and-usage)
- [Video Demo](#application-demo-video)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)

# Prerequisites
- Version 16.x.x installation of Node.js: [HERE](https://nodejs.org/en/download/releases/)
    - Search for "16" and then download/install the most recent iteration
- Visual Studio application:  [HERE](https://visualstudio.microsoft.com/)

# Installation and Usage
1. Download the entire contents of this repo (as a .zip)
2. Extract the contents of the zip file to your preferred location
3. Navigate into the folder that contains the "index.js" file, within the file you unzipped
4. Right-click within that folder and choose "Open with Code"
5. Once the Visual Studio application opens, launch a terminal within it (Windows: Ctrl+Shift+`)
6. Type `npm i inquirer@8.2.4` into the terminal and hit ENTER to complete the installation requirements
7. In the same terminal, type `node index.js` and hit ENTER to kick of the application
8. Answer all questions as they relate to the project that you require a README.md file for
9. Once the confirmation message is given, find the file that it created for you and place it into the root directory of your project
10. ENJOY!

# Application Demo Video
[![Demonstration Video](https://img.youtube.com/vi/YAtJMhx-mFU/0.jpg)](https://www.youtube.com/watch?v=YAtJMhx-mFU)

# User Story
**_AS A_** developer
**_I WANT_** a README generator
**_SO THAT_** I can quickly create a professional README for a new project

# Acceptance Criteria
GIVEN a command-line application that accepts user input
- WHEN I am prompted for information about my application repository
    - THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
- WHEN I enter my project title
    - THEN this is displayed as the title of the README
- WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
    - THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
- WHEN I choose a license for my application from a list of options
    - THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
- WHEN I enter my GitHub username
    - THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
- WHEN I enter my email address
    - THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
- WHEN I click on the links in the Table of Contents
    - THEN I am taken to the corresponding section of the README