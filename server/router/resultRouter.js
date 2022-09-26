const express = require("express")
const router = express.Router()


const {
    registerResult,
    getResult,
    getOneResult,
    updateResult,
    deleteResult
} = require('../controller/resultController')



/* -------------------------------------------------------- create result router -------------------------------------------------------- */
router.post('/result',registerResult)

/* ---------------------------------------------------------- get result router --------------------------------------------------------- */
router.get('/getresult',getResult)

/* -------------------------------------------------------- get one result router ------------------------------------------------------- */
router.get('/:resultId',getOneResult)

/* -------------------------------------------------------- update result router -------------------------------------------------------- */
router.patch('/:resultId',updateResult)

/* -------------------------------------------------------- delete result router -------------------------------------------------------- */
router.delete('/:resultId',deleteResult)


module.exports = router