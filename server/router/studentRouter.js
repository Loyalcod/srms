const express = require("express")
const router = express.Router()


const {
    studentcreate
} = require("../controller/studentController")


/* -------------------------------------------------------- student create router ------------------------------------------------------- */
router.post('/student',studentcreate)



module.exports = router