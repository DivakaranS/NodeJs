const ROLES_FILE = __dirname + '/roles.txt';
const fs = require('fs');
const data = fs.readFileSync(ROLES_FILE, 'utf8');

module.exports = (scope) => (req, res, next) => {
    // console.log(scope,req.header('x-role'),req.get('x-role'),req.headers);    
    if (req.headers['x-role'] == 'admin') {
    	res.status(201).send();

    } else {
        res.status(403).send();
    }

};