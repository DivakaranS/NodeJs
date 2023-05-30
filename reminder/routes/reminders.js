const router = require('express').Router();
const controller = require('../controllers/reminders');

router.post('/', async(req, res) => {
    res.writeHead(201, {
        'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(await controller.setup(req.body)))

})
router.get('/', async(req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(await controller.getData(req.query)))

})
router.get('/:id', async(req, res) => {
    if (await controller.getData(req.params.id) != null) {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify(await controller.getData(req.params.id)))
    } else {
        res.status(404).send('ID not found');
    }
})
router.put('/:id', async(req, res) => {
    res.writeHead(405, {
        'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(await controller.putData(req.params.id, req.body)))

})
router.patch('/:id', async(req, res) => {
    res.writeHead(405, {
        'Content-Type': 'application/json'
    });

    res.end(JSON.stringify(await controller.patchData(req.params.id, req.body)))

})
router.delete('/:id', async(req, res) => {
    res.writeHead(405, {
        'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(await controller.deleteData(req.params.id)))

})
module.exports = router;