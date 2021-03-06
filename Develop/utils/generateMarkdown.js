// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//TODO: figure out what the heck these functions want to do 
//TODO: these functions will be called within the generateMarkdown function
//TODO: determine exactly what gen mark down function WANTS to do
//the gen markdown function will be required by the index and used there to fill and render the readme with the writefile function
//i know we're going to most likely need fs, inquirer, and the answers from our index so i'll start there

const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index');

//have figured out that you can get these badges and licenses online. shield.io seems to be the place but still not sure.
// should be able to write if/else if/else statement to render badges and, if none exists, simply render an empty string so nothing appears
//i checked out different badges and am a bit confused on which ones we should use/ if it even matters. for now ill just try to see if the statement works. 
//i suppose just using apache, MIT, etc seems like the most logical choice since they are at the top of the list. 

function renderLicenseBadge(license) {
  let badge = "";
    if (license === 'Apache 2.0') {
      badge = `![Alt = badge](https://img.shields.io/badge/license-Apache2.0-blue)`
    } else if (license === 'MIT') {
      badge = `![Alt = badge](https://img.shields.io/badge/license-MIT-blueviolet)`
    } else if (license === 'Github') {
      badge = `![Alt = badge](https://img.shields.io/badge/license-github-success)`
    } else if (license === 'GPLv2') {
      badge = `![Alt = badge](https://img.shields.io/badge/license-GPLv2-yellowgreen)`
    } else if (license === 'Modzilla') {
      badge = `![Alt = badge](https://img.shields.io/badge/license-Modzilla-orange)`
    }
      else {
      badge = ""
    }
    return badge;
};

//return the badge out of the function at the end for export

//Would like to figure out how to render userinput github into license badge above (line 25)


//So, this section simply matches the above licenses with links to their respective pages. Can write this essentially the same way.
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//Unsure about the Github license link. MIT and Apache were easy to find. 
//having issues detecting license for print in match between gen and index.js. stricly equal should be correct and strings match. These functions should return the link, badge, and section to render the license bassed on matching choice in inquirer but something is not correct.
function renderLicenseLink(license) {
  let licenseLink = "";
    if (license === "Apache 2.0") {
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0";
    } else if (license === "MIT") {
      licenseLink = "https://choosealicense.com/licenses/mit/";
    } else if (license === "Github") {
      licenseLink = "https://docs.github.com/en/rest/licenses";
    } else if (license === "GPLv2") {
      licenseLink = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"
    } else if (license === "Modzilla") {
      licenseLink = "https://www.mozilla.org/en-US/MPL/"
    }
      else {
      licenseLink = "";
      }
    return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

//This will simply render what I drew above or nothing if the license does not exist.
function renderLicenseSection(license) {
  let licenseSection = "";
    if (license === 'None') {
      licenseSection = "";
    } else {
      licenseSection = `License: ${license}`
      //use backticks to render a string literal out of the license functions above
    }
    return licenseSection;
}

// TODO: Create a function to generate markdown for README
//can't log my badge or license, which means something is wrong above. 
function generateMarkdown(answers) {
  console.log(answers);
  
  
//this will return all the answers to be rendered. template string literal so needs to be written with precision 
//table of contents will include all elements to be rendered from user input in index.js
//license function call renders the result of rendering functions above with the answers.license set as a parameter from the question array in index.js


  return `
  # ${answers.title}

  ## ${renderLicenseSection(answers.license)} 
  ## ${renderLicenseBadge(answers.license)}
  ### ${renderLicenseLink(answers.license)}

  ## Table of Contents:

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Screenshots](#screenshots)
  - [Credits](#credits)
  - [Features](#features)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description
  ### ${answers.description}

  ## Installation 
  ### ${answers.installation}

  ## Usage
  ### ${answers.usage}

  ## Screenshots
  ### ${answers.screenshots}

  ## Credits
  ### ${answers.credits}

  ## Features
  ### ${answers.features}

  ## Contribute
  ### ${answers.contribute}

  ## Tests
  ### ${answers.tests}

  ## Questions
  ### Questions are invited! You may contact the developer of this project at:
  ### Email: ${answers.email}
  ### OR you can find the full repository of this project at my Github page:
  ### Github: ${answers.github}
`;
}


//Learned a major lesson here in specificity when retrieving data object:
//At first all of my properties were in lowercase- I realized that in my questions array I had begun all names uppercase. Oops. This was why things were coming back undefined. 
//Going to leave the uppercase for this assignment, but this is important to remember- really there was no reason to uppercase those names, just my inner English major coming out. 

module.exports = generateMarkdown;
