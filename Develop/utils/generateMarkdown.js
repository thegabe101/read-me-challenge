// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//TODO: figure out what the heck these functions want to do 
//TODO: these functions will be called within the generateMarkdown function
//TODO: determine exactly what gen mark down function WANTS to do
//the gen markdown function will be required by the index and used there to fill and render the readme with the writefile function
//i know we're going to most likely need fs, inquirer, and the data from our index so i'll start there

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
      badge = ![License]('https://img.shields.io/badge/license-Apache2.0-blue')
    } else if (license === 'MIT') {
      badge = ![License]('https://img.shields.io/badge/license-MIT-blueviolet')
    } else if (license === 'Github') {
      badge = ![License]('https://img.shields.io/badge/license-github-success')
    } else {
      badge = ""
    }
};

//Would like to figure out how to render userinput github into license badge above (line 25)


//So, this section simply matches the above licenses with links to their respective pages. Can write this essentially the same way.
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
