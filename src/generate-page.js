const fs = require('fs');
const pageTemplate = require('./template.js');

const generatePage = content => {
    let dir = './dist';

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    fs.writeFile('./dist/my-team.html', content, err => {
        if (err) throw err;
        console.log('✶ Team Profile Complete! ✶');
    });
};

module.exports = generatePage;