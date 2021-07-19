const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Engineer = require("./classes/Engineer");
const Intern = require("./classes/Intern");
const Manager = require("./classes/Manager");
let managerCard = ``;
let internCard = ``;
let engineerCard = ``;

async function prompt() {
  const { userInput } = await inquirer.prompt([
    {
      type: "list",
      message: "Which type of team member would you like to add?",
      name: "userInput",
      choices: ["Engineer", "Intern", "Generate HTML!"],
    },
  ]);
  if (userInput === "Engineer") promptEngineer();
  else if (userInput === "Intern") promptIntern();
  else buildHtml();
}

async function promptEngineer() {
  const { name, id, email, github } = await inquirer.prompt([
    {
      type: "input",
      message: "What is your engineer's name",
      name: "name",
    },
    {
      type: "input",
      message: "What is your engineer's id",
      name: "id",
    },
    {
      type: "input",
      message: "What is your engineer's email",
      name: "email",
    },
    {
      type: "input",
      message: "What is your engineer's github",
      name: "github",
    },
  ]);
  const newEngineer = new Engineer(name, id, email, github);
  console.log(newEngineer);
  engineerCard +=
  `<div class="card" style="width: 18rem;">
<div class="card-header">
  ${newEngineer.getName()}
  <br>
  <i class="fa fa-laptop"></i> ${newEngineer.getRole()}
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${newEngineer.getId()}</li>
  <li class="list-group-item">Email: <a href="mailto:${newEngineer.getEmail()}">${newEngineer.getEmail()}</a></li>
  <li class="list-group-item">Github: <a href="https://www.github.com/${newEngineer.getGithub()}" target="_blank">${newEngineer.getGithub()}</a></li>
</ul>
</div>`;
  prompt();
}
async function promptIntern() {
  const { name, id, email, school } = await inquirer.prompt([
    {
      type: "input",
      message: "What is your intern's name:",
      name: "name",
    },
    {
      type: "input",
      message: "What is your intern's id:",
      name: "id",
    },
    {
      type: "input",
      message: "What is your intern's email:",
      name: "email",
    },
    {
      type: "input",
      message: "What is your intern's school:",
      name: "school",
    },
  ]);
  const newIntern = new Intern(name, id, email, school);
  console.log(newIntern);

  internCard +=
    `<div class="card" style="width: 18rem;">
  <div class="card-header">
    ${newIntern.getName()}
    <br>
    <i class="fa fa-mortar-board"></i> ${newIntern.getRole()}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${newIntern.getId()}</li>
    <li class="list-group-item">Email:<a href="mailto:${newIntern.getEmail()}">${newIntern.getEmail()}</a></li>
    <li class="list-group-item">School: ${newIntern.getSchool()}</li>
  </ul>
</div>`;
  prompt();
}
async function promptManager() {
  const { name, id, email, officeNumber } = await inquirer.prompt([
    {
      type: "input",
      message: "What is your Manager's name:",
      name: "name",
    },
    {
      type: "input",
      message: "What is your Manager's id:",
      name: "id",
    },
    {
      type: "input",
      message: "What is your Manager's email:",
      name: "email",
    },
    {
      type: "input",
      message: "What is your Manager's officeNumber",
      name: "officeNumber",
    },
  ]);
  const newManager = new Manager(name, id, email, officeNumber);
  console.log(newManager);
  managerCard = `<div class="card" style="width: 18rem;">
  <div class="card-header">
    ${newManager.getName()}
    <br>
    <i class="fa fa-coffee"></i> ${newManager.getRole()}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${newManager.getId()}</li>
    <li class="list-group-item">Email:<a href="mailto:${newManager.getEmail()}">${newManager.getEmail()}</a></li>
    <li class="list-group-item">OfficeNumber: ${newManager.getOfficeNumber()}</li>
  </ul>
</div>`;
  prompt();
}

async function buildHtml() {
  const string = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" href="style.css">
      <title>Team-Profiler</title>
  </head>
  <body>
      <div class="header">
          <h1> My Team</h1>
      </div>
      <div class="card-box">  
 
     ${managerCard}
     ${internCard}
     ${engineerCard}
     
  
     </div> 
  </body>
  </html>`;
  fs.writeFile("./output/index.html", string, (err) =>
    err ? console.log(err) : console.log("Successfully created index.html!")
  );
}
promptManager();
