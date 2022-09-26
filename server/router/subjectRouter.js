const express = require("express")
const router = express.Router()


const {
    registerSubject,
    getSubject,
    getOneSbj,
    updateOneSubject,
    deleteSbj
} = require("../controller/subjectController")


/* ------------------------------------------------------- register subject router ------------------------------------------------------ */
router.post('/subject',registerSubject)

/* ------------------------------------------------------- get all subject router ------------------------------------------------------- */
router.get('/getSbj',getSubject)

/* ------------------------------------------------------- get one subject router ------------------------------------------------------- */
router.get('/:subjectId',getOneSbj)

/* ------------------------------------------------------ update one subject router ----------------------------------------------------- */
router.patch('/:subjectId',updateOneSubject)

router.delete('/:subjectId',deleteSbj)





module.exports = router