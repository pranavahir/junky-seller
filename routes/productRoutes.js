const express = require('express')
const mongoose = require('mongoose')
const ProductRoutes = express.Router()
const Product = require('../models/Product')
const User = require('../models/User')
const { isNullorUndefinedorEmpty } = require('../utility/util')
ProductRoutes.post('/createproduct', async (req, res) => {
    try {
        if (isNullorUndefinedorEmpty(req.body.brandName) && isNullorUndefinedorEmpty(req.body.title) && isNullorUndefinedorEmpty(req.body.description) && isNullorUndefinedorEmpty(req.body.weight) && isNullorUndefinedorEmpty(req.body.mainImage) && isNullorUndefinedorEmpty(req.body.additionalImage1) && isNullorUndefinedorEmpty(req.body.price) && isNullorUndefinedorEmpty(req.body.quantity) && isNullorUndefinedorEmpty(req.body.userid) && isNullorUndefinedorEmpty(req.body.category)) {
            // console.log("DONE")
            //Check if User Exists
            const getuser = await User.findOne({ _id: req.body.userid })
            if (getuser !== null) {
                //Store Prouct Info
                const createProduct = new Product({
                    brandName: req.body.brandName,
                    title: req.body.title,
                    description: req.body.description,
                    bulletPoints: req.body.bulletPoints,
                    height: req.body.height,
                    width: req.body.width,
                    length: req.body.length,
                    weight: req.body.weight,
                    mainImage: req.body.mainImage,
                    additionalImage1: req.body.additionalImage1,
                    additionalImage2: req.body.additionalImage2,
                    additionalImage3: req.body.additionalImage3,
                    additionalImage4: req.body.additionalImage4,
                    additionalImage5: req.body.additionalImage5,
                    price: req.body.price,
                    quantity: req.body.quantity,
                    category: req.body.category,
                    createdBy: req.body.userid
                })
                const saveProduct = await createProduct.save()
                res.json({
                    err: null,
                    data: {
                        ...saveProduct._doc,
                        createdAt: saveProduct.createdAt.toISOString(),
                        updatedAt: saveProduct.updatedAt.toISOString()
                    }
                })
            }
            else {
                res.json({
                    error: "User Doesn't Exists",
                    data: null
                })
            }
        }
        else {
            res.json({
                error: "Provide all Mandatory Fields",
                data: null
            })
        }
    }
    catch (error) {
        console.log(error)
        res.json({
            error: "Something Went Wrong",
            data: null
        })
    }
    // const createProduct = new Products({
    //     brandName:req.body.brandName,
    //     title:req.body.title,
    //     description:req.body.description,
    //     bulletPoints:req.body.bulletPoints,
    //     height:req.body.height,
    //     width:req.body.width,
    //     length:req.body.length,
    //     weight:req.body.weight,
    //     mainImage:req.body.mainImage,
    //     additionalImage1:req.body.additionalImage1,
    //     additionalImage2:req.body.additionalImage2,
    //     additionalImage3:req.body.additionalImage3,
    //     additionalImage4:req.body.additionalImage4,
    //     additionalImage5:req.body.additionalImage5,
    //     price:req.body.price,
    //     quantity:req.body.quantity
    // })
    // const saveProduct = await createProduct.save()
    // // console.log(saveProduct);
    // res.json({
    //     err:null,
    //     data:{
    //         ...saveProduct._doc,
    //         createdAt:saveProduct.createdAt.toISOString(),
    //         updatedAt:saveProduct.updatedAt.toISOString()
    //     }
    // })
})


ProductRoutes.post('/deleteproduct', async (req, res) => {
    try {
        if (isNullorUndefinedorEmpty(req.body.productid)) {
            const getproduct = await Product.findOne({ _id: req.body.productid })
            console.log(getproduct, req.body.productid);
            if (getproduct !== null) {
                getproduct.isactive = false
                const saveProduct = await getproduct.save()
                res.json({
                    err: null,
                    data: {
                        ...saveProduct._doc,
                        createdAt: saveProduct.createdAt.toISOString(),
                        updatedAt: saveProduct.updatedAt.toISOString()
                    }
                })
            } else {
                res.json({
                    error: "Product Doesn't Exists",
                    data: null
                })
            }
        } else {
            res.json({
                error: "Provide all Mandatory Fields",
                data: null
            })
        }
    } catch (error) {
        console.log(error)
        res.json({
            error: "Something Went Wrong",
            data: null
        })
    }
})


ProductRoutes.post('/updateproduct', async (req, res) => {
    try {
        if (isNullorUndefinedorEmpty(req.body.productid)) {
            const getproduct = await Product.findOne({ _id: req.body.productid })
            if (getproduct !== null) {
                getproduct.brandName = req.body.brandName,
                    getproduct.title = req.body.title,
                    getproduct.description = req.body.description,
                    getproduct.bulletPoints = req.body.bulletPoints,
                    getproduct.height = req.body.height,
                    getproduct.width = req.body.width,
                    getproduct.length = req.body.length,
                    getproduct.weight = req.body.weight,
                    getproduct.mainImage = req.body.mainImage,
                    getproduct.additionalImage1 = req.body.additionalImage1,
                    getproduct.additionalImage2 = req.body.additionalImage2,
                    getproduct.additionalImage3 = req.body.additionalImage3,
                    getproduct.additionalImage4 = req.body.additionalImage4,
                    getproduct.additionalImage5 = req.body.additionalImage5,
                    getproduct.price = req.body.price,
                    getproduct.quantity = req.body.quantity,
                    getproduct.category = req.body.category
                const saveproduct = getproduct.save()
                res.json({
                    err: null,
                    data: {
                        ...saveproduct._doc,
                        createdAt: saveproduct.createdAt.toISOString(),
                        updatedAt: saveproduct.updatedAt.toISOString()
                    }
                })
            } else {
                res.json({
                    error: "Product Doesn't Exists",
                    data: null
                })
            }
        } else {
            res.json({
                error: "Provide all Mandatory Fields",
                data: null
            })
        }
    } catch (error) {
        console.log(error)
        res.json({
            error: "Something Went Wrong",
            data: null
        })
    }
})


ProductRoutes.get('/singleproduct', async (req, res) => {
    try {
        if (isNullorUndefinedorEmpty(req.body.productid)) {
            const getproduct = await Product.aggregate([
                {
                    $match: {
                        _id: req.body.productid
                    }
                }
            ])
            if (getproduct !== null && getproduct.isactive === true) {
                res.json({
                    error: null,
                    data: {
                        ...getproduct._doc
                    }
                })
            } else {
                res.json({
                    error: "Invalid productid",
                    data: null
                })
            }

        } else {
            res.json({
                error: "enter productid",
                data: null
            })
        }
    } catch (error) {
        res.json({
            error: "Something Went Wrong",
            data: null
        })
    }
})

ProductRoutes.get('/getproducts', async (req, res) => {
    try {
        if (isNullorUndefinedorEmpty(req.body.createdBy)) {
            const getproduct = await Product.aggregate([
                {
                    $match: {
                        _id: req.body.createdBy
                    }
                }
            ])
            if (getproduct !== null) {
                res.json({
                    error: null,
                    data: {
                        ...getproduct._doc
                    }
                })
            } else {
                res.json({
                    error: "Invalid createdBy",
                    data: null
                })
            }

        } else {
            res.json({
                error: "enter createdBy",
                data: null
            })
        }
    } catch (error) {
        res.json({
            error: "Something Went Wrong",
            data: null
        })
    }
})

ProductRoutes.post('/uploadproducts', async (req, res) => {
    try {
        if (isNullorUndefinedorEmpty(req.body.products) && isNullorUndefinedorEmpty(req.body.userid)) {
            const getuser = await User.findOne({ _id: req.body.userid })
            console.log(getuser,req.body.userid);
            if (getuser !== null) {
                const productsLength = req.body.products.length
                let validProducts = []
                let invalidProducts = []  

                for (let i = 0; i < productsLength; i++) {
                    // console.log(req.body.products[i]);
                    if (isNullorUndefinedorEmpty(req.body.products[i].brandName) &&
                        isNullorUndefinedorEmpty(req.body.products[i].title) &&
                        isNullorUndefinedorEmpty(req.body.products[i].description) &&
                        isNullorUndefinedorEmpty(req.body.products[i].weight) &&
                        isNullorUndefinedorEmpty(req.body.products[i].mainImage) &&
                        isNullorUndefinedorEmpty(req.body.products[i].additionalImage1) &&
                        isNullorUndefinedorEmpty(req.body.products[i].price) &&
                        isNullorUndefinedorEmpty(req.body.products[i].quantity) &&
                        isNullorUndefinedorEmpty(req.body.products[i].category)
                    ) {
                        validProducts.push(req.body.products[i])
                    } else {
                        invalidProducts.push(req.body.products[i])
                    }
                }
                const insertProducts = await Product.insertMany(validProducts);
                // const saveProducts = await insertProducts.save();

                res.json({
                    error: `inserted ${validProducts.length} products`,
                    validData: {
                        ...validProducts[0]._doc
                    },
                    invalidData: {
                        ...invalidProducts._doc
                    }
                })
            }else{
                res.json({
                    error:"enter valid user",
                    data:null
                })
            }
        } else {
            res.json({
                error: "Provide all Mandatory Fields",
                data: null
            })
        }
    } catch (error) {
        console.log(error)
        res.json({
            error: "Something Went Wrong",
            data: null
        })
    }
})

module.exports = ProductRoutes;
