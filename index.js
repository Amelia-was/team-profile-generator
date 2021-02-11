const inquirer = require('inquirer')
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const employees = [];

// prompt user for team members
const promptManager = () => {
    console.log(`
╔══════════════╗

Create your team

╚══════════════╝
`);
    return inquirer
        .prompt([{
            type: 'text',
            name: 'name',
            message: 'Please enter your manager\'s name'
        },
        {
            type: 'text',
            name: 'id',
            message: 'Please enter your manager\'s ID'
        },
        {
            type: 'text',
            name: 'email',
            message: 'Please enter your manager\'s email'
        },
        {
            type: 'text',
            name: 'officeNumber',
            message: 'Please enter your manager\'s office number'
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to enter another employee?',
            default: false
        }])
        // destructure manager properties from the prompt object
        .then(({ name, id, email, officeNumber, confirmAddEmployee }) => {
            let employee = new Manager(name, id, email, officeNumber);
            employees.push(employee);
            //console.log(employees);
            if (confirmAddEmployee) {
                // console.log(employees);
                // console.log('Let\'s add another employee!');
                promptEngineer();
            }
            else {
                console.log(employees);
                console.log('No more employees!');
            }
        })
}

const promptEngineer = () => {
    return inquirer
        .prompt([{
            type: 'text',
            name: 'name',
            message: 'Please enter your engineer\'s name'
        },
        {
            type: 'text',
            name: 'id',
            message: 'Please enter your engineer\'s ID'
        },
        {
            type: 'text',
            name: 'email',
            message: 'Please enter your engineer\'s email'
        },
        {
            type: 'text',
            name: 'github',
            message: 'Please enter your engineer\'s GitHub username'
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to enter another employee?',
            default: false
        }])
        .then(({ name, id, email, github, confirmAddEmployee }) => {
            let employee = new Engineer(name, id, email, github);
            employees.push(employee);
            //console.log(employees);
            if (confirmAddEmployee) {
                // console.log(employees);
                // console.log('Let\'s add another employee!');
                promptIntern();
            }
            else {
                console.log(employees);
                console.log('No more employees!');
            }
        })
}

const promptIntern = () => {
    return inquirer
        .prompt([{
            type: 'text',
            name: 'name',
            message: 'Please enter your intern\'s name'
        },
        {
            type: 'text',
            name: 'id',
            message: 'Please enter your intern\'s ID'
        },
        {
            type: 'text',
            name: 'email',
            message: 'Please enter your intern\'s email'
        },
        {
            type: 'text',
            name: 'school',
            message: 'Please enter your intern\'s school'
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to enter another employee?',
            default: false
        }])
        .then(({ name, id, email, school, confirmAddEmployee }) => {
            let employee = new Intern(name, id, email, school);
            employees.push(employee);
            //console.log(employees);
            if (confirmAddEmployee) {
                console.log(employees);
                console.log('Let\'s add another employee!');
            }
            else {
                console.log(employees);
                console.log('No more employees!');
            }
        })
}

promptManager();
