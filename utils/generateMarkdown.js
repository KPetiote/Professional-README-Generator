// FUNCTION
// ---------------------------------------------------------------------------

// Function that returns a license badge based on which license is selected
// Return empty string if no license is selected
function renderLicenseBadge(license) {
    if (license === "apache-2.0") {
        return `[![apache-2.0](https://img.shields.io/badge/license-apache--2.0-green?style=plastic)]`
    }
    else if (license === 'BSD 3-Clause "New" or "Revised"'){
        return `[![BSD 3-Clause "New" or "Revised"](https://img.shields.io/badge/license-BSD%203--Clause%20%22New%22%20or%20%22Revised%22-green?style=plastic)]`
    }
    else if (license === 'GNU General Public License v3.0'){
        return `[![GNU General Public License v3.0](https://img.shields.io/badge/license-GNU%20General%20Public%20License%20v3.0-green?style=plastic)]`
    }
    else if (license === 'MIT'){
        return `[![MIT](https://img.shields.io/badge/license-MIT-green?style=plastic)]`
    }
    else {
        return ""
    }
};

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "apache-2.0") {
        return `(https://www.apache.org/licenses/LICENSE-2.0)`
    }
    else if (license === 'BSD 3-Clause "New" or "Revised"'){
        return `(https://choosealicense.com/licenses/bsd-3-clause/)`
    }
    else if (license === 'GNU General Public License v3.0'){
        return `(https://www.gnu.org/licenses/gpl-3.0.en.html)`
    }
    else if (license === 'MIT'){
        return `(https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)`
    }
    else {
        return ""
    }
};

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license) {
        return `## License`
    }
    else {
        return ""
    }
};

// Function to generate markdown for READ-ME
function generateMarkdown(answer){
    return `
# ${answer.title}

## Table of Contents
* [Top Language](#top-language)
* [Description](#description)
* [Demo](#demo)
* [Program Installation](#program-installation)
* [Program Usage](#program-usage)
* [Technologies](#technologies)
* [Links](#links)
* [Contribution](#contribution)
* [Questions](#questions)
* [License](#license)

## Top Language
![Top Language](https://img.shields.io/github/languages/top/${answer.github}/${answer.repository})

## Description
${answer.description}

## Demo
![Alt text](./assets/images/${answer.repository}-website.gif "${answer.repository}")

## Program Installation
${answer.installation}

## Program Usage
${answer.usage}

## Technologies
- ${answer.technologies}

## Links
[Github Repository URL](https://github.com/${answer.github}/${answer.repository})

## Contribution
${answer.contribution}

## Questions
Please feel free to contact me with any questions:
[Email](mailto:${answer.email})
[Github](https://github.com/${answer.github})

${renderLicenseSection(answer.license)}
    ${renderLicenseBadge(answer.license)}${renderLicenseLink(answer.license)}
    `
}
module.exports = generateMarkdown;