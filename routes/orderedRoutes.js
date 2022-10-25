const express = require('express')
const Cart = require('../models/Cart')
const Ordered = require('../models/Ordered')
const Product = require('../models/Product')
const OrderedRoutes = express.Router()
const User = require('../models/User')
const ReferenceNumber = require('../models/ReferenceNumber')
const { isNullorUndefinedorEmpty } = require('../utility/util')



OrderedRoutes.post('/storeordered',async(req,res)=>{
    try{
        if(isNullorUndefinedorEmpty(req.body.userid) && isNullorUndefinedorEmpty(req.body.paymentmethod) && isNullorUndefinedorEmpty(req.body.transactiondetails) && isNullorUndefinedorEmpty(req.body.additionalcharges) && isNullorUndefinedorEmpty(req.body.additionaldiscount) && isNullorUndefinedorEmpty(req.body.logistics) && isNullorUndefinedorEmpty(req.body.orderstatus)){
            const cartinfo = await Cart.find({userid:req.body.userid})
            // console.log(cartinfo);
            if(cartinfo !== null){
                // console.log(cartinfo)
                let objCartInfo = []
                for(let i=0;i<cartinfo.length;i++){
                    console.log(objCartInfo)
                    const findRefNum = await ReferenceNumber.find();
                    console.log(findRefNum);
                    const number = 0
                    if(isNullorUndefinedorEmpty(findRefNum)){
                        number = Number(findRefNum.referencenumber)
                        console.log(number)
                    }else{
                        const saveRef = await ReferenceNumber.insertOne({referencenumber:number+1})
                        const updatedRefNum = await saveRef.save()
                        console.log(updatedRefNum,saveRef);
                    }
                    console.log(number,findRefNum)
                    const getProduct = await Product.findOne({_id:cartinfo[i].productid})
                    const createOrdered = new Ordered({
                        orderedreferencenumber:`WM-OD-${number}`,
                        userid:req.body.userid,
                        paymentmethod:req.body.paymentmethod,
                        transactiondetails:req.body.transactiondetails,
                        productinfo:[{
                            productid:getProduct._id,
                            producttitle:getProduct.title,
                            brandname:getProduct.brandName,
                            quantity:cartinfo[i].quantity,
                            productimage:getProduct.mainImage,
                            orderstatus:req.body.orderstatus,
                            logistics:req.body.logistics,
                            price:getProduct.price
                        }],
                        additionalcharges:req.body.additionalcharges,
                        additionaldiscount:req.body.additionaldiscount,
                        ordertotal:(cartinfo[i].quantity*getProduct.price+Number(req.body.additionalcharges))*(1-Number(req.body.additionaldiscount)/100)
                    })
                    objCartInfo.push(createOrdered)
                    
                }
                console.log(objCartInfo);
                const insertCartInfo = await Cart.insertMany(objCartInfo);
                const saveCartInfo = await insertCartInfo.save()
                console.log(saveCartInfo);
                res.json({
                    error:null,
                    data:saveCartInfo
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