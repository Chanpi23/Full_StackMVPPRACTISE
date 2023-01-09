//todo declare variables
const express= require ("express");
const app= express()
const PORT=8001
const mongoose= require ("mongoose")

//import functions/routes
const connectDB = require('./config/database')
const homeRoutes= require('./routes/home')
require('dotenv').config({path: './config/.env'})

// connect to database 
connectDB()

//middleware
app.set ("view engine", "ejs")
app.set(express.static("public"))

//*Required to properly parse form POST requests - sending data
app.use(express.urlencoded({extended:true})) // if you have an app with a form you will need to use this line 

//set routes
app.use('/',homeRoutes)

//start server
app.listen(PORT,()=> console.log(`Server running on port ${PORT}`))
