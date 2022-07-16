// TODO: Include packages needed for this application
// Packages required are inquirer for sure, fs for sure, not sure what else yet 
const inquirer = require('inquirer');
const fs = require('fs');
// const util = require('util');

// Const function that creates the question arrays 
const generateTheMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
// These are the questions to be generated
//Originally listed "message" as "question" before realizing that the message key was required for the inquirer prompt
//Not sure whether to make array first or to make it inquirer.prompt method 

// inquirer.prompt {[
const questions = [{
    name: 'Title',
    type: "Input",
    message: 'What is the title of your project?'
}, {
    name: 'Description',
    type: "Input",
    message: 
}, {
    name: 'Table of Contents',
    type: "Input",
    message: 
}, {
    name: 'Installation',
    type: "Input",
    message: 
}, {
    name: 'Usage',
    type: "Input",
    message: 
}, {
    name: 'Screenshots',
    type: "Input",
    message: 
}, {
    name: 'Credits',
    type: "Input",
    message: 
}, {
    name: 'License',
    type: "Input",
    message: 
}, {
    name: 'Badges',
    type: "Input",
    message: 
}, {
    name: 'Features',
    type: "Input",
    message: 
}, {
    name: 'How to Contribute',
    type: "Input",
    message: 
}, {
    name: 'Tests',
    type: "Input",
    message: 
},
];
// ]};

// TODO: Create a function to write README file
// This is just the simple function that actually writes the file, note that fs is within the write TO file function and is not the actual function itself 
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err){
    if (err) {
        return console.log(err)
    } else {
        console.log('file generated')
    }
    })

}

// TODO: Create a function to initialize app
// This function is called at the end of the script to render the messages via inquirer and calls write and data functions
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generateTheMarkdown(data));
        })
}

// Function call to initialize app
init();
