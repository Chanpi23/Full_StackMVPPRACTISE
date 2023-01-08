//handles inital get request for the homepage
// handles post method request for adding  new item

const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

router.get('/', homeController.getIndex) //read
router.post('/new', homeController.createItem) //create


module.exports = router