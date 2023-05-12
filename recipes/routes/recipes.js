var recipes = require('../recipes.json');
var router = require('express').Router();

router.get('/', (req, res) => {
    const pageno = req.query.page != undefined ? +req.query.page : 1;
    const size = req.query.limit != undefined ? +req.query.limit: 3;

    const data = recipes.slice(size * (pageno - 1), size * pageno);
 
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(data));
});


module.exports = router;


// let pagination = [];
// for (var i = 0; i < recipes.length; i += limit) {
// pagination.push(recipes.slice(i, i + limit));
// }
// res.end(JSON.stringify(pagination[0]));
// } else if (req.query.page != undefined && pagination.length >= req.query.page) {
// start = Math.ceil(recipes.length / limit);

// res.end(JSON.stringify(pagination[req.query.page - 1]))
// if (start == req.query.page) {
// res.end(JSON.stringify(recipes.slice(recipes.length - 1)));
// } else {
// res.end(JSON.stringify(recipes.slice(recipes.length - start, recipes.length - req.query.page)));
// } else {
// if(start > 0){
// res.end(JSON.stringify(recipes.slice(limit+req.query.page)))
// }
// res.end(JSON.stringify([]));
// }
