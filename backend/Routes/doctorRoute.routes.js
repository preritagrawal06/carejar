const express = require('express')
const router = express.Router()
const getDoctorsController = require('../Controllers/getDoctors')

router.get('/:speciality', getDoctorsController)

module.exports = router