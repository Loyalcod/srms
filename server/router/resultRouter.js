const express = require("express")
const router = express.Router()


const {
    registerResult,
    getResult
} = require('../controller/resultController')



/* -------------------------------------------------------- create result router -------------------------------------------------------- */
router.post('/result',registerResult)

/* ---------------------------------------------------------- get result router --------------------------------------------------------- */
router.get('/getresult',getResult)


module.exports = router