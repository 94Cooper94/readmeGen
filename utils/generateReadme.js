function generateReadme(data) {
const avatar = `https://github.com/${data.username}.png?size=50`;
const gitHub = `https://img.shields.io/badge/Github-${data.username}-4cbbb9`;

return `
# ${data.title}

## Table of Contents
- [Description](#description)
- [Installation](#packages)
- [Tests](#tests)
- [License](#license)
- [Contributors](#contributors)

## Description
  ${data.description}

## Installation
Required packages: ${data.packages}
  
## Tests
To test, run the following command: ${data.test}

## License
${data.license}

## Technology
${data.tech}

## Contributors
${data.contributer}

## Contact
\n![Badge](${gitHub})![Profile Image](${avatar})
\nView the project live thanks to GitHub Pages: ${data.url}
\nIf you have any questions, contact the author directly at ${data.email}.`;
}

module.exports = generateReadme