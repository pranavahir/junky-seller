const express = require('express')
const Cart = require('../models/Cart')
const Ordered = require('../models/Ordered')
const Product = require('../models/Product')
const OrderedRoutes = express.Router()
const User = require('../models/User')
const ReferenceNumber = require('../models/ReferenceNumber')
const orderedController = require('../controllers/ordered/orderedController')
const { isNullorUndefinedorEmpty,fetchFromReferenceNumber } = require('../utility/util')



OrderedRoutes.post('/storeordered',orderedController.storeordered)


OrderedRoutes.get('/fetchordered',orderedController.fetchordered)


module.exports = OrderedRoutes;