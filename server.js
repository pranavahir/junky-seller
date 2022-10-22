const express = require('express')
const bodyParser = require('body-parser')
const PORT = 4000
const app = express()
const mongoose = require('mongoose')
const UserRoutes = require('./routes/userRoutes')
const keys = require('./config/key')
const ProductRoutes = require('./routes/productRoutes')
const CartRoutes = require('./routes/cartRoutes')
const OrderedRoutes = require('./routes/orderedRoutes')
mongoose.connect(keys.URI,{useNewUrlParser:true,useUnifiedTopology:true},(error) => {
    if(error){
        throw error
    }else{
        console.log("MongoDB Connected")
    }
})
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/',UserRoutes)
app.use('/',ProductRoutes);
app.use('/',CartRoutes);
app.use('/',OrderedRoutes);
app.listen(PORT,() => {
    console.log(`Server is Running on http://localhost:${PORT}`)
})