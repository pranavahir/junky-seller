const express = require('express')
const mongoose = require('mongoose')
const ProductRoutes = express.Router()
const Product = require('../models/Product')
const User = require('../models/User')
const productController = require('../controllers/product/productController')
const { isNullorUndefinedorEmpty } = require('../utility/util')
    //const RecentlyViewed = require('../models/RecentlyViewed')
const RecentlyViewedController = require('../controllers/product/RecentlyViewedController')


ProductRoutes.post('/createproduct', productController.createproduct)


ProductRoutes.post('/deleteproduct', productController.deleteproduct)


ProductRoutes.post('/updateproduct', productController.updateproduct)


ProductRoutes.post('/singleproduct', productController.singleproduct)

ProductRoutes.get('/getproducts', productController.getproducts)

ProductRoutes.get('/searchsingleproduct', productController.searchsingleproduct)


ProductRoutes.get('/searchproducts', productController.searchproducts)

ProductRoutes.get('/fetchproductinformation', productController.fetchproductinformation)



module.exports = ProductRoutes;