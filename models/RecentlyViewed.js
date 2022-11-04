const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const RecentlyViewedSchema = new Schema({
    userid: {
        type: ObjectId
    },
    productid: {
        type: ObjectId
    }

}, { timestamps: true })

module.exports = RecentlyViewed = mongoose.model('RecentlyViewedSchema', RecentlyViewedSchema)