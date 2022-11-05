const express = require('express')
const mongoose = require('mongoose')
const ProductRoutes = express.Router()
const Product = require('../../models/Product')
const User = require('../../models/User')
const RecentlyViewed = require('../../models/RecentlyViewed')
const RecentlyViewedController = require('../../controllers/product/RecentlyViewedController')
const { isNullorUndefinedorEmpty } = require('../../utility/util')

async function recentlyviewedproduct(req, res) {
    try {
        if (isNullorUndefinedorEmpty(req.body.userid) && isNullorUndefinedorEmpty(req.body.productid)) {
            // console.log("DONE")
            //Check if User Exists
            const recent = await RecentlyViewed.findOne({ userid: req.body.userid, productid: req.body.productid }).lean()
                //const getproductid = await RecentlyViewed.findOne({_id: req.body.productid }).lean()
            if (recent !== null) {

                const updaterecentlyviewed = await RecentlyViewed.updateOne({
                    userid: req.body.userid,
                    productid: req.body.productid,
                }, {
                    $set: {
                        updatedAt: new Date(),
                        createdAt: new Date()
                    }
                })

                const fetchUpdated = await RecentlyViewed.findOne({ userid: req.body.userid, productid: req.body.productid }).lean()
                res.json({
                    err: null,
                    data: {
                        ...fetchUpdated,
                        createdAt: fetchUpdated.createdAt.toISOString(),
                        updatedAt: fetchUpdated.updatedAt.toISOString()
                    }
                })
            } else {
                const createRecentlyViewed = new RecentlyViewed({
                    userid: req.body.userid,
                    productid: req.body.productid
                })
                const saveRecentlyViewed = await createRecentlyViewed.save()

                res.json({
                    err: null,
                    data: {
                        ...saveRecentlyViewed._doc,
                        createdAt: saveRecentlyViewed.createdAt.toISOString(),
                        updatedAt: saveRecentlyViewedt.updatedAt.toISOString()
                    }
                })
            }
        }

    } catch (error) {
        console.log(error)
        res.json({
            error: "Something Went Wrong",
            data: null
        })
    }
}
module.exports = {
    recentlyviewedproduct
}