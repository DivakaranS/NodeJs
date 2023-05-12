var recipes = require('../recipes.json');
var router = require('express').Router();

router.get('/shopping-list', (req, res) => {
	const ids = req.query.ids != undefined ? req.query.ids.split(',') : null;
	if (ids == null) {
		res.status(400).end();
		return;
	}
	const data = recipes.filter(r => ids.includes(''+r.id)).map(r => r.ingredients).reduce((acc, el)=> [...acc, ...el], []);
	if (data.length === 0) {
		res.status(404).end('NOT_FOUND');
		return;
	}
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
	res.end(JSON.stringify(data));
})



module.exports = router;
