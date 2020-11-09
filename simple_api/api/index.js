const router = require('express').Router()
const mocks = require('./mock')

const reply = (res, body, timeout = 1000, status = 200) =>
    setTimeout(() => {
        res.status(status).json(body)
    }, timeout);

router.get('/city', function (req, res, next) {

    if (!req || !req.query || !req.query.name) {
        return reply(res, {error: 'unexpected query'}, 100, 404);
    }
    const city = mocks.cities.filter(item => item.name.toLowerCase().includes(req.query.name.toLowerCase()))
    // берём только первые 5 элементов
    const result = city.slice(Math.max(city.length - 5, 0));
    if (result) return reply(res, result, 150);
    reply(res, {error: 'not found'}, 100, 404);
});

module.exports = router;