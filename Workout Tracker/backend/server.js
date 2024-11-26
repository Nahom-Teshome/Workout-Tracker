const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workout')
const app = express()// start the express app

const port= process.env.PORT

//global middleware
app.use(express.json())//looks if a req exists and get access to it

app.use((res,req,next)=>{
    // console.log(req.url, req.method)
    next()
})




//route handler

//routes
app.use('/api/workout',workoutRoutes)

//connect to DB
    mongoose.connect( process.env.MONGO_URI )
    .then(()=>{
        //once we have connected to the database
        //listen for request 
        app.listen(port,()=>{
            console.log(`connected to DB and Listening on port ${port}`)
        })
    })
    .catch((err)=>{
        console.log("Error: ", err )
    })

