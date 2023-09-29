const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')

//Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Routes
const doctorRoute = require('./Routes/doctorRoute.routes')
app.use(doctorRoute)


//Connection
mongoose.connect("mongodb+srv://agrawalprerit:kaszLOtBiYkdeRGs@cluster0.97n3r9k.mongodb.net/")
    .then(
        ()=>{
            app.listen(8000, ()=>{
                console.log("connected to db")
            })
        }
    ).catch(error =>{
        console.log(error)
    })