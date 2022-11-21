const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

const ChatApprovalSchema = new Schema({
    buyeruserid:{
        type:ObjectId,
        default:null
    },
    selleruserid:{
        type:ObjectId,
        default:null
    },
    status:{
        type:String,
        default:"close"
    },
    approvedBy:{
        type:ObjectId,
        default:null
    },
    isapproved:{
        type:Boolean,
        default:true
    },
    productid:{
        type:ObjectId,
        default:null
    }
},{timestamps:true})

module.exports = ChatApproval = mongoose.model("ChatApproval",ChatApprovalSchema)