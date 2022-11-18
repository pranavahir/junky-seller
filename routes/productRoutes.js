const express = require('express')
const mongoose = require('mongoose')
const ProductRoutes = express.Router()
const Product = require('../models/Product')
const User = require('../models/User')
const productController = require('../controllers/product/productController')
const { isNullorUndefinedorEmpty } = require('../utility/util')
    //const RecentlyViewed = require('../models/RecentlyViewed')
const RecentlyViewedController = require('../controllers/product/RecentlyViewedController')


ProductRoutes.post('/server/createproduct', productController.createproduct)


ProductRoutes.post('/server/deleteproduct', productController.deleteproduct)


ProductRoutes.post('/server/updateproduct', productController.updateproduct)


ProductRoutes.post('/server/singleproduct', productController.singleproduct)

ProductRoutes.get('/server/getproducts', productController.getproducts)

ProductRoutes.get('/server/searchsingleproduct', productController.searchsingleproduct)


ProductRoutes.get('/server/searchproducts', productController.searchproducts)

ProductRoutes.get('/server/fetchproductinformation', productController.fetchproductinformation)
ProductRoutes.post('/server/listofproducts', productController.listofproducts)




module.exports = ProductRoutes;