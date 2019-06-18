const express = require('express')
const router = express.Router()
const posts = require('../controllers/postsController')

router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Node Express API",
        version: "0.0.1"
    })
})

router.get('/sonhos', posts.list)
router.post('/sonhos', posts.create)



module.exports = router
