const router = require('express').Router()
const jsonParser = require('body-parser').json()
const Event = require('../models/Event')

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

router.post('/', jsonParser, (req, res) => {
	Event.findByIdAndUpdate(req.body._id, req.body)
	   .then(result => res.send(result))
	   .catch(error => res.send(error))
})

module.exports = router
