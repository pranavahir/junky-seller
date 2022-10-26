const express = require('express')
const mongoose = require('mongoose')
const CartRoutes = express.Router()
const Cart = require('../models/Cart')
const Product = require('../models/Product')
const User = require('../models/User')
const { isNullorUndefinedorEmpty } = require('../utility/util')

CartRoutes.post('/createcart', async (req, res) => {
    try {
        if (isNullorUndefinedorEmpty(req.body.userid) && isNullorUndefinedorEmpty(req.body.productid)) {
            const getUser = await User.findOne({ _id: req.body.userid })
            const getProduct = await Product.findOne({ _id: req.body.productid })
            if (getUser !== null && getProduct !== null) {
                const createCart = new Cart({
                    userid: req.body.userid,
                    productid: req.body.productid,
                    quantity: req.body.quantity
                })
                const saveCart = await createCart.save()
                res.json({
                    error: null,
                    data: {
                        ...saveCart._doc,
                        createdAt: saveCart.createdAt.toISOString(),
                        updatedAt: saveCart.updatedAt.toISOString()
                    }
                })
            } else {
                req.json({
                    error: "user or product dosen't exits",
                    data: null
                })
            }
        } else {
            res.json({
                error: "enter required fields",
                data: null
            })
        }
    } catch (error) {
        res.json({
            error: "something went wrong",
            data: null
        })
    }
})

CartRoutes.post('/updatecart', async (req, res) => {
    try {
        if (isNullorUndefinedorEmpty(req.body.userid)) {
            const getCart = await Cart.findOne({ _id: req.body.userid })
            if (getCart !== null) {
                const updateCart = await Cart.updateOne({
                    userid: req.body.userid
                },
                    {
                        $set: {
                            quantity: isNullorUndefinedorEmpty(req.body.quantity) ? req.body.quantity : getCart.quantity
                        }
                    }
                )
                const getUpdatedCart = await Cart.findOne({ _id: req.body.cartid })
                res.json({
                    error: null,
                    data: {
                        ...getUpdatedCart._doc,
                        createdAt: getUpdatedCart.createdAt.toISOString(),
                        updatedAt: getUpdatedCart.updatedAt.toISOString()
                    }
                })
            } else {
                res.json({
                    error: "enter valid cartid",
                    data: null
                })
            }
        } else {
            res.json({
                error: "enter cartid",
                data: null
            })
        }
    } catch (error) {
        res.json({
            error: "something went wrong",
            data: null
        })
    }
})

CartRoutes.post('/fetchcart', async (req, res) => {
    try {
        if (isNullorUndefinedorEmpty(req.body.userid)) {
            const fetchCartProduct = await Cart.aggregate([
                {
                    $match: {
                        userid: req.body.userid
                    },
                    $lookup:
                    {
                        from: "products",
                        let:{prodid:"$_id",active:"$isactive"},
                        pipeline: [
                            {
                                $match:
                                {
                                    $expr:
                                    {
                                        $and:
                                            [
                                                { $eq: ["$$prodid", "$productid"] },
                                                { $eq: ["$$active", "true"] }
                                            ]
                                    }
                                }
                            }
                        ],
                        as: "comments"
                    }
                }
            ])
            console.log(fetchCartProduct);
            res.json({
                error:null,
                data:fetchCartProduct
            })
        } else {
            res.json({
                error: "enter cartid",
                data: null
            })
        }
    } catch (error) {
        res.json({
            error: "something went wrong",
            data: null
        })
    }
})

module.exports = CartRoutes;
