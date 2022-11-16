const express = require('express')

const ConversationRoutes = express.Router()
const conversationController = require('../controllers/conversation/conversationController')


ConversationRoutes.post('/fetchcurrency',conversationController.fetchcurrency);

module.exports = ConversationRoutes;

