const express = require('express')
const Cart = require('../models/Cart')
const Ordered = require('../models/Ordered')
const Product = require('../models/Product')
const OrderedRoutes = express.Router()
const User = require('../models/User')
const ReferenceNumber = require('../models/ReferenceNumber')
const { isNullorUndefinedorEmpty,fetchFromReferenceNumber } = require('../utility/util')



OrderedRoutes.post('/storeordered',async(req,res)=>{
    try{
        if(isNullorUndefinedorEmpty(req.body.userid) && isNullorUndefinedorEmpty(req.body.paymentmethod) && isNullorUndefinedorEmpty(req.body.transactiondetails) && isNullorUndefinedorEmpty(req.body.additionalcharges) && isNullorUndefinedorEmpty(req.body.additionaldiscount) && isNullorUndefinedorEmpty(req.body.logistics) && isNullorUndefinedorEmpty(req.body.orderstatus)){
            const cartinfo = await Cart.find({userid:req.body.userid})
            // console.log(cartinfo);
            if(cartinfo !== null){                       
                const number = await fetchFromReferenceNumber()
                console.log(number);
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