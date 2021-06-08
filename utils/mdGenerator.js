// FUNCTION
// ---------------------------------------------------------------------------

// Function to generate markdown for READ-ME
function mdGenerator(answer){
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

## License
![badge](https://img.shields.io/badge/license-${answer.license}-yellow)
<br />
Licensed under the ${answer.license} license. 
    `
}
module.exports = mdGenerator;