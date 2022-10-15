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
            // console.log(getproduct, req.body.productid);
            if (getproduct !== null) {
                const deleteproduct = await Product.updateOne(
                    {_id:req.body.productid},
                    {
                        $set:{
                            isactive:false
                        }
                    }    
                )

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
                const updateproduct = await Product.updateOne({
                    _id: req.body.productid
                }, {
                    $set: {
                        brandName: isNullorUndefinedorEmpty(req.body.brandName) ? req.body.brandName : getproduct.brandName,
                        title: isNullorUndefinedorEmpty(req.body.title) ? req.body.title : getproduct.title,
                        description: isNullorUndefinedorEmpty(req.body.description) ? req.body.description : getproduct.description,
                        bulletPoints: isNullorUndefinedorEmpty(req.body.bulletPoints) ? req.body.bulletPoints : getproduct.bulletPoints,
                        height: isNullorUndefinedorEmpty(req.body.height) ? req.body.height : getproduct.height,
                        width: isNullorUndefinedorEmpty(req.body.width) ? req.body.width : getproduct.width,
                        length: isNullorUndefinedorEmpty(req.body.length) ? req.body.length : getproduct.length,
                        weight: isNullorUndefinedorEmpty(req.body.weight) ? req.body.weight : getproduct.weight,
                        mainImage: isNullorUndefinedorEmpty(req.body.mainImage) ? req.body.mainImage : getproduct.mainImage,
                        additionalImage1: isNullorUndefinedorEmpty(req.body.additionalImage1) ? req.body.additionalImage1 : getproduct.additionalImage1,
                        additionalImage2: isNullorUndefinedorEmpty(req.body.additionalImage2) ? req.body.additionalImage2 : getproduct.additionalImage2,
                        additionalImage3: isNullorUndefinedorEmpty(req.body.additionalImage3) ? req.body.additionalImage3 : getproduct.additionalImage3,
                        additionalImage4: isNullorUndefinedorEmpty(req.body.additionalImage4) ? req.body.additionalImage4 : getproduct.additionalImage4,
                        additionalImage5: isNullorUndefinedorEmpty(req.body.additionalImage5) ? req.body.additionalImage5 : getproduct.additionalImage5,
                        price: isNullorUndefinedorEmpty(req.body.price) ? req.body.price : getproduct.price,
                        quantity: isNullorUndefinedorEmpty(req.body.quantity) ? req.body.quantity : getproduct.quantity,
                        category: isNullorUndefinedorEmpty(req.body.category) ? req.body.category : getproduct.category,
                        subcategory: isNullorUndefinedorEmpty(req.body.subcategory) ? req.body.subcategory : getproduct.subcategory,
                        leafcategory: isNullorUndefinedorEmpty(req.body.leafcategory) ? req.body.leafcategory : getproduct.leafcategory
                    }
                }
                )
                const getupdatedproduct = await Product.findOne({_id:req.body.productid})
                res.json({
                    error:null,
                    data:{
                        ...getupdatedproduct._doc,
                        createdAt:getupdatedproduct.createdAt.toISOString(),
                        updatedAt:getupdatedproduct.updatedAt.toISOString()
                    }
                })
            }else{
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
