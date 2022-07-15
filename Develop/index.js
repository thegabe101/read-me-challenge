// TODO: Include packages needed for this application
// Packages required are inquirer for sure, fs for sure, not sure what else yet 
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// Const function that creates the question arrays 
const generateTheMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
// These are the questions to be generated
const questions = [{
    name: 'Title',
    type: "Input",
    question: 
}, {
    name: 'Description',
    type:
    question: 
}, {
    name: 'Table of Contents',
    type: "Input",
    question: 
}, {
    name: 'Installation',
    type: "Input",
    question: 
}, {
    name: 'Usage',
    type: "Input",
    question: 
}, {
    name: 'Screenshots',
    type: "Input",
    question: 
}, {
    name: 'Credits',
    type: "Input",
    question: 
}, {
    name: 'License',
    type: "Input",
    question: 
}, {
    name: 'Badges',
    type: "Input",
    question: 
}, {
    name: 'Features',
    type: "Input",
    question: 
}, {
    name: 'How to Contribute',
    type: "Input",
    question: 
}, {
    name: 'Tests',
    type: "Input",
    question: 
},
];

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
// This function is called at the end of the script to render the questions via inquirer and calls write and data functions
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generateTheMarkdown(data));
        })
}

// Function call to initialize app
init();
