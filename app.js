const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

const internCard = require("./templates/intern")
const engineerCard = require("./templates/engineer")
const managerCard = require("./templates/manager")
const main = require("./templates/main")

const inquirer = require("inquirer")
const fs = require("fs")

let i=1
const data = {}
const allEmployees = []
function displayMenu() {
    inquirer.prompt({
        type:"list",
        message:"Please choose one",
        choices:["manager", "intern", "engineer", "quit"],
        name:"choices"

    }).then(function(userInput){
        switch(userInput.choices) {
            case "manager":
                addManager()
                break;

                case "intern":
                    addIntern()
                    break;

                    case "engineer":
                        addEngineer()
                        break
                        case "quit":
                            writeHtml()
                            break
        }
    })
}

function addManager() {

   inquirer.prompt([{
       type:"input",
       message:"what is your name?",
       name:"employeeName"
   },
   {
       type:"input",
       message:"what is your email?",
       name:"employeeEmail"
   }, 
   {
        type: "input",
        message:"what is your office number?",
        name: "officeNumber"
   }

]).then(function(userInput) {
    const managerEmployee = new Manager(userInput.employeeName, i++, userInput.employeeEmail, userInput.officeNumber)
   allEmployees.push(managerEmployee)
   displayMenu()
})

   
}

function addIntern() {
    inquirer.prompt([{
        type:"input",
        message:"what is your name?",
        name:"employeeName"
    },
    {
        type:"input",
        message:"what is your email?",
        name:"employeeEmail"
    }, 
    {
         type: "input",
         message:"what is your school?",
         name: "school"
    }
 
 ]).then(function(userInput) {
     const internEmployee = new Intern(userInput.employeeName, i++, userInput.employeeEmail, userInput.school)
    allEmployees.push(internEmployee)
    displayMenu()
 })
 
}

function addEngineer() {
    inquirer.prompt([{
        type:"input",
        message:"what is your name?",
        name:"employeeName"
    },
    {
        type:"input",
        message:"what is your email?",
        name:"employeeEmail"
    }, 
    {
         type: "input",
         message:"what is your github?",
         name: "github"
    }
 
 ]).then(function(userInput) {
     const engineerEmployee = new Engineer(userInput.employeeName, i++, userInput.employeeEmail, userInput.github)
    allEmployees.push(engineerEmployee)
    displayMenu()
 })
}

function writeHtml() {


    let card=""

    card=card + managerCard(allEmployees)
    card=card + engineerCard(allEmployees)
    card=card + internCard(allEmployees)

    let finalHtml=main.topHtmlBody() + card + main.bottomHtmlBody()

    fs.writeFile("./index.html", finalHtml, function(error, results) {
        console.log(results)
    } )
}

displayMenu()