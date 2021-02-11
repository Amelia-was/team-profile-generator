const inquirer = require('inquirer')
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const employees = [];

// prompt user for team members
const promptManager = () => {
    console.log(`
================
Create your team
================
`);
    return inquirer
        .prompt([{
            type: 'text',
            name: 'name',
            message: 'Please enter the manager name'
        },
        {
            type: 'text',
            name: 'id',
            message: 'Please enter the manager ID'
        },
        {
            type: 'text',
            name: 'email',
            message: 'Please enter the manager email'
        },
        {
            type: 'text',
            name: 'officeNumber',
            message: 'Please enter the manager office number'
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to enter another employee?',
            default: false
        }])
        // destructure manager properties from the prompt object
        .then(({ name, id, email, officeNumber, confirmAddEmployee }) => {
            const employee = new Manager(name, id, email, officeNumber);
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
