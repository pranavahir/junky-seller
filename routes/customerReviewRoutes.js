const express = require('express')
const mongoose = require('mongoose')
const customerReviewRoutes = express.Router()
const CustomerReview = require('../models/CustomerReview')
const reviewController = require('../controllers/reviewController')
const { isNullorUndefinedorEmpty } = require('../utility/util')
const ObjectId = mongoose.Types.ObjectId


customerReviewRoutes.post('/storecustomerreview', reviewController.storecustomerreview)
customerReviewRoutes.get('/fetchproductreview', reviewController.fetchproductreview)
module.exports = customerReviewRoutes;