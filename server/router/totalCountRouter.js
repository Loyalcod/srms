const express = require("express")
const router = express.Router()

const {totalcount} = require('../controller/totalCountController')

/* -------------------------------------------------------- total count all crude ------------------------------------------------------- */
router.get('/count',totalcount)




module.exports = router