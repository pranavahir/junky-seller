const express = require('express')
const ProductRoutes = express.Router()
const Products = require('../models/Products')
const {isNullorUndefinedorEmpty} = require('../utility/util')
ProductRoutes.post('/createproduct',async (req,res)=>{
    const createProduct = new Products({
        brandName:req.body.brandName,
        title:req.body.title,
        description:req.body.description,
        bulletPoints:req.body.bulletPoints,
        height:req.body.height,
        width:req.body.width,
        length:req.body.length,
        weight:req.body.weight,
        mainImage:req.body.mainImage,
        additionalImage1:req.body.additionalImage1,
        additionalImage2:req.body.additionalImage2,
        additionalImage3:req.body.additionalImage3,
        additionalImage4:req.body.additionalImage4,
        additionalImage5:req.body.additionalImage5,
        price:req.body.price,
        quantity:req.body.quantity
    })
    const saveProduct = await createProduct.save()
    // console.log(saveProduct);
    res.json({
        err:null,
        data:{
            ...saveProduct._doc,
            createdAt:saveProduct.createdAt.toISOString(),
            updatedAt:saveProduct.updatedAt.toISOString()
        }
    })
})



module.exports = ProductRoutes;