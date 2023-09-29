const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
require('dotenv').config()

//Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Routes
const doctorRoute = require('./Routes/doctorRoute.routes')
app.use(doctorRoute)


//Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(
        ()=>{
            app.listen(8000, ()=>{
                console.log("connected to db")
            })
        }
    ).catch(error =>{
        console.log(error)
    })