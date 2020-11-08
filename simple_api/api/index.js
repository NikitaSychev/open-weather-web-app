const router = require('express').Router()
const mocks = require('./mock')

const reply = (res, body, timeout = 1000, status = 200) =>
    setTimeout(() => {
        res.status(status).json(body)
    }, timeout);

router.get('/city', function (req, res, next) {
    // res.send(req.query.name);

    if (!req || !req.query) {
        return reply(res, {error: 'unexpected query'}, 100, 404);
    }
    const city = mocks.cities.filter(item => item.name.toLowerCase().includes(req.query.name.toLowerCase()));
    if (city) return reply(res, city, 150);
    reply(res, {error: 'not found'}, 100, 404);
});

module.exports = router;