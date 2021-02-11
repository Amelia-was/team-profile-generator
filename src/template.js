const Manager = require('../lib/Manager.js');
const Engineer = require('../lib/Engineer.js');
const Intern = require('../lib/Intern.js');
const generatePage = require('./generate-page.js');

const pageTemplate = employeesArr => {
    console.log(employeesArr);

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<h1>My Team</h1>

${employeesArr
            .filter(employee => employee instanceof Manager)
            .map(({ name, id, email, officeNumber }) => {
                return `
          <div>
            <h3>${name}</h3>
            <h5>
              ID: ${id}
            </h5>
            <h5>
              Email: ${email}
            </h5>
            <h5>
              Office Number: ${officeNumber}
            </h5>
          </div>
        `;
            })
            .join('')}

${employeesArr
            .filter(employee => employee instanceof Engineer)
            .map(({ name, id, email, github }) => {
                return `
          <div>
            <h3>${name}</h3>
            <h5>
              ID: ${id}
            </h5>
            <h5>
              Email: ${email}
            </h5>
            <h5>
              GitHub: <a href='https://github.com/${github}'>${github}</a>
            </h5>
          </div>
        `;
            })
            .join('')}

${employeesArr
            .filter(employee => employee instanceof Intern)
            .map(({ name, id, email, school }) => {
                return `
          <div>
            <h3>${name}</h3>
            <h5>
              ID: ${id}
            </h5>
            <h5>
              Email: ${email}
            </h5>
            <h5>
              School: ${school}
            </h5>
          </div>
        `;
            })
            .join('')}

</body>
</html>`
}


module.exports = pageTemplate;