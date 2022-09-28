const express = require("express")
const router = express.Router()


const {
    registerResult,
    getResult,
    getOneResult,
    updateResult,
    deleteResult
} = require('../controller/resultController')

const VerifyAuthentication = require('../middleware/AuthMiddleWare')

/* -------------------------------------------------------- create result router -------------------------------------------------------- */
router.post('/result',VerifyAuthentication, registerResult)

/* ---------------------------------------------------------- get result router --------------------------------------------------------- */
router.get('/getresult',getResult)

/* -------------------------------------------------------- get one result router ------------------------------------------------------- */
router.get('/:resultId',VerifyAuthentication, getOneResult)

/* -------------------------------------------------------- update result router -------------------------------------------------------- */
router.patch('/:resultId',VerifyAuthentication, updateResult)

/* -------------------------------------------------------- delete result router -------------------------------------------------------- */
router.delete('/:resultId',VerifyAuthentication, deleteResult)


module.exports = router