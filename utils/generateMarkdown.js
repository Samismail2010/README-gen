// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
${data.description}

## Table of Contents
-[Description](#description)
-[Installation](#installation)
-[Language](#language)
-[Usage](#usage)
-[License](#license)
-[Contributions](#contributions)
-[Test](#test)
-[Questions](#questions)

## Installation
${data.installation}

## Language
${data.languages}

## Usage
${data.usage}

## License
${renderLicenseSection(data)}

## Contributions
${data.contributions}

## Test
${data.test}

## Questions
find me on Github: [${data.username}](https://github.com/${data.username})
Email me with any questions: [${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
