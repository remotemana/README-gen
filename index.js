const inquirer = require("inquirer");
const fs = require("fs");

inquirer
.prompt([
    {
        type:'input', 
        name: 'projectTitle',
        message: 'What is your Project Title?',
    },
    {
        type:'input', 
        name: 'description',
        message: 'Give a detailed description of your project',
    },
    {
        type:'input', 
        name: 'installation',
        message: 'Describe in detail how to install',
    },
    {
        type:'input', 
        name: 'usage',
        message: 'Describe in detail your project usage',
    },
    {
        type:'checkbox', 
        name: 'license',
        message: 'Choose your preferred license',
        choices: ["APM", "AUR", "Bower", "Cocoapods", "Conda", "CPAN", "CRAN/METACRAN", "Crates.io", "CTAN", "DUB", "Eclipse Marketplace", "GitHub", "Hex.pm", "NPM", "Ore", "Packagist", "PyPi", "REUSE Compliance", "Weblate Component", "MIT" ]
    },
    {
        type:'input', 
        name: 'contributors',
        message: 'Please List your project contributors',
    },
    {
        type:'input', 
        name: 'tests',
        message: 'What kind of tests have been used?',
    },
    {
        type:'input', 
        name: 'email',
        message: 'Please enter your Email',
    },
    {
        type:'input', 
        name: 'gitHub',
        message: 'Please enter your Github Username',
    },

]).then (function ({projectTitle, description, installation, usage, license, contributors, tests, email, gitHub}) {
let generateREADME = `
# ${projectTitle}

## Table of Contents
   1. [License](#license)
   2. [Project-Description](#description)
   3. [Installation-Guide](#installation-guide)
   4. [Project-Usage](#usage)
   5. [Project-Contributors](#contributors)
   6. [Project-Tests](#tests)
   7. [Questions?](#questions-contact-me-at)
--- 
## License
[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/MIT) 
---
## Description 
    ${description}
---
## Installation-Guide
    ${installation}
---
## Usage 
    ${usage} 
---
## Contributors
    ${contributors}
---
## Tests
    ${tests}
---
## Questions? Contact Me at...
${email} | [github.com](https://github.com/${gitHub})
`
console.log(generateREADME);

fs.writeFileSync(`./output/${projectTitle}.md`, generateREADME)
})
