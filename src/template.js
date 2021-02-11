const generatePage = require('./generate-page.js');

const pageTemplate = (employees) => {
    console.log(employees);

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<h1>My Team</h1>
${employees}
</body>
</html>`
}


module.exports = pageTemplate;