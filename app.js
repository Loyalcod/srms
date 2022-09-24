const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const path = require("path")
const connectDB = require("./server/config/db")
require("dotenv").config({path: path.resolve(__dirname,'./server/.env')})

connectDB()

const port = process.env.port
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cookieParser)

app.get('/',(req,res)=>{
    res.send("this is the server side")
})


app.listen(port,()=>{
    console.log("this server is running")
})