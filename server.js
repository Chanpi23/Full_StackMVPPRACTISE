//todo declare variables
const express= require ("express");
const app= express()
const PORT=8000
const mongoose= require ("mongoose")

//import functions/routes
const connectDB = require("./config/database")

require('dotenv').config({path: './config/.env'})
// connect to database 
connectDB()

//middleware
app.set ("view engine", "ejs")
app.set(express.static("public"))
app.use(express.urlencoded({extended:true})) // if you have an app with a form you will need to use this line 

//set routes


//start server
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))
