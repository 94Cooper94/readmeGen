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


async function getAnswers() {
  try {
    const answers = await readmePrompts();
    generateReadme(answers);
    writeToFile("README.md", generateReadme(answers));

  } catch (err) {
  console.log(err);
  }
};

getAnswers();