const express = require('express')
const bodyParser = require('body-parser')
const PORT = 4000
const app = express()
const mongoose = require('mongoose')
const UserRoutes = require('./routes/userRoutes')
const keys = require('./config/key')
mongoose.connect(keys.URI,{useNewUrlParser:true,useUnifiedTopology:true},(error) => {
    if(error){
        throw error
    }
    console.log("MongoDB Connected")
})
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/',UserRoutes)
app.listen(PORT,() => {
    console.log(`Server is Running on http://localhost:${PORT}`)
})