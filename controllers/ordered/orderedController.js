const express = require('express')
const Cart = require('../../models/Cart')
const Ordered = require('../../models/Ordered')
const Product = require('../../models/Product')
const OrderedRoutes = express.Router()
const User = require('../../models/User')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
const ReferenceNumber = require('../../models/ReferenceNumber')
const orderedController = require('../../controllers/ordered/orderedController')
const { isNullorUndefinedorEmpty,fetchFromReferenceNumber } = require('../../utility/util')
async function storeordered(req,res){
    try{
        if(isNullorUndefinedorEmpty(req.body.userid) && isNullorUndefinedorEmpty(req.body.paymentmethod) && isNullorUndefinedorEmpty(req.body.transactiondetails) && isNullorUndefinedorEmpty(req.body.additionalcharges) && isNullorUndefinedorEmpty(req.body.additionaldiscount) && isNullorUndefinedorEmpty(req.body.logistics) && isNullorUndefinedorEmpty(req.body.orderstatus)){
            const fetchCartProduct = await Cart.aggregate([
                {$match: {
                    userid: ObjectId(req.body.userid),
                    isactive:true
                }},
                {        
                $lookup:
                    {
                        from: "products",
                        let:{prodid:"$productid",price:"$products.price"},
                        pipeline: [
                            {
                                $match:
                                {
                                    $expr:
                                    {
                                        $and:
                                            [
                                                { $eq: ["$_id","$$prodid"] },
                                                { $eq: ["$isactive", true] },
                                                { $gt : [0,"$$price"]}
                                            ]
                                    }
                                }
                            }
                        ],
                        as: "products"
                    }
                }
            ])
            let objProducts = []
            for(let i=0;i<fetchCartProduct.length;i++){
                let {_id,title,brandName,quantity,mainImage,price} = fetchCartProduct[i].products[0]
                // console.log(_id,title,brandName,quantity,mainImage,price);
                let productid = _id,producttitle=title,brandname=brandName,productimage=mainImage
                let orderstatus = req.body.orderstatus,logistics=req.body.logistics
                let objProductsInfo = {productid,producttitle,brandname,quantity,productimage,orderstatus,logistics,price}
                objProducts.push(objProductsInfo)
            }
            console.log(objProducts)
            // console.log(fetchCartProduct);
            const number = await fetchFromReferenceNumber()
            const createOrdered = new Ordered({
                orderedreferencenumber:number,
                userid:req.body.userid,
                paymentmethod:req.body.paymentmethod,
                transactiondetails:req.body.transactiondetails,
                productinfo:objProducts,
                additionalcharges:req.body.additionalcharges,
                additionaldiscount:req.body.additionaldiscount,
                ordertotal:100
            })
            const saveCreatedOrdered = await createOrdered.save()
            console.log(saveCreatedOrdered);
            res.json({
                error:null,
                data:saveCreatedOrdered
            })
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