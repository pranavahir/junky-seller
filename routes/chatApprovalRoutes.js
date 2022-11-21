const express = require('express')
const ChatApprovalRoutes = express.Router()
const ChatApprovalController = require('../controllers/chatApproval/chatApprovalController')

ChatApprovalRoutes.post('/updatestatus',ChatApprovalController.updatestatus)
ChatApprovalRoutes.post('/updateisapproved',ChatApprovalController.updateisapproved)
ChatApprovalRoutes.post('/updateapprovedby',ChatApprovalController.updateapprovedby)
ChatApprovalRoutes.post('/approvedchats',ChatApprovalController.approvedchats)

module.exports = ChatApprovalRoutes