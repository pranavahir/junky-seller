const express = require('express')
const Cart = require('../models/Cart')
const Ordered = require('../models/Ordered')
const Product = require('../models/Product')
const OrderedRoutes = express.Router()
const User = require('../models/User')
const { isNullorUndefinedorEmpty } = require('../utility/util')
var orderedreferencenumber = 0


OrderedRoutes.post('/storeordered',async(req,res)=>{
    try{
        if(isNullorUndefinedorEmpty(req.body.userid) && isNullorUndefinedorEmpty(req.body.paymentmethod) && isNullorUndefinedorEmpty(req.body.transactiondetails) && isNullorUndefinedorEmpty(req.body.additionalcharges) && isNullorUndefinedorEmpty(req.body.additionaldiscount) && isNullorUndefinedorEmpty(req.body.logistics) && isNullorUndefinedorEmpty(req.body.orderstatus)){
            const cartinfo = await Cart.findOne({userid:req.body.userid})
            // console.log(cartinfo);
            if(cartinfo !== null){
                const getProduct = await Product.findOne({_id:cartinfo.productid})
                const createOrdered = new Ordered({
                    orderedreferencenumber:`WM-OD-${orderedreferencenumber}`,
                    userid:req.body.userid,
                    paymentmethod:req.body.paymentmethod,
                    transactiondetails:req.body.transactiondetails,
                    productinfo:[{
                        productid:getProduct._id,
                        producttitle:getProduct.title,
                        brandname:getProduct.brandName,
                        quantity:cartinfo.quantity,
                        productimage:getProduct.mainImage,
                        orderstatus:req.body.orderstatus,
                        logistics:req.body.logistics,
                        price:getProduct.price
                    }],
                    additionalcharges:req.body.additionalcharges,
                    additionaldiscount:req.body.additionaldiscount,
                    ordertotal:(cartinfo.quantity*getProduct.price+Number(req.body.additionalcharges))*(1-Number(req.body.additionaldiscount)/100)
                })
                orderedreferencenumber += 1;
                // console.log(createOrdered);
                const saveOrdered = await createOrdered.save()
                console.log(saveOrdered);
                res.json({
                    error:null,
                    data:{
                        ...saveOrdered._doc,
                        createdAt: saveOrdered.createdAt.toISOString(),
                        updatedAt: saveOrdered.updatedAt.toISOString()
                    }
                })
            }else{
                res.json({
                    error:"enter valid userid",
                    data:null
                })
            }
        }else{
            res.json({
                error:"enter required field",
                data:null
            })
        }
    }catch(error){
        res.json({
            error:"something went wrong",
            data:null
        })
    }
})


OrderedRoutes.get('/fetchordered',async(req,res)=>{
    try{
        if(isNullorUndefinedorEmpty(req.body.orderedreferencenumber)){
            const getOrdered = await Ordered.findOne({orderedreferencenumber:req.body.orderedreferencenumber})
            if(getOrdered !== null){
                res.json({
                    error:null,
                    data:{
                        ...getOrdered._doc
                    }
                })
            }else{
                res.json({
                    error:"enter valid orderedreferencenumber",
                    data:null
                })
            }
        }else{
            res.json({
                error:"enter required field",
                data:null
            })
        }
    }catch(error){
        res.json({
            error:"something went wrong",
            data:null
        })
    }
})


module.exports = OrderedRoutes;