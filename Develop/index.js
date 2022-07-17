// TODO: Include packages needed for this application
// Packages required are inquirer for sure, fs for sure, not sure what else yet 
//need to require utils in order to interact with generatemarkdown.js
const inquirer = require('inquirer');
const fs = require('fs');
//const function that creates the question arrays
const generateMarkdown = require('./utils/generateMarkdown.js');

// Const function that creates the question arrays 
// TODO: Create an array of questions for user input
// These are the questions to be generated
//Originally listed "message" as "question" before realizing that the message key was required for the inquirer prompt
//Not sure whether to make array first or to make it inquirer.prompt method 




//building question array to be exported here
//originally wrote name then type then message for these but that is actually confusing. better to start with overall type first before specificying id so need to change it. 
const questions = [
    {
    type: "Input",
    name: 'Title',
    message: 'What is the title of your project?',
    validate: titleEntered => {
        if (titleEntered) {
            return true;
        } else {
            console.log("Please choose a title for your project.")
            return false;
        }
    }
}, {
    type: "Input",
    name: 'License',
    message: "What license does your project use?",
    choices: ['None', 'Apache 2.0', 'MIT', 'Github'],
    validate: licenseEntered => {
        if (licenseEntered) {
            return true;
        } else {
            console.log('You must choose one of the four options for your license. Please note you can select none if no license is applicable.')
            return false;
        }
    }
}, {
    type: "Input",
    name: 'Description',
    message: "How would you describe your project?",
    validate: descriptionEntered => {
        if (descriptionEntered) {
            return true;
        } else {
            console.log("Please provide a description for your project.")
            return false;
        }
    }
}, {
    type: "Input",
    name: 'Installation',
    message: "Are there any special steps required to install your project?",
    validate: installationEntered => {
        if (installationEntered) {
            return true;
        } else {
            console.log("If no special steps are required to install your project, please enter 'none'.")
            return false;
        }
    }
}, {
    type: "Input",
    name: 'Usage',
    message: "How does a user use the project you have built?",
    validate: usageEntered => {
        if (usageEntered) {
            return true;
        } else {
            console.log("Please describe userflow of your project.")
            return false;
        }
    }
}, {
    type: "Input",
    name: 'Screenshots',
    message: "Will you provide screenshots in your readme?",
    validate: screenshotsEntered => {
        if (screenshotsEntered) {
            return true;
        } else {
            console.log("Please state whether or not you will be providing screenshots of your project.")
            return false;
        }
    }
}, {
    type: "Input",
    name: 'Credits',
    message: "Are there any credits you'd like to record in the making of your project?",
    validate: creditsEntered => {
        if (creditsEntered) {
            return true;
        } else {
            console.log("Please enter credits for your project. If none are necessary, please enter 'none.'")
            return false;
        }
    }
}, {
    type: "Input",
    name: 'Features',
    message: "Are there any features of your project you'd like to describe?",
    validate: featuresEntered => {
        if (featuresEntered) {
            return true;
        } else {
            console.log("Please list the major features of your project.")
            return false;
        }
    }
}, {
    type: "Input",
    name: 'Contribute',
    message: "Is there a way for people to contribute to your project's future development?",
    validate: contributeEntered => {
        if (contributeEntered) {
            return true;
        } else {
            console.log("Please list any ways to contribute to your project. You may enter 'N/A' if contributions are not invited.")
            return false;
        }
    }
}, {
    type: "Input",
    name: 'Tests',
    message: "Have you run any tests on your project?",
    validate: testsEntered => {
        if (testsEntered) {
            return true;
        } else {
            console.log("Please enter yes or no. If yes, please provide the user information on what sort of tests you have run.")
            return false;
        }
    }
},
];


//added validation for all questions except license (which still needs a choices property). this just ensures that there is an input and, if not, re-prompts the user.
//would like to add property to detect lack of user input. either force input or move on but how is empty field rendered? need to google. 

// console.log(questions)
//with questions recorded the process is now focused on how we will be writing that file. however before i check the function i wrote earlier i should check what is happening in the terminal. 


//OK, sweet- inquirer is successfully prompting the user for question inputs upon running the node. 

// TODO: Create a function to write README file
// This is just the simple function that actually writes the file, note that fs is within the write TO file function and is not the actual function itself 


function writeToFile(fileName, answers) {

    fs.writeFile(fileName, answers, function(err) {
        console.log(fileName, answers)
    if (err) {
        return console.log(err)
    } else {
        console.log('file generated')
    }
    })

}



// TODO: Create a function to initialize app
// This function is called at the end of the script to render the messages via inquirer and calls write and answers functions
function init() {
    inquirer.prompt(questions)
        .then(function(answers) {
            console.log(answers)
            writeToFile("myGeneratedReadMe.md", generateMarkdown(answers));
        })
}

// Function call to initialize app
//this page is working for now, unsure what else to do without moving on to the other one
module.exports = questions;

init();


