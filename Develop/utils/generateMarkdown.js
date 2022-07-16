// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//TODO: figure out what the heck these functions want to do 
//TODO: these functions will be called within the generateMarkdown function
//TODO: determine exactly what gen mark down function WANTS to do
//the gen markdown function will be required by the index and used there to fill and render the readme with the writefile function


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

`;
}

module.exports = generateMarkdown;
