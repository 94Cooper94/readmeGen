const fs = require("fs");
const inquirer = require("inquirer");

function readmePrompts() {
    return inquirer.prompt([
        {
        type: "input",
        message: "GitHub username:",
        name: "username"
        },
        {
        type: "input",
        message: "Email address:",
        name: "email"
        },
        {
        type: "input",
        message: "(Live) Project URL:",
        name: "url"
        },
        {
        type: "input",
        message: "Project title:",
        name: "title"
        },
        {
        type: "input",
        message: "Provide a brief description (2-3 sentences):",
        name: "description"
        },        
        {
        type: "input",
        message: "Provide example(s) of your project in use:",
        name: "example"
        },
        {
        type: "input",
        message: "What package installation does your project require:",
        name: "packages"
        },
        {
        type: "input",
        message: "List the technologies used:",
        name: "tech"
        },
        {
        type: "input",
        message: "List each `contributor - contibution;`:",
        name: "contributer"
        },
        {
        type: "list",
        message: "Which licensing do you prefer?:",
        choices: ["MIT", "APACHE 2.0", "GPL v3", "BSD 3", "None"],
        name: "license"
        },
        {
        type: "input",
        message: "What command(s) is(are) required to run a test",
        name: "test",
        }
    ]);
}


function generateReadme(answers) {
    const avatar = `https://github.com/${data.username}.png?size=50`;
    const gitHub = `https://img.shields.io/badge/Github-${data.username}-4cbbb9`;

    return `
    # ${data.title} 
    
    ## Description
      ${data.description}
  
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Tests](#tests)
    - [Contributors](#contributors)
    - [Details](#details)
      
    ## Usage
    Examples of how to use this program: ${data.usage}

    ## Installation
    Packages required to run this program are: ${data.packages}
      
    ## Tests
    To test, run the following command: ${data.test}
  
    ## License
    ${data.license}

    ## Contributors
    ${data.contributer}
  
    ## Contact
    \n![Badge](${gitHub}) 
    \n![Profile Image](${avatar})
    \nView the project live thanks to GitHub Pages: ${data.url}
    \nIf you have any questions, contact the author directly at ${data.email}.`;
}


function writeFile(fileName, data) {
    fs.writeFile(fileName, data, "utf8", function (err) {
        if (err) {
            throw err;
          }
          console.log("You have successfully written your README file");
    });
};


async function getMovie() {
    try {
      const { movie } = await inquirer.prompt({
        message: "Search a movie:",
        name: "movie"
      });
    } catch (err) {
    console.log(err);
    }
}   