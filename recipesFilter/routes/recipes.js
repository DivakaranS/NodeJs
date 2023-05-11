var recipes = require('../recipes.json');
var router = require('express').Router();

router.get('/shopping-list', (req, res) => {
    let filterRecipies = [];
    if (req.query.ids != undefined) {
        req.query.ids.split(',').map(Number).forEach((id) => {
            recipes.filter((e) => {
                if (e.id == id) {
                    filterRecipies.push(...e.ingredients);
                }

            })
        })

        if (filterRecipies.length != 0) {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify(filterRecipies));
        } else {
            res.status(404).end('NOT_FOUND');
        }
    } else {
        res.status(400).end();
    }
})



module.exports = router;