const express = require('express')
const Cart = require('../../models/Cart')
const Ordered = require('../../models/Ordered')
const Product = require('../../models/Product')
const OrderedRoutes = express.Router()
const User = require('../../models/User')
const ReferenceNumber = require('../../models/ReferenceNumber')
const orderedController = require('../../controllers/ordered/orderedController')
const { isNullorUndefinedorEmpty,fetchFromReferenceNumber } = require('../../utility/util')
async function storeordered(req,res){
    try{
        if(isNullorUndefinedorEmpty(req.body.userid) && isNullorUndefinedorEmpty(req.body.paymentmethod) && isNullorUndefinedorEmpty(req.body.transactiondetails) && isNullorUndefinedorEmpty(req.body.additionalcharges) && isNullorUndefinedorEmpty(req.body.additionaldiscount) && isNullorUndefinedorEmpty(req.body.logistics) && isNullorUndefinedorEmpty(req.body.orderstatus)){
            const cartinfo = await Cart.find({userid:req.body.userid})
            // // console.log(cartinfo);            
            if(cartinfo !== null){                       
            //     const fetchCartProduct = await Cart.aggregate([
            //         {$match: {
            //             userid: ObjectId(req.body.userid),
            //             isactive:true
            //         }},
            //         {        
            //         $lookup:
            //             {
            //                 from: "products",
            //                 let:{prodid:"$_id"},
            //                 pipeline: [
            //                     {
            //                         $match:
            //                         {
            //                             $expr:
            //                             {
            //                                 $and:
            //                                     [
            //                                         { $eq: ["$productid","$$prodid"] },
            //                                         { $eq: ["$isactive", true] }
            //                                     ]
            //                             }
            //                         }
            //                     }
            //                 ],
            //                 as: "comments"
            //             }
            //         }
            //     ])
            //     let objProducts = []
            //     for(let i=0;i<fetchCartProduct.length;i++){

            //     }
            //     const number = await fetchFromReferenceNumber()
            //     const createOrdered = new Ordered({
            //         orderedreferencenumber:number,
            //         userid:req.body.userid,
            //         paymentmethod:req.body.paymentmethod,
            //         transactiondetails:req.body.transactiondetails,
                    
            //     })
                
                res.json({
                    error:null,
                    data:null
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
}

async function fetchordered(req,res){
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
}

module.exports = {
    storeordered,
    fetchordered
}