const express = require("express")
const app = express()
const cors = require('cors')
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const path = require("path")
const connectDB = require("./server/config/db")
require("dotenv").config({path: path.resolve(__dirname,'./server/.env')})

connectDB()
app.use(cors())

const port = process.env.PORT
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cookieParser())


app.get('/',(req,res)=>{
    res.send("this is the server side")
})

/* --------------------------------------------------------- admin router crude --------------------------------------------------------- */
const AdminRouter = require("./server/router/AdminRouter")
app.use('/admin',AdminRouter)

/* ----------------------------------------------------- authentication router crude ---------------------------------------------------- */
const authenticationRouter = require("./server/middleware/AuthMiddleWare")
app.use(authenticationRouter)

/* ----------------------------------------------------- student class router crude ----------------------------------------------------- */
const StudentClassRouter = require("./server/router/studentClassRouter")
app.use('/class',StudentClassRouter)

/* -------------------------------------------------------- student router crude -------------------------------------------------------- */
const studentRouter = require('./server/router/studentRouter')
app.use('/student',studentRouter)

/* -------------------------------------------------------- subject router crude -------------------------------------------------------- */
const subjectRouter = require('./server/router/subjectRouter')
app.use('/subject',subjectRouter)

/* --------------------------------------------------------- result router crude -------------------------------------------------------- */
const resultRouter = require('./server/router/resultRouter')
app.use('/result',resultRouter)


/* ---------------------------------------------- student subject combination router crude ---------------------------------------------- */
const studentSubjectCombination = require("./server/router/studentSubjectCombinationController")
app.use('/combo',studentSubjectCombination)

/* ------------------------------------------------------ total count router crude ------------------------------------------------------ */
const totalRouter = require("./server/router/totalCountRouter")
app.use('/totalcount',totalRouter)

app.listen(port,()=>{
    console.log("this server is running")
})