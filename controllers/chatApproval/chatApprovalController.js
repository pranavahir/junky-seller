const ChatApproval = require("../../models/ChatApproval")
const { isNullorUndefinedorEmpty } = require("../../utility/util")


async function updatestatus(req,res){
    try{
        if(isNullorUndefinedorEmpty(req.body.chatapprovalid) && isNullorUndefinedorEmpty(req.body.status)){
            const findChat = ChatApproval.findOne({_id:req.body.chatapprovalid}).lean()
            if(findChat !== null){
                const updateChat = ChatApproval.updateOne(
                    {_id:req.body.chatapprovalid},
                    {
                        $set:{
                            status:req.body.status
                        }
                    }
                )
                const getChat = ChatApproval.findOne({_id:req.body.chatapprovalid}).lean()
                res.json({
                    error:null,
                    data:{
                        ...getChat,
                        createdAt: getChat.createdAt.toISOString(),
                        updatedAt: getChat.updatedAt.toISOString()
                    }
                })
            }else{
                res.json({
                    error:"enter valid chatapprovalid",
                    data:null
                })
            }
        }else{
            res.json({
                error:"enter mandotary fields",
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


async function updateapprovedby(req,res){
    try{
        if(isNullorUndefinedorEmpty(req.body.chatapprovalid) && isNullorUndefinedorEmpty(req.body.approvedby)){
            const findChat = ChatApproval.findOne({_id:req.body.chatapprovalid}).lean()
            if(findChat !== null){
                const updateChat = ChatApproval.updateOne(
                    {_id:req.body.chatapprovalid},
                    {
                        $set:{
                            approvedBy:req.body.approvedby
                        }
                    }
                )
                const getChat = ChatApproval.findOne({_id:req.body.chatapprovalid}).lean()
                res.json({
                    error:null,
                    data:{
                        ...getChat,
                        createdAt: getChat.createdAt.toISOString(),
                        updatedAt: getChat.updatedAt.toISOString()
                    }
                })
            }else{
                res.json({
                    error:"enter valid chatapprovalid",
                    data:null
                })
            }
        }else{
            res.json({
                error:"enter mandotary fields",
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


async function updateisapproved(req,res){
    try{
        if(isNullorUndefinedorEmpty(req.body.chatapprovalid) && isNullorUndefinedorEmpty(req.body.isapproved)){
            const findChat = ChatApproval.findOne({_id:req.body.chatapprovalid}).lean()
            if(findChat !== null){
                const updateChat = ChatApproval.updateOne(
                    {_id:req.body.chatapprovalid},
                    {
                        $set:{
                            isapproved:req.body.isapproved
                        }
                    }
                )
                const getChat = ChatApproval.findOne({_id:req.body.chatapprovalid}).lean()
                res.json({
                    error:null,
                    data:{
                        ...getChat,
                        createdAt: getChat.createdAt.toISOString(),
                        updatedAt: getChat.updatedAt.toISOString()
                    }
                })
            }else{
                res.json({
                    error:"enter valid chatapprovalid",
                    data:null
                })
            }
        }else{
            res.json({
                error:"enter mandotary fields",
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


async function approvedchats(req,res){
    try{
        const findapprovedchat = ChatApproval.aggregate({
            $match:{
                isapproved:true
            }
        })
        res.json({
            error:null,
            data:findapprovedchat
        })
    }catch(error){
        res.json({
            error:"somthing went wrong",
            data:null
        })
    }
}


module.exports = {
    updateapprovedby,
    updateisapproved,
    updatestatus,
    approvedchats
}